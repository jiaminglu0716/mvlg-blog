/**
 * Updated:
 * 1.Achieve original functions, but they still can not be calculated by runtime.
 * 2.Improve the quality of sign handler struction.
 */
const fs = require('fs');

txt = fs.readFileSync('./test', { encoding:'utf8', flag:'r' });

// txt -> lines
lines = txt.split('\r\n')
lines = lines.length == 1 ? txt.split('\n') : lines

// extends

let deepclone = function () {
  let source = this;
  if (typeof source !== 'object' || source == null) {
    return source;
  }
  const target = Array.isArray(source) ? [] : {};
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (typeof source[key] === 'object' && source[key] !== null) {
        target[key] = deepClone(source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}
/**
 * Base
 */
function int(str) {
  return parseInt(str);
}


// Basic Models
class Config {};
class AppConfig extends Config {};


class Handler {
  check(data, idx) {}
  handle(data, idx) {}
  run(data, idx) { if (this.check(data, idx)) this.handle(data, idx) }
};
class TextHandler extends Handler {};
class TimeHandler extends Handler {
  static defaultParser(txt, date) {
    let [ hour, minute ] = txt.split(':');
    date.setHours(hour);
    date.setMinutes(minute);
    return new Date(date);
  }
};
class LineHandler extends TextHandler {};
class SignHandler extends LineHandler {
  static defaultParser(txt) {
    let its = txt.split(' ');
    return its.length > 1 ? its[0] : false;
  }
  constructor(signParser) {
    super();
    this.signNum = 1;
    this.execLineNum = 1;
    this.nextLineNum = 1;

    this.signParser = signParser;
  }

};
class SingleSignHandler extends SignHandler {
  constructor(sign, signParser, signHandleFunc) {
    super(signParser);
    this.sign = sign;

    this.signHandleFunc = signHandleFunc;
  }
  signCheck(sign) {
    return sign == this.sign;
  }
  check(data, idx) {
    let line = data[idx];
    let sign = this.signParser(line);

    return this.signCheck(sign);
  }
  handle(data, idx) {
    this.signHandleFunc(data[idx]);
    return this;
  }
};
class MultiLineSingleSignHandler extends SingleSignHandler {
  constructor(sign, signParser, signHandleFunc) {
    super(sign, signParser, signHandleFunc);
  }
  borderCheck(data, idx) {
    // console.log(idx, this.execLineNum, data.length,  idx > 0 && idx + this.execLineNum <= data.length)
    return idx > 0 && idx + this.execLineNum <= data.length;
  }
  check(data, idx) {
    if (!this.borderCheck(data, idx)) return false;
    
    let line = data[idx],
    line2 = data[idx+1];
    // console.log(line, line2)
    let sign1 = this.signParser(line),
    sign2 = this.signParser(line2);

    return this.signCheck(sign1, sign2);
  }
};

/**
 * Official Handler
 */
class DoubleSignFirstHandler extends MultiLineSingleSignHandler {
  execLineNum = 2;

  constructor(sign, signParser, signHandleFunc) {
    super(sign, signParser, signHandleFunc);
  }
  signCheck(sign1, sign2) {
    return sign1 == this.sign && sign1 == sign2;
  }
  handle(data, idx) {
    this.signHandleFunc(data[idx]);
    return this;
  }
};
class SingleSignTextHandler extends MultiLineSingleSignHandler {
  execLineNum = 2;
  nextLineNum = 2;

  constructor(sign, signParser, signHandleFunc, textHandleFunc=false) {
    super(sign, signParser, signHandleFunc);
    this.textHandleFunc = textHandleFunc;
  }
  signCheck(sign1, sign2) {
    return sign1 == this.sign && !sign2;
  }
  handle(data, idx) {
    this.signHandleFunc(data[idx]);
    if (this.textHandleFunc) this.textHandleFunc(data[idx+1]);
    return this;
  }
};

class MultiVarSignHandler extends SignHandler {};

/**
 * Event Handler
 */
class EventHandler extends Handler {
  static defaultParser(txt) {
    let titleLIdx = txt.indexOf('['),
    titleRIdx = txt.lastIndexOf(']');

    let title = txt.substring(titleLIdx+1, titleRIdx);
    let [ prev, cur ] = txt.substring(0, titleLIdx).trim().replace(/\s+/, ' ', 'gi').split(' ');
    
    return [ prev, cur, title ];
  }
}

class Manager {};
class TextLinesManager extends Manager {
  constructor() {
    super();
    this.handlers = new Array();
  }
  addHandler(handler) {
    this.handlers.push(handler);
    return this;
  }
  runHandler(data, idx) {
    for (let handler of this.handlers) {
      if (handler.check(data, idx)) {
        return handler.handle(data, idx).nextLineNum;
      }
    }
    return 1;
  }
};

// ###########################
//
//  Data Models
//
// ###########################
const models = {};

// Datetime
models.DatetimeRecord = function(datetime, desc) {
  this.datetime = datetime;
  this.desc = desc;
}
models.DatetimeFrameStatistic = function() {
  this.start = new Date();
  this.finish = new Date(0);
  this.number = 0;
  this.records = new Array();

  this.addDatetimeRecord = function(datetimeRecord) {
    this.start = new Date(Math.min(this.start, datetimeRecord.datetime));
    this.finish = new Date(Math.max(this.finish, datetimeRecord.datetime));
    this.records.push(datetimeRecord);
    this.number++;
  }
}
models.DatetimeFrameStatisticManager = function() {
  this.collection = new Array();

  this.new = function() {
    let datetimeFrameStatistic = new models.DatetimeFrameStatistic();
    this.collection.push(datetimeFrameStatistic);
    return datetimeFrameStatistic;
  }
}

// Event
models.EventRecord = function(id, title, datetime) {
  this.id = id;
  this.title = title;
  this.datetime = datetime;
  
  /**
   * Calculate Attribution
   * - According to timeframe collection.
   */
  this.runtime = null;
  this.branchtime = null;
  this.totaltime = null;
}
models.EventRecordLink = function(prev=false, data=null) {
  this.prev = prev;
  this.data = data;
  this.indeg = 0;
}
models.EventRecordLinkManager = function() {
  this.collection = new Object();

  // Event Manager
  this.event = function(pid, eventRecord) {
    let plink = this.query(pid);
    if (plink) plink.indeg++;
    let eventRecordLink = new models.EventRecordLink(plink, eventRecord);
    this.collection[eventRecordLink.data.id] = eventRecordLink;
  }
  this.query = function(id) {
    return this.collection[id] == undefined ? false : this.collection[id];
  }

  // Parent Tree Query
  this.queryLeafIds = function() {
    let ids = new Array();
    for (let node of Object.values(this.collection)) {
      if (node.indeg == 0) {
        ids.push(node.data.id);
      }
    }
    return ids;
  }
  this.queryLeafsByIds = function(ids) {
    let results = new Array();
    for (let id of ids) {
      results.push(this.collection[id]);
    }
    return results;
  }

  // Time Summary
  this.queryLeafsByIds = function(ids) {
    let results = new Array();
    for (let id of ids) {
      results.push(this.collection[id]);
    }
    return results;
  }
}

/**
 * App main 
 */ 
const App = function(lines) {
  this.data = lines;
  this._initTempVars();
}
App.prototype._initTempVars = function() {
  this.date = new Date();
}
App.prototype.testModels = function() {
  console.log(new models.DatetimeRecord(1, 2, 3))
  console.log(new models.DatetimeRecord(4, 5, 3))
}
App.prototype.testHandlers = function() {
  let eventRecordLinkManager = new models.EventRecordLinkManager();

  let datetimeFrameStatisticManager = new models.DatetimeFrameStatisticManager();
  let tempFrameStatistic = null;
  let textLinesManager = new TextLinesManager();
  // Datetime
  textLinesManager.addHandler(new SingleSignHandler('y', SignHandler.defaultParser, txt => this.date.setFullYear(txt.substring(2))));
  textLinesManager.addHandler(new SingleSignHandler('m', SignHandler.defaultParser, txt => this.date.setMonth(txt.substring(2))));
  textLinesManager.addHandler(new SingleSignHandler('d', SignHandler.defaultParser, txt => this.date.setDate(txt.substring(2))));
  textLinesManager.addHandler(new DoubleSignFirstHandler('-', SignHandler.defaultParser, txt => {
    tempFrameStatistic = datetimeFrameStatisticManager.new();
    tempFrameStatistic.addDatetimeRecord(new models.DatetimeRecord(TimeHandler.defaultParser(txt.substring(2), this.date), null));
  }));
  textLinesManager.addHandler(new SingleSignTextHandler('-', SignHandler.defaultParser, txt => TimeHandler.defaultParser(txt.substring(2), this.date), txt => {
    tempFrameStatistic.addDatetimeRecord(new models.DatetimeRecord(new Date(this.date), txt));
  }));
  // Event
  textLinesManager.addHandler(new SingleSignHandler('c', SignHandler.defaultParser, txt => {
    let [ prev, cur, title ] = EventHandler.defaultParser(txt.substring(2));
    eventRecordLinkManager.event(prev, new models.EventRecord(cur, title, new Date(this.date)));
  }));

  let idx = 0;
  while (idx < this.data.length) {
    let next = textLinesManager.runHandler(this.data, idx);
    idx += next;
  }

  // console.log(datetimeFrameStatisticManager.collection)
  console.log(eventRecordLinkManager.collection)
  console.log(eventRecordLinkManager.queryLeafsByIds(eventRecordLinkManager.queryLeafIds()))
  
}
App.prototype.run = function() {
  console.log(lines)
}

// main
new App(lines).testHandlers()

