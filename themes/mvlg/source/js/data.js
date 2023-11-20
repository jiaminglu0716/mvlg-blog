/**
 * Simple data object used to act as search object to find real object.
 * reduce the usage of RAM and improve the quality of search.
 */
class ID {
    constructor(id) {
        this.value = id === undefined ? 'None' : id;
    }
}

/**
 * DTO is a basic unit in model.
 * Model only deal with DTO not object we set from outside.
 * Facade just like a door, they can give outside object a passport.
 * Loader contains different facades just like a company. 
 */
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
            case 'PSP':
                facade = new YL2000PSPGamerDataFacade();
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