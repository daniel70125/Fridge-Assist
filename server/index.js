require('dotenv').config();
let express = require('express');
let app = express();
let massive = require('massive');

let ctrl = require('./controller');

const session = require('express-session');
const axios = require('axios');
const merchant_model = require('./merchant_model')
const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env;

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
  // below: DigitalOcean middleware !
  app.use( express.static( `${__dirname}/../build` ) );
  });

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}));

// Get user session info
app.get('/getuser', (req, res) => {
    req.session.user = {
        name: "",
        groceryList: []
    };
    res.send(req.session);
})

// Get all meals
app.get('/meals', (req, res) => {
    merchant_model.getMerchants()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
// Add Ingredient
app.post('/add-recipe', (req, res) => {
  console.log(req.body);
  // let {title, quantity, price, img} = req.body;
  res.send(req.body);
}
)

// app.get('/sendtext',(req, res) => {
//     const {user, name, number, address} = req.body;
//     const msg = `New order recieved from ${name} (${number})! Address is ${address}`
//     client.messages
//       .create({body: msg, from: '+16144544724', to: `+1${user}`})
//       .then(message => console.log(message.sid));
//       res.status(200).send(msg);
// })


// massive({
//     connectionString: CONNECTION_STRING,
//     ssl: {rejectUnauthorized: false}
// })
// .then(db => {
//     app.set('db', db)
//     console.log('db connected !');   }).catch(err => console.log(err))
// .catch(err => console.log(err));

// app.listen(SERVER_PORT || 4000, () => console.log(`Server running on Port ${SERVER_PORT}!`));

app.listen(SERVER_PORT, () => console.log(`Listening on ${ SERVER_PORT }`))