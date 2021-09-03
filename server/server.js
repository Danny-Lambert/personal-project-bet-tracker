const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require("http").Server(app);

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_routers.js');
const assert = require('assert');

app.use(express.json());
app.use(cors({credentials: true, origin: "*"}));

//Need to hide these credentials of username and password 


MongoClient.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true})
// MongoClient.connect('mongodb://localhost:27017')
  .then((record) => {
    const db = record.db('bets');

    //  your atlas collection name below
    const atlasCollection = db.collection('bets');
    const atlasRouter = createRouter(atlasCollection);
    app.use('/api/bets', atlasRouter);
    /////////////////////////////////
    const atlasCollection2 = db.collection('week1');
    const atlasRouter2 = createRouter(atlasCollection2);
    app.use('/api/week1', atlasRouter2);
    /////////////////////////////////
    const atlasCollection3 = db.collection('week2');
    const atlasRouter3 = createRouter(atlasCollection3);
    app.use('/api/week2', atlasRouter3);
    /////////////////////////////////
    const atlasCollection4 = db.collection('week3');
    const atlasRouter4 = createRouter(atlasCollection4);
    app.use('/api/week3', atlasRouter4);
    /////////////////////////////////
    const atlasCollection5 = db.collection('week4');
    const atlasRouter5 = createRouter(atlasCollection5);
    app.use('/api/week4', atlasRouter5);
    /////////////////////////////////
    const atlasCollection6 = db.collection('week5');
    const atlasRouter6 = createRouter(atlasCollection6);
    app.use('/api/week5', atlasRouter6);
    /////////////////////////////////
    const atlasCollection7 = db.collection('week6');
    const atlasRouter7 = createRouter(atlasCollection7);
    app.use('/api/week6', atlasRouter7);
    /////////////////////////////////


  })
  .catch(console.err);

  http.listen(3000, function() {
    console.log(`Listening on port ${this.address().port}`);
  });
