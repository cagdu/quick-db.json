const DataBase = require("../");
const db = new DataBase();

db.create("user");
db.add("user.id", "001");