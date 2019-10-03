var express = require('express');
var app = express();
const util = require('util');
const router = express.Router();
const readline = require('readline');
const fs = require('fs');
var env = require('./routes/database');
var Sequelize = require('sequelize');
var path = require('path');
var bodyParser = require('body-parser');
var csvParser = require('csv-parse');


const db = require('./config/db.config');
let json =[];

const File = db.files

'use strict'


/*fs.readFile('css_tags.csv', 'utf8', function (err, data) {
  var dataArray = data.split(/\r?\n/);
  console.log(dataArray);
  
});*/

fs.readFile('css_tags.csv', {
  encoding: 'utf-8'
}, function(err, csvData) {
  if (err) {
    console.log(err);
  }
  // console.log(`DATA>> ${JSON.stringify(csvData)}`)
  csvParser(csvData, {
    delimiter: ','
  }, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.stringify(data));
    }
  }); 
});
/*
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  //Give any image name here.
var fileData = fs.readFileSync('css_tags.csv');
// var Data = fs.readFileSync('css_tagsz2.csv');
// console.log("file data"+ JSON.stringify(fileData))
let a=[];
    let object = {};
        
    for(let i=0;i<json.length;i++){
      a.push(json[i].split(','));
    }
    
    a.forEach((element)=> {
      object[element[0]] , element[1];
    });
    console.log('my object'+ object);
var jsonContent = JSON.stringify(object);
console.log(jsonContent);
File.create({
  type: 'tags',
  name: jsonContent,
  data: jsonContent
}).then(file => {
  try{
    fs.writeFileSync( 'css_tags.csv', file.data);    
   //fs.writeFileSync('css_tagz2.csv', Data);
    // exit node.js app
    process.exit(0);
  }catch(e){
    console.log(e);
  }
})
});*/

var PORT = process.env.PORT || 4600;

//var db = {};
app.use(express.static(__dirname,));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'views')));
 
app.get('/search',function(req,res) {
  res.render('index.html');
});

  

app.listen(PORT, function() {
  console.log('Server listening on ' + PORT);
});
