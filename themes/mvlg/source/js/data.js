/**
 * Function
 */

String.prototype.firstUpperCase = function() {
    let s = this;
    if (s == 'id') return 'ID';
    s = s.toLowerCase();
    return s[0].toUpperCase() + s.slice(1)
}

/**
 * Simple data object used to act as search object to find real object.
 * reduce the usage of RAM and improve the quality of search.
 */
class ID {
    constructor(id) {
        this.value = id === undefined ? 'None' : id;
    }
}

class BaseMeta {
    getAllKeys = () => Object.keys(this);
    getAllValues = () => Object.values(this);
    getKeys = () => Object.keys(this).filter(key => typeof this[key] != 'function');
    getValues = () => this.getKeys().map(key => this[key]);
    
    toDict() {
        let o = new Object();
        this.getKeys().forEach(key => o[key] = this[key]);
        return o;
    }

    setter() {
        this.getAllKeys().filter(key => !(key.indexOf('set') == 0)).forEach(key => {
            let ovalue = this[key];
            if (ovalue instanceof Array) {
                this[`add${key.firstUpperCase()}`] = function(value) {
                    this[key].push(value);
                    return this;
                }
                this[`set${key.firstUpperCase()}s`] = function(values) {
                    if (this[key] == undefined || this[key] == null) return this;
                    values.forEach(value => this[`add${key.firstUpperCase()}`](value));
                    return this;
                }
            } else if (ovalue instanceof Set) {
                this[`add${key.firstUpperCase()}`] = function(value) {
                    this[key].add(value);
                    return this;
                }
                this[`set${key.firstUpperCase()}s`] = function(values) {
                    if (this[key] == undefined || this[key] == null) return this;
                    values.forEach(value => this[`add${key.firstUpperCase()}`](value));
                    return this;
                }
            } else
                this[`set${key.firstUpperCase()}`] = function(value) {
                    if (this[key] == undefined || this[key] == null) return this;
                    this[key] = value;
                    return this;
                }
        });
        return this;
    }
    getter() {
        this.getAllKeys().filter(key => !(key.indexOf('get') == 0)).forEach(key => {
            let value = this[key];
            if (value instanceof Array || value instanceof Set) 
                this[`get${key.firstUpperCase()}s`] = () => this[key];
            else
                this[`get${key.firstUpperCase()}`] = () => this[key];
        });
        return this;
    }
    model() {
        return this.setter().getter();
    }
}

/**
 * DTO is a basic unit in model.
 * Model only deal with DTO not object we set from outside.
 * Facade just like a door, they can give outside object a passport.
 * Loader contains different facades just like a company. 
 */
class DataDTO extends BaseMeta {
    set(key, value) {
        if (value == undefined || value == null) return this;
        this[key] = value;
        return this;
    }
}

class DataFacade {}

class DataLoader {}

class GameID extends ID {}

class GamerDataDTO extends DataDTO {
    constructor() {
        super();
        this.id = new GameID();
        this.name = new String();
        this.cn_name = new String();
        this.publisher = new String();
        this.developer = new String();
        this.link = new String();
        this.desc = new String();
        this.date = new Date();
        this.region = new String();
        this.img = new String();
        this.langs = new Array();
        this.genres = new Array();
    }
    setID = (val) => this.set('id', new GameID(val));
    setName = (val) => this.set('name', val);
    setCNName = (val) => this.set('cn_name', val);
    setPublisher = (val) => this.set('publisher', val);
    setDeveloper = (val) => this.set('developer', val);
    setLink = (val) => this.set('link', val);
    setDesc = (val) => this.set('desc', val);
    setDate = (val) => this.set('date', val);
    setRegion = (val) => this.set('region', val);
    setImage = (val) => this.set('img', val);
    addLanguage(val) {
        this.langs.push(val);
        return this;
    }
    addGenre(val) {
        this.genres.push(val);
        return this;
    }
    setLanguages(vals) {
        if (vals instanceof Array)
            vals.forEach(val => this.addLanguage(val));
        return this;
    }
    setGenres(vals) {
        if (vals instanceof Array)
            vals.forEach(val => this.addGenre(val));
        return this;
    }
}


class ResourceDataDTO extends DataDTO {
    constructor() {
        super();
        this.id = new GameID();
        this.name = new String();
        this.channel = new Array();
        this.model();
        this.cn_name = new String();
    }
    setCNName = (val) => this.set('cn_name', val);
}

