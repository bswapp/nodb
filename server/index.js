let cuteness = require("./controller");

const express = require("express");
const app = express();

app.use(express.json());

const port = 4040;

//endpoints
//get
app.get("/api/cuteCats", cuteness.fullList);

//post
app.post("/api/cuteCats", cuteness.addItem);

//delete
app.delete("/api/cuteCats/:id", cuteness.deleteItem);

//put
app.put("/api/cuteCats", cuteness.editItem);

app.listen(4040, () => {
  console.log("hi");
});
