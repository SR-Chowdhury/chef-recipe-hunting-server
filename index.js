const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')

app.use(cors());

const chefInfo = require('./data/chef-info.json');
const dishes = require('./data/dishes.json');

app.get('/', (req, res) => {
  res.send('Bismillahir rahmanir Rahim! Alhamdulillah.')
})

app.get('/chef-info', (req, res) => {
  res.send(chefInfo);
});

app.get('/chef-info/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const chef = chefInfo.filter(item => parseInt(item.id) === id);
  res.send(chef);
});


app.get('/dishes', (req, res) => {
  res.send(dishes);
});

app.get('/dishes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const dish = dishes.filter(item => parseInt(item.chef_id) === id);
  res.send(dish);
});

app.listen(port, () => {
  console.log(`Server is running from port: ${port}`)
})