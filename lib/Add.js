const fs = require("fs");
/**
  * @param {string} string
  * @param {object} object
  */
function Add(string, object) {
    var file = JSON.parse(fs.readFileSync("./.quick-json.db.json", "utf8"));
    string = string.split(".");    
    return new Promise((resolve, reject) => {
        if (!string || string === null) return resolve({ error: true, errorCode: 3, message: "Undefined string | Example: \'db.add(\"data.test\", \"123\");\'" });
        else if (!string[0] || string[0] === null) return resolve({ error: true, errorCode: 3, message: "Undefined string | Example: \'db.add(\"data.test\", \"123\");\'" });
        else if (!string[1] || string[1] === null) return resolve({ error: true, errorCode: 3, message: "Undefined string | Example: \'db.add(\"data.test\", \"123\");\'" });
        if (!file[0][string[0]]) {
            file[0][string[0]] = {
                [string[1]]: (object || null)
            };
            fs.writeFileSync("./.quick-json.db.json", JSON.stringify(file, null, 4), (err) => {
                if (err) return resolve({ error: true, errorCode: 2, message: "Error: " + err});
            });
            return resolve({ error: null, errorCode: null, message: "Object Added" });
        } else if (!file[0][string[0]][string[1]]) {
            file[0][string[0]][string[1]] = object;
            fs.writeFileSync("./.quick-json.db.json", JSON.stringify(file, null, 4), (err) => {
                if (err) return resolve({ error: true, errorCode: 2, message: "Error: " + err});
            });
            return resolve({ error: null, errorCode: null, message: "Object Added" });
        } else return resolve({ error: true, errorCode: 1, message: "Object is already" });
    });
}
module.exports = Add;