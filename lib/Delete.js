const fs = require("fs");
/**
  * @param {string} string
  */
function Delete(string) {
    var file = JSON.parse(fs.readFileSync("./.quick-json.db.json", "utf8"));
    string = string.split(".");
    return new Promise(resolve => {
        if (!string || string === null) return resolve({ error: true, errorCode: 3, message: "Undefined string | Example: \'db.delete(\"data\");\'" });
        else if (!string[0] || string[0] === null) return resolve({ error: true, errorCode: 3, message: "Undefined string | Example: \'db.delete(\"data\");\'" });
        if (string[1]) {
            if (!file[0][string[0]]) return resolve({ error: true, errorCode: 4, message: "Undefined String or no such | Example: \'db.delete(\"data\");\'" });
            else if (!file[0][string[0]][string[1]]) return resolve({ error: true, errorCode: 4, message: "Undefined String or no such | Example: \'db.delete(\"data.info\");\'" });
            else {
                delete file[0][string[0]][string[1]];
                fs.writeFileSync("./.quick-json.db.json", JSON.stringify(file, null, 4), (err) => {
                    if (err) return resolve({ error: true, errorCode: 2, message: "Error: " + err});
                });
                return resolve({ error: null, errorCode: null, message: "Object Deleted." });
            }
        } else {
            if (!file[0][string[0]]) return resolve({ error: true, errorCode: 4, message: "Undefined String or no such | Example: \'db.delete(\"data\");\'" });
            else {
                delete file[0][string[0]];
                fs.writeFileSync("./.quick-json.db.json", JSON.stringify(file, null, 4), (err) => {
                    if (err) return resolve({ error: true, errorCode: 2, message: "Error: " + err});
                });
                return resolve({ error: null, errorCode: null, message: "Object Deleted." });
            }
        }
    });
}
module.exports = Delete;