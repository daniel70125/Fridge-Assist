require('dotenv').config();
let express = require('express');
let app = express();
let massive = require('massive');

let ctrl = require('./controller');

const session = require('express-session');
const axios = require('axios');

const {CONNECTION_STRING, SESSION_SECRET, PORT} = process.env;

// bewlow: DigitalOcean middleware !
app.use( express.static( `${__dirname}/../build` ) );
app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}));

const path = require('path')

//middleware, endpoints, massive, etc...

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})

// Get user session info
app.get('/getuser', (req, res) => {
    req.session.user = {
        name: "",
        groceryList: []
    };
    res.send(req.session);
})

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

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))