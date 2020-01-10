# QUICK-DB.JSON

- npm i **quick-db.json**

```js
const DataBase = require("quick-db.json");
const db = new DataBase();

// Creating object
db.create("users");
// .then(x => console.log(x.message));  writing "Object Created"

// Adding object
db.add("users.id", "001");
// .then(x => console.log(x.message));  writing "Object Added"

// Checking object
db.has("users.id");
// .then(x => console.log(x)); if has writing true, else false

// Getting object
db.get("users.id");
// .then(x => console.log(x)); writing "{ id: 001 }"

// Deleting object
db.delete("users.id");
// .then(x => console.log(x.message)); writing "Object Deleted."
``` 
