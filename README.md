```js
const DataBase = require("quick-db.json");
const db = new DataBase();

// Creating to object
db.create("users");
// .then(x => console.log(x.message));  writing "Object Created"

// Adding to object
db.add("users.id", "001");
// .then(x => console.log(x.message));  writing "Object Added"

// Checking to object
db.has("users.id");
// .then(x => console.log(x)); if has writing true, else false

// Getting to object
db.get("users.id");
// .then(x => console.log(x)); writing "{ id: 001 }"

// Deleting to object
db.delete("users.id");
// .then(x => console.log(x.message)); writing "Object Deleted."
``` 
