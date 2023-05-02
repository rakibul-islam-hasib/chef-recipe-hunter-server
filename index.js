const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const chefData = require('./data/data.json');
const homeData = require('./data/home.json');
const category = require('./data/category.json');

const cors = require('cors');
app.use(cors());
app.get('/', (req, res) => {
  res.send(homeData);
});
app.get('/api/chefs', (req, res) => {
  res.send(chefData);
});
app.get('/api/category', (req, res) => {
  res.send(category);
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
