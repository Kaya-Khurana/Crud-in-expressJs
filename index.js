//Best Crud in Expres...

import ex from "express";

const app = ex();
const port = 1506;
app.listen(port, () => {
  console.log(`jay Ganesh...Port is listening to ${port}`);
});

//Add
app.use(ex.json());
const data = [];
let num = 1;
app.post("/food", (req, res) => {
  const { item, price } = req.body;
  const tempdata = { Id: num++, item, price };
  data.push(tempdata);
  res.status(200).send(data);
});

//Display
app.get("/food", (req, res) => {
  res.status(200).send(data);
});

//Display by Id
app.get("/food/:Id", (req, res) => {
  const temp = data.find((t) => t.Id === parseInt(req.params.Id));
  if (!temp) {
    res.status(400).send("no data available");
  }
  res.status(200).send(temp);
});

//Update Using Id
app.put("/food/:Id", (req, res) => {
  const temp = data.find((t) => t.Id === parseInt(req.params.Id));
  if (!temp) {
    res.status(400).send("NO....");
  }
  const { item } = req.body;
  temp.item = item;
  price = price;
  res.status(200).send(temp);
});

//Delete Using Id
app.delete("/food/:Id", (req, res) => {
  const temp = data.findIndex((t) => t.Id === parseInt(req.params.Id));
  if (temp < 0) {
    return res.status(404).send("naaaa..");
  }
  data.splice(temp, 1);
  return res.status(200).send("Deleted");
});
