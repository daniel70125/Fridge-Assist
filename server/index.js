require('dotenv').config();
let express = require('express');
let app = express();
let massive = require('massive');

let ctrl = require('./controller');

const session = require('express-session');
const axios = require('axios');

const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env

// bewlow: DigitalOcean middleware !
app.use(express.static(`${__dirname}/../build`));
app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}));

app.get('/getuser', (req, res) => {
    console.log("tried it!");
    req.session.user = {
        name: ""
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


massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then(db => {
    app.set('db', db)
    console.log('db connected !');   }).catch(err => console.log(err))
.catch(err => console.log(err));

app.get('/swapi', async (req, res) => {
    
})

app.listen(SERVER_PORT || 4000, () => console.log(`Server Running on port ${SERVER_PORT} !`));