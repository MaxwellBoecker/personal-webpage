const express = require('express');
const path = require('path');
const app = express();
const port = 8080

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "../build")));
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use('*', express.static(path.join(__dirname, "../build/index.html")));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})