// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/:date?", (req, res) => {
  var unixTimestamp;


  if(req.params.date){
    var dateParam = req.params.date

    //check if the date parameter is in ms format
    if(!isNaN(dateParam) && !isNaN(parseFloat(dateParam))){
      unixTimestamp = new Date(Number(dateParam));
    }else{
      unixTimestamp = new Date(dateParam);
    }
    

    if(!isNaN(unixTimestamp.valueOf()) && unixTimestamp instanceof Date && unixTimestamp != undefined){

      res.json({unix:unixTimestamp.getTime(), utc: unixTimestamp.toUTCString()});

    }

    res.json({error: "Invalid Date"});
  }

  unixtimestamp = new Date();

  res.json({unix:unixtimestamp, utc: unixtimestamp.toUTCString()});

  
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
