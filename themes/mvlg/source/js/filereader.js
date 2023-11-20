class TSVReader {
    constructor(data) {
        this.values = new Array();
        // transfer to line data
        let lines = data;
        if (data instanceof String)
            lines = data.split('\n');

        lines.forEach(line => {
            let temp = line.split('\t');
            if (!(temp.length == 10)) return;
            let [ id, region, name, pkg, link, 
                zrif, contID, LMDate, size, sha256 ] = temp;
            this.values.push({
                id, region, name, pkg, link, 
                zrif, contID, LMDate, size, sha256
            })
        });
    }
}