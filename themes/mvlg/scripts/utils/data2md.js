'use strict';

function appendStrRepeat(str, restr, times) {
  for (let i = 0; i < times; i++) {
    str += restr;
  }
  return str;
}

class MarkdownTextComponent {
  table (title, data) {
    if (!(title instanceof Array && data instanceof Array)) return '';

    let str = new String(), 
    collen = title.length,
    rowlen = title.length,
    list = new Array();

    for (let datum of data) {
      list.push(`| ${datum.join(' | ')} |`);
    }
    
    str += `| ${title.join(' | ')} |\n`;
    str += `${appendStrRepeat('|', ' --- |', collen)}\n`;
    str += list.join('\n');
    return str;
  }
  ol (list) {
    let items = new Array();
    for (let idx in list) {
      items.push(`${parseInt(idx)+1}. ${list[idx]}`);
    }
    return items.join('\n');
  }
  ul (list) {
    let items = new Array();
    for (let idx in list) {
      items.push(`- ${list[idx]}`);
    }
    return items.join('\n');
  }
}

class MarkdownTextLoader {
  constructor(sign='\n\n') {
    this._components = new Array();
    this.sign = sign;
  }
  add(component) {
    this._components.push(component);
    return this;
  }
  load() {
    return this._components.join(this.sign); 
  }
}

module.exports = {
  COMPONENT: new MarkdownTextComponent(),
  MarkdownTextComponent,
  MarkdownTextLoader
}