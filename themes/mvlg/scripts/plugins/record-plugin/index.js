/**
 * Updated:
 * 1.Achieve original functions, but they still can not be calculated by runtime.
 * 2.Improve the quality of sign handler struction.
 */
// const fs = require('fs');

// txt = fs.readFileSync('./test', { encoding:'utf8', flag:'r' });

// // txt -> lines
// lines = txt.split('\r\n')
// lines = lines.length == 1 ? txt.split('\n') : lines

/**
 * ###################################
 * 
 * Base Modules
 * 
 * ###################################
 */
// pystyle base
function int(any) {
  return Number.parseInt(any);
}
function float(any) {
  return Number.parseFloat(any);
}
function str(any) {
  return new String(any);
}
function bool(any) {
  return new Boolean(any);
}

// Origin model extend
Date.prototype.format = function (fmt) {
  var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ?
        (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}

// data struction
/**
 * Stack
 * - base on Array
 */
class Stack {
  constructor() {
    this.__stack = new Array();
  }
  add(el) {
    this.__stack.unshift(el);
    return this;
  }
  del(el) {
    return this.__stack.shift();
  }
  size() {
    return this.__stack.length;
  }
  empty() {
    return this.size() <= 0;
  }
  top() {
    return this.__stack[0];
  }
}

/**
 * ###################################
 * 
 * Basic Frame Handlers
 * 
 * ###################################
 */
class Config {};
class AppConfig extends Config {
  static signMaxSize = 10;
};


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
  static timeUnitFormat(unit) {
    unit = Math.floor(unit);
    return unit <= 0 ? '00' : 
      unit < 10 ? `0${unit}` : `${unit}`;
  }
  static dayFormat(time) {
    time = time / 1000;
    let hour = time / 3600 % 24;
    let minute = time / 60 % 60;
    let second = time % 60;
    let day = time / 3600 / 24;

    return [
      this.timeUnitFormat(day),
      this.timeUnitFormat(hour),
      this.timeUnitFormat(minute),
      this.timeUnitFormat(second)
    ]
  }
  static hourFormat(time) {
    time = time / 1000;
    let hour = time / 3600;
    let minute = time / 60 % 60;
    let second = time % 60;

    return [
      this.timeUnitFormat(hour),
      this.timeUnitFormat(minute),
      this.timeUnitFormat(second)
    ].join(':')
  }
  static calDay(start, finish) {
    let du = 1000 * 3600 * 24;
    start = Math.floor(start / du);
    finish = Math.floor(finish / du);
    return finish - start + 1;
  }
};
class LineHandler extends TextHandler {};
class SignHandler extends LineHandler {
  static defaultParser(txt) {
    let its = txt.split(' ');
    return its.length > 1 && its[0].length < AppConfig.signMaxSize ? its[0] : false;
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
// One stable one variable and double
// one stable one variable != one variable one stable  
class OSOVDoubleSignFirstHandler extends DoubleSignFirstHandler {
  execLineNum = 2;

  constructor(sign, signParser, signHandleFunc) {
    super(sign, signParser, signHandleFunc);
    this.varSigns = new Array();
    this.varSigns.push(sign);
  }
  include(signs) {
    this.varSigns = this.varSigns.concat(signs);
    return this;
  }
  signCheck(sign1, sign2) {
    return sign1 == this.sign && this.varSigns.indexOf(sign2) > -1;
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

  this.record = function(datetime=null, desc=null) {
    if (datetime == null) console.log('Datetime Null');
    return this.addDatetimeRecord(new models.DatetimeRecord(datetime, desc));
  }
  this.addDatetimeRecord = function(datetimeRecord) {
    this.start = new Date(Math.min(this.start, datetimeRecord.datetime));
    this.finish = new Date(Math.max(this.finish, datetimeRecord.datetime));
    this.records.push(datetimeRecord);
    this.number++;
    return this;
  }
  this.in = function(date) {
    return date >= this.start && date <= this.finish;
  }
  this.runtime = function() {
    return this.finish - this.start;
  }
  this.gaptime = function(date) {
    return date - this.start;
  }
  this.remaintime = function(date) {
    return this.finish - date;
  }
}
models.DatetimeFrameStatisticManager = function() {
  this.totaltime = 0;
  this.days = 0;
  this.start = new Date();
  this.finish = new Date(0);
  this.mintime = Infinity;
  this.maxtime = 0;
  this.collection = new Array();
  // Query
  this.empty = function() {
    return this.collection.length == 0;
  }
  this.top = function() {
    return this.collection[0];
  }
  this.last = function() {
    return this.collection[this.collection.length-1];
  }
  this.queryInsertIdx = function(datetimeFrameStatistic, collection) {
    for (let i in collection) {
      if (this.collection[i].start > datetimeFrameStatistic.finish) {
        return i;
      }
    }
    return this.collection.length;
  }
  // Basic
  this.new = function() {
    let datetimeFrameStatistic = new models.DatetimeFrameStatistic();
    this.collection.push(datetimeFrameStatistic);
    return datetimeFrameStatistic;
  }
  this.sort = function() {
    let collection = new Array();
    for (let datetimeFrameStatistic of this.collection) {
      let idx = this.queryInsertIdx(datetimeFrameStatistic, collection);
      idx == this.collection.length ? collection.push(datetimeFrameStatistic) : collection.splice(idx, 0, datetimeFrameStatistic);
    }
    return collection;
  }
  this.statistic = function() {
    for (let datetimeFrameStatistic of this.collection) {
      // Check single record.
      // if (datetimeFrameStatistic.runtime() == 0) console.log(datetimeFrameStatistic)
      this.totaltime += datetimeFrameStatistic.runtime();
      this.start = new Date(Math.min(this.start, datetimeFrameStatistic.start));
      this.finish = new Date(Math.max(this.finish, datetimeFrameStatistic.finish));
      this.mintime = Math.min(this.mintime, datetimeFrameStatistic.runtime());
      this.maxtime = Math.max(this.maxtime, datetimeFrameStatistic.runtime());
    }
    this.days = TimeHandler.calDay(this.start, this.finish)
  }
  // Calculate
  this.caltime = function(date) {
    let runtime = 0;
    for (let timeframe of this.sort()) {
      if (timeframe.in(date)) {
        runtime += timeframe.gaptime(date); break;
      } else {
        runtime += timeframe.runtime();
      }
    }
    return runtime;
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
  this.totaltime = null;

  // branch(top, tail).
  this.topbranchtime = null;
  this.tailbranchtime = null;
}
models.EventRecordLink = function(prev=false, data=null) {
  this.prev = prev;
  this.data = data;
  this.indeg = 0;
}
models.EventRecordLinkManager = function() {
  this.collection = new Object();
  this.datetimeFrameStatisticManager = null;

  // Setter
  this.setDatetimeFrameStatisticManager = function(datetimeFrameStatisticManager) {
    this.datetimeFrameStatisticManager = datetimeFrameStatisticManager;
    return this;
  }

  // Transfer
  this.toArray = function() {
    let results = new Array();
    for (let node of Object.values(this.collection)) {
      results.push(node);
    }
    return results;
  }

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
  this.queryByIds = function(ids) {
    let results = new Array();
    for (let id of ids) {
      results.push(this.collection[id]);
    }
    return results;
  }
  this.querySortByDatetime = function() {
    return this.toArray().sort((p, c) => p.data.datetime - c.data.datetime);
  }

  // Time Frame Calculation
  // Runtime
  this.calculateEventRuntime = function() {
    if (this.datetimeFrameStatisticManager == null) return false;
    let pretime = 0;

    for (let link of this.querySortByDatetime()) {
      let data = link.data;
      let time = this.datetimeFrameStatisticManager.caltime(data.datetime);
      let runtime = time - pretime;
      link.data.runtime = runtime;
      pretime = time;
    }

    return this;
  }
  // Total Time
  this.calculateEventTotaltime = function() {
    if (this.datetimeFrameStatisticManager == null) return false;

    for (let link of this.querySortByDatetime()) {
      let totaltime = 0;
      let node = link;

      while (node) {
        totaltime += node.data.runtime;
        node = node.prev;
      }

      link.data.totaltime = totaltime;
    }
    
    return this;
  }
  // Top Branch Time
  this.calculateEventTopBranchtime = function() {
    if (this.datetimeFrameStatisticManager == null) return false;
    let links = this.toArray();
    // Test with leafs
    // let links = this.queryByIds(this.queryLeafIds());
    
    for (let link of links) {
      let node = link;
      let branchtime = 0;
      let stack = new Stack();

      // create stack
      while (node) {
        stack.add(node);
        node = node.prev;
      }
      // console.log(stack.__stack)
      // find top branch node
      while (!stack.empty()) {
        let node = stack.top();
        if (node.indeg > 1) break;
        stack.del();
      }
      // console.log(stack.__stack)
      // calculate branchtime
      while (!stack.empty()) {
        let node = stack.del();
        branchtime += node.data.runtime;
      }
      // console.log(branchtime)
      
      link.data.topbranchtime = branchtime;
    }
    
    return this;
  }
  // Tail Branch Time
  this.calculateEventTailBranchtime = function() {
    if (this.datetimeFrameStatisticManager == null) return false;
    let links = this.toArray();
    
    for (let link of links) {
      let node = link.prev;
      let branchtime = link.data.runtime;

      // create stack
      while (node) {
        branchtime += node.data.runtime;
        if (node.indeg > 1) break;
        node = node.prev;
      }
      // console.log(branchtime, link.data)
      
      link.data.tailbranchtime = branchtime == link.data.runtime ? 0 : branchtime;
      // console.log(link.data.tailbranchtime)
    }
    
    return this;
  }
}


/**
 * Official Record 
 */
class DefaultTextLinesManager extends TextLinesManager {
  constructor() {
    super();
    this.date = new Date();
    this.dayCount = 0;
    this.tempFrameStatistic = null;
    this.datetimeFrameStatisticManager = new models.DatetimeFrameStatisticManager();

    this
      .addHandler(new SingleSignHandler('y', SignHandler.defaultParser, txt => this.date.setFullYear(txt.substring(2))))
      .addHandler(new SingleSignHandler('m', SignHandler.defaultParser, txt => this.date.setMonth(int(txt.substring(2))-1, this.date.getDate())))
      .addHandler(new SingleSignHandler('d', SignHandler.defaultParser, txt => { this.date.setDate(txt.substring(2)); this.dayCount++; }))
      .addHandler(new OSOVDoubleSignFirstHandler('-', SignHandler.defaultParser, txt => {
        this.tempFrameStatistic = this.datetimeFrameStatisticManager.new().record(TimeHandler.defaultParser(txt.substring(2), this.date), null);
      }).include(['y', 'm', 'd']))
      .addHandler(new SingleSignTextHandler('-', SignHandler.defaultParser, txt => TimeHandler.defaultParser(txt.substring(2), this.date), txt => {
        this.tempFrameStatistic.record(new Date(this.date), txt);
      }));
  }
}

/**
 * Record Core
 */
class Core {};
class RecordV2Core extends Core {
  constructor() {
    super();
    this.eventRecordLinkManager = new models.EventRecordLinkManager();
    this.textLinesManager = new DefaultTextLinesManager();
    this.datetimeFrameStatisticManager = this.textLinesManager.datetimeFrameStatisticManager;
    
    // Event
    this.textLinesManager.addHandler(new SingleSignHandler('c', SignHandler.defaultParser, txt => {
      let [ prev, cur, title ] = EventHandler.defaultParser(txt.substring(2));
      this.eventRecordLinkManager.event(prev, new models.EventRecord(cur, title, new Date(this.textLinesManager.date)));
    }));
  }
  load(data) {
    this.data = data;
    return this;
  }
  boot() {
    let idx = 0;
    while (idx < this.data.length) {
      let next = this.textLinesManager.runHandler(this.data, idx);
      idx += next;
    }
    this.datetimeFrameStatisticManager.statistic();
    this.eventRecordLinkManager.setDatetimeFrameStatisticManager(this.datetimeFrameStatisticManager);
    this.eventRecordLinkManager.calculateEventRuntime().calculateEventTotaltime()
      .calculateEventTopBranchtime().calculateEventTailBranchtime();
    return this;
  }
};

/**
 * Summary
 */

class Summary {};
class AppSummary extends Summary {
  constructor(core) {
    super();
    this.txt = '\n' +
    '| 记录项 | 记录数值 |\n' +
    '| --- | --- |\n' +
    '| 天数间隔 | ' + core.datetimeFrameStatisticManager.days + ' |\n' +
    '| 有效天数 | ' + core.textLinesManager.dayCount + ' |\n' +
    '| 起始日期 | ' + core.datetimeFrameStatisticManager.start.format("yyyy-MM-dd hh:mm:ss") + ' |\n' +
    '| 结束日期 | ' + core.datetimeFrameStatisticManager.finish.format("yyyy-MM-dd hh:mm:ss") + ' |\n' +
    '| 片段数量 | ' + core.datetimeFrameStatisticManager.collection.length + ' |\n' +
    '| 片总时长 | ' + TimeHandler.hourFormat(core.datetimeFrameStatisticManager.totaltime) + ' |\n' +
    '| 最短片段 | ' + TimeHandler.hourFormat(core.datetimeFrameStatisticManager.mintime) + ' |\n' +
    '| 最长片段 | ' + TimeHandler.hourFormat(core.datetimeFrameStatisticManager.maxtime) + ' |\n'
    
    // Branch data
    this.ntxt = '| 周目 | 事件 | 事件时长 | 事件长支时长 | 事件短支时长 | 总时长 |\n' +
    '| --- | --- | --- | --- | --- | --- |\n';
    try {
      let eventRecordLinkManager = core.eventRecordLinkManager;
      let events = eventRecordLinkManager.queryByIds(eventRecordLinkManager.queryLeafIds());
      for (let idx in events) {
        let event = events[idx];
        this.ntxt += '\n' +
          `| ${int(idx)+1} ` +
          `| ${event.data.title} ` +
          `| ${TimeHandler.hourFormat(event.data.runtime)} ` +
          `| ${TimeHandler.hourFormat(event.data.topbranchtime)} ` +
          `| ${TimeHandler.hourFormat(event.data.tailbranchtime)} ` +
          `| ${TimeHandler.hourFormat(event.data.totaltime)} |\n`;
      }
    } catch {
      this.ntxt += '| - | - | - | - | - | - |\n';
    }
  }
  md() {
    return this.txt + '\n' + this.ntxt;
  }
}

/**
 * App main 
 */ 
class App {
  constructor(lines) {
    this.data = lines;
    this.__core = this.core();
  }
  core(version='v2') {
    let core = null;
    
    switch (version) {
      default:
        core = new RecordV2Core().load(this.data).boot();
    }
    
    return core;
  }
  run() {
    return new AppSummary(this.__core);
  }
}

// main
// new App(lines).run()

module.exports = {
  App
}
