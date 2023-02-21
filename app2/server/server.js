const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.use(bodyParser.json());

app.get("/:uid/favs", (req, res) => {
  //Devolvería los valores guardados en la base de datos
  console.log("YES");
  const { uid } = req.params;
  res.status(200).json(JSON.stringify("newSaves"));
});
app.post("/:uid/:id", (req, res) => {
  //Guardaría el nuevo registro en la base de datos
});

app.delete("/:uid/:id", function (req, res) {
  const { id, uid } = req.params;
  res.status(200).json(JSON.stringify("newSaves"));
});
