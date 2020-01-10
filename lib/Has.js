const fs = require("fs");
/**
  * @param {string} string
  */
function Has(string) {
    var file = JSON.parse(fs.readFileSync("./.quick-json.db.json", "utf8"));
    string = string.split(".");
    return new Promise(resolve => {
        if (!string || string === null) return resolve({ error: true, errorCode: 3, message: "Undefined string | Example: \'db.has(\"data\");\'" });
        else if (!string[0] || string[0] === null) return resolve({ error: true, errorCode: 3, message: "Undefined string | Example: \'db.has(\"data\");\'" });
        if (!file[0][string[0]]) return resolve(false);
        else if (!string[1] || string[1] === null) return resolve(true);
        else if (!file[0][string[0]][string[1]]) return resolve(false);
        else return resolve(true);
    });
}
module.exports = Has;