const fs = require("fs");
/**
  * @param {string} string
  */
function Create(string) {
    var file = JSON.parse(fs.readFileSync("./.quick-json.db.json", "utf8"));
    return new Promise(resolve => {
        if (!file[0][string]) {
            file[0][string] = {};
            fs.writeFileSync("./.quick-json.db.json", JSON.stringify(file, null, 4), (err) => {
                if (err) return resolve({ error: true, errorCode: 2, message: "Error: " + err});
            });
            return resolve({ error: null, errorCode: null, message: "Object Created" });
        } else return resolve({ error: true, errorCode: 1, message: "Object is already" });
    })
}
module.exports = Create;