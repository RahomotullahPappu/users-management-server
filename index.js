const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());


const users = [
  {id: 1, name: 'Aru', email: 'aru@gmail.com'},
  {id: 2, name: 'Mormi', email: 'mormi@gmail.com'},
  {id: 3, name: 'Toha', email: 'toha@gmail.com'},
]

app.get('/', (req, res) => {
  res.send('Users Mangement server is running')
});


app.get('/users', (req, res) => {
  res.send(users);
});

app.post('/users', (req, res) =>{
  console.log('post api heating');
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length+1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Users Mangement server is running PORT: ${port}`)
});