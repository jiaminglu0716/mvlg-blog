class ID {
    constructor(id) {
        this.value = id === undefined ? 'None' : id;
    }
}

class DataDTO {}

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
    setID(val) {
        this.id = new GameID(val);
        return this;
    }
    setName(val) {
        this.name = val;
        return this;
    }
    setCNName(val) {
        this.cn_name = val;
        return this;
    }
    setPublisher(val) {
        this.publisher = val;
        return this;
    }
    setDeveloper(val) {
        this.developer = val;
        return this;
    }
    setLink(val) {
        this.link = val;
        return this;
    }
    setDesc(val) {
        this.desc = val;
        return this;
    }
    setDate(val) {
        this.date = val;
        return this;
    }
    setRegion(val) {
        this.region = val;
        return this;
    }
    setImage(val) {
        this.img = val;
        return this;
    }
    addLanguage(val) {
        this.langs.push(val);
        return this;
    }
    addGenre(val) {
        this.genres.push(val);
        return this;
    }
    setLanguages(vals) {
        vals.forEach(val => this.addLanguage(val));
        return this;
    }
    setGenres(vals) {
        vals.forEach(val => this.addGenre(val));
        return this;
    }
}

class YL2000BaseGamerDataFacade extends DataFacade {
    obj2dto(o) {
        return new GamerDataDTO()
            .setID(o.game_id)
            .setName(o.cn_name)
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

class YL2000DataLoader extends DataLoader {
    constructor(type, data) {
        super();
        this.type = type;
        this.data = data;
    }
    toList() {
        let facade, results = new Array();

        switch (this.type) {
            case 'PSV':
                facade = new YL2000PSVGamerDataFacade();
                break;
            default:
                facade = new YL2000BaseGamerDataFacade();
        }

        this.data.forEach(object => {
            results.push(facade.obj2dto(object));
        });

        return results;
    }
}


/**
 * 
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
        this.linkset = new Set();
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
        this.linkset.add(link);
        return this;
    }
}

class LinkGroupDict {
    constructor() {
        this.lib = new Object();
    }
    add(gname, group) {
        this.lib[gname] = group;
        return this;
    }
    query(gname) {
        return this.lib[gname];
    }
}