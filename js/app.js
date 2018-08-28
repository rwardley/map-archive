const express = require('express')
const app = express()
var pg = require('pg')
var format = require('pg-format')
var PGUSER = 'rosemarywardley'
var PGDATABASE = 'map_archive'
var router = express.Router()
//var map_name = 'South Island, New Zealand'
var year = 1972

var config = {
  user: PGUSER, // name of the user account
  database: PGDATABASE, // name of the database
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
}

var pool = new pg.Pool(config)
var myClient

app.all('*',function(req,res,next)
{
    if (!req.get('Origin')) return next();

    res.set('Access-Control-Allow-Origin','http://localhost:8888');
    res.set('Access-Control-Allow-Methods','GET,POST');
    res.set('Access-Control-Allow-Headers','X-Requested-With,Content-Type');

    if ('OPTIONS' == req.method) return res.send(200);

    next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    console.log(req.query.decade)
      var mapQuery = format('SELECT * from map_table WHERE issue_year >= %L', req.query.decade)
      console.log(mapQuery)
  myClient.query(mapQuery, function (err, result) {
    if (err) {
      console.log(err)
    }
    res.json(result);
  })
       
});

// all of our routes will be prefixed with /api
app.use('/api', router);

pool.connect(function (err, client, done) {
  if (err) console.log(err)
  app.listen(3000, function () {
    console.log('listening on 3000')
  })
  myClient = client
//  var mapQuery = format('SELECT * from map_table WHERE issue_year = %L', year)
//  myClient.query(mapQuery, function (err, result) {
//    if (err) {
//      console.log(err)
//    }
//    console.log(result)
//  })
    
})