const fs = require("fs");
/**
  * @param {string} string
  */
function Fetch(string) {
    var file = JSON.parse(fs.readFileSync("./.quick-json.db.json", "utf8"));
    string = string.split(".");
    return new Promise((resolve, reject) => {
        if (!string || string === null) return resolve({ error: true, errorCode: 3, message: "Undefined string | Example: \'db.get(\"data\");\'" });
        else if (!string[0] || string[0] === null) return resolve({ error: true, errorCode: 3, message: "Undefined string | Example: \'db.get(\"data\");\'" });
        else if (!file[0][string[0]]) return reject(new TypeError("Error: String is not here, string: " + string[0]));
        else if (string[1] || string[1] ==! null) {
            if (!file[0][string[0]][string[1]]) return reject(new TypeError("Error: String is not here, string: " + string[0] + "." + string[1]));
            else return file[0][string[0]][string[1]];
        } else return file[0][string[0]];
    });
}
module.exports = Fetch;
