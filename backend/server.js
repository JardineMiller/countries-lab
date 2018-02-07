const express = require('express');
const server = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const cors = require('cors');
server.use(cors());
server.use(parser.json());
server.use(parser.urlencoded({extended: true}));

MongoClient.connect('mongodb://localhost:27017', function(err, client) {
  const db = client.db('countries_app');

  if(err) {
    return console.log(err);
  }

  server.listen(3000, function() {
    console.log("Happy days, everything is amazing");
  })

  server.get('/api/countries', function(req, res) {
    db.collection('countries').find().toArray(function(err, result) {
      res.status(200);
      res.json(result);
    })
  })

  server.post('/api/countries', function(req, res) {
    db.collection('countries').save(req.body, function(err, result) {
      if(err) {
        console.log(err);
        res.status(500);
        res.send();
      }
      res.status(201);
      res.json(result.ops[0]);
      console.log("successful");
    })
  })

  server.delete('/api/countries', function(req, res) {
    db.collection('countries').remove(function(err, result) {
      if(err) {
        res.status(500);
        res.send();
      }
      res.status(204);
      res.send();
    })
  })

  server.delete('/api/countries/:id', function(req, res){
    db.collection('countries').remove({_id: ObjectID(req.params.id)}, req.body, function(err, result){

      if (err) {
        res.status(500);
        res.send();
      }

      res.status(204);
      res.send();
    });
  });



  server.put


})