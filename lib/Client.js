const fs     = require("fs");
/**
 * Creates an instance of `DataBase`.
 * @constructor
 * @api public
 */
function DataBase() {
    try {
        fs.readFileSync("./.quick-json.db.json", "utf8")
    } catch(err) {
        if (Math.floor(err.errno) === Math.floor("-4058")) {
            fs.createWriteStream("./.quick-json.db.json");
            var data = [{}];
            fs.writeFileSync("./.quick-json.db.json", JSON.stringify(data, null, 4));
        } else {
            new Promise((resolve, reject) => {
                return reject(new Error("Undefined Error: " + err));
            });
        }
    }
};
DataBase.prototype.add    = require("./Add");
DataBase.prototype.create = require("./Create");
DataBase.prototype.delete = require("./Delete");
DataBase.prototype.fetch  = require("./Fetch");
DataBase.prototype.get    = require("./Get");
DataBase.prototype.has    = require("./Has");
module.exports            = DataBase;