// console.log(new ResourceDataDTO().setChannels([222,333]).getChannels())
/**
 * YL2000 is not a great sample, but these data from this site, so?
 * Respect YL2000, now I need to acknowledge the design is not merit, and the next time I need to find great mode to deal with these data. 
 */
class YL2000BaseGamerDataFacade extends DataFacade {
    obj2dto(o) {
        return new GamerDataDTO()
            .setID(o.game_id)
            .setName(o.game_name)
            .setCNName(o.ch_name)
            .setPublisher(o.publisher)
            .setDeveloper(o.developer)
            .setRegion(o.region)
            .setLanguages(o.language)
            .setImage(o.img)
            .setDate(new Date(o.date))
            .setGenres(o.genre);
    }
}

class YL2000PSVGamerDataFacade extends DataFacade {
    obj2dto(o) {
        return new YL2000BaseGamerDataFacade().obj2dto(o);
    }
}

class YL2000PSPGamerDataFacade extends DataFacade {
    obj2dto(o) {
        return new YL2000BaseGamerDataFacade().obj2dto(o)
            .setID(`${o.game_id}|${o.UMD_ID}`)
            .setDeveloper(o.publisher)
            .setGenres(new Array(o.genre));
    }
}

class YL2000PS2GamerDataFacade extends DataFacade {
    obj2dto(o) {
        return new YL2000BaseGamerDataFacade().obj2dto(o)
            .setID(`${o.id}`)
            .setCNName(o.game_name)
    }
}

class YL2000PS3GamerDataFacade extends DataFacade {
    obj2dto(o) {
        return new YL2000BaseGamerDataFacade().obj2dto(o)
            .setID(`${o.no}|${o.game_id}`)
            .setCNName(o.game_name)
            .setDate(`${o['Publish Date']}`)
    }
}

class YL2000NDSGamerDataFacade extends DataFacade {
    obj2dto(o) {
        return new YL2000BaseGamerDataFacade().obj2dto(o)
            .setID(`${o.id}`)
    }
}

class YL2000WIIGamerDataFacade extends DataFacade {
    obj2dto(o) {
        return new YL2000BaseGamerDataFacade().obj2dto(o)
            .setID(`${o.id}|${o.game_id}`)
            .setCNName(o.game_name)
    }
}

class YL2000XBOX360GamerDataFacade extends DataFacade {
    obj2dto(o) {
        return new YL2000BaseGamerDataFacade().obj2dto(o)
            .setCNName(o.game_name)
    }
}

class YL2000DataLoader extends DataLoader {
    constructor(type, data) {
        super();
        this.type = type;
        this.data = data;
    }
    toList() {
        let facade, results = new Array();

        switch (this.type) {
            case 'PSV': facade = new YL2000PSVGamerDataFacade(); break;
            case 'PSP': facade = new YL2000PSPGamerDataFacade(); break;
            case 'PS1': facade = new YL2000PS2GamerDataFacade(); break;
            case 'PS2': facade = new YL2000PS2GamerDataFacade(); break;
            case 'PS3': facade = new YL2000PS3GamerDataFacade(); break;
            case 'NDS': facade = new YL2000NDSGamerDataFacade(); break;
            case 'GBA': facade = new YL2000NDSGamerDataFacade(); break;
            case 'WII': facade = new YL2000WIIGamerDataFacade(); break;
            case '3DSNEW': facade = new YL2000PS2GamerDataFacade(); break;
            case 'XBOX360': facade = new YL2000XBOX360GamerDataFacade(); break;
            default: facade = new YL2000BaseGamerDataFacade();
        }

        this.data.forEach(object => {
            results.push(facade.obj2dto(object));
        });

        return results;
    }
}


/**
 * group -> manage link collection just like a team.
 * dict -> manage and query group via name.
 * 
 * we often see dict as a company and group is a thread to response a part of job.
 * And the group need a lots of teams to touch the target which has been defined before we act, such as salers.
 */


class LinkItem {
    constructor(title, link, value='') {
        this.link = link;
        this.value = value;
        this.title = title;
    }
}

class LinkGroup {
    constructor() {
        this.list = [];
        this.name = 'Undefine';
        this.cn_name = 'Undefine';
    }
    setName(val) {
        this.name = val;
        return this;
    }
    setCNName(val) {
        this.cn_name = val;
        return this;
    }
    add(link) {
        this.list.push(link);
        return this;
    }
}

class LinkGroupDict {
    constructor() {
        this.lib = new Object();
    }
    add(group) {
        this.lib[group.name] = group;
        return this;
    }
    query(name) {
        return this.lib[name];
    }
}