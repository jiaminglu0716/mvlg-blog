/**
 * Data
 */
const GAMER = {
  types: {
    YL2000: new LinkGroupDict()
      .add(new LinkGroup()
        .setName('Sony')
        .setCNName('索尼')
        .add(new LinkItem('PSV', '/psv_all.json', 'PSV'))
        .add(new LinkItem('PSP', '/psp.json', 'PSP'))
        .add(new LinkItem('PS1', '/ps1.json', 'PS1'))
        .add(new LinkItem('PS2', '/ps2jp.json', 'PS2'))
        .add(new LinkItem('PS3', '/ps3.json', 'PS3')))
      .add(new LinkGroup()
        .setName('Nintendo')
        .setCNName('任天堂')
        .add(new LinkItem('3DS', '/3ds.json', '3DS'))
        .add(new LinkItem('NDS', '/nds.json', 'NDS'))
        .add(new LinkItem('GBA', '/gba.json', 'GBA'))
        .add(new LinkItem('WII', '/wii.json', 'WII'))
        .add(new LinkItem('NEW 3DS', '/3dsnew.json', '3DSNEW')))
      .add(new LinkGroup()
        .setName('Microsoft')
        .setCNName('任微软')
        .add(new LinkItem('XBOX', '/xbox.json', 'XBOX'))
        .add(new LinkItem('XBOX360', '/xbox360.json', 'XBOX360')))
      .add(new LinkGroup()
        .setName('Microsoft')
        .setCNName('任微软')
        .add(new LinkItem('XBOX', '/xbox.json', 'XBOX'))
        .add(new LinkItem('XBOX360', '/xbox360.json', 'XBOX360'))),
    Galgame: '',
    Resource: '',
  }
}

const MESSAGE = {
  kwl: new Number(0),
  keyword: new String(),
  data: new Array(),
  results: new Array(),
  features: new Array('name', 'cn_name')
}

/**
 * Methods
 */
function search(keyword, data, defaultKeys=new Array()) {
  // extract kw
  class FilterItem {
    constructor(key, value) {
      this.key = key;
      this.value = value;
    }
  }
  let filters = new Array();
  let keywords = new Array();

  keyword.split(' ').forEach(key => {
    let idx = key.indexOf(':');
    key = key.toLowerCase();
    if (idx > -1) {
      filters.push(new FilterItem(
        key.slice(0,idx),
        key.slice(idx+1)
      ));
    } else {
      keywords.push(key);
    }
  });

  // console.log(keywords, filters);

  // ex data file
  function obj2str(item, keys, sign='/') {
    let strArr = new Array();
    keys.forEach(key => strArr.push(item[key]));
    return strArr.join(sign);
  }

  function match(str, mstr) {
    return str.indexOf(mstr) > -1;
  }

  function boolArrReduce(arr) {
    return arr.reduce((p, c) => p & c);
  }


  let results = new Array();

  for (let item of data) {
    let s = obj2str(item, defaultKeys).toLowerCase();
    let ks = keywords.map(key => match(s, key));
    let fs = filters.map(filter => match(item[filter.key].join('/'), filter.value));
    
    if (
      (fs.length > 0 && ks.length == 0 && boolArrReduce(fs)) ||
      (fs.length == 0 && ks.length > 0 && boolArrReduce(ks)) ||
      (fs.length > 0 && ks.length > 0 && boolArrReduce(fs) && boolArrReduce(ks))
    ) {
      results.push(item);
    }
  }
  
  return results;      
}

/**
 * Page Index
 */
new Vue({
  el: '#app',
  data: { gamer: GAMER, message: MESSAGE },
  async mounted() {
    // Init data
    await this.loadData(this.gamer.groups[0].list[0].link)
    // Set default, and u can ban it.
    await this.$set(this.message, 'results', search("伊苏 langs:英语", this.message.data));
  },
  methods: {
    getList(link) {
      return $.ajax(url=link);
    },
    loadDataEvent(event) {
      this.loadData(event.target.value);
    },
    async loadData(link) {
      // join the path of link with current domain
      // link = window.location.origin + link;
      // Clear result list
      this.$set(this.message, 'results', new Array());
      // Get data from api
      let message = await this.getList(link);
      // to dto list
      message = await new YL2000DataLoader('PSV', message.content).toList();
      // Set data
      this.$set(this.message, 'data', message);
    },
    searchFilter() {
      let keyword = this.message.keyword;
      
      // ban backward search
      if (keyword.length < this.kwl) {
        this.$set(this.message, 'kwl', keyword.length);
        return false;
      }
      // ban start step below 2
      if (keyword.length < 2) return false;

      return true;
    },
    searchData() {
      if (this.searchFilter())
        this.$set(this.message, 'results', 
          search(this.message.keyword, this.message.data, this.message.features));
    }
  }
});