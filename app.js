const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const testData = {
  name: 'John Doe',
  age: '30',
  account_balance: '15.5'
}

app.get("/", (req, res) => res.send("Hello from Render!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
