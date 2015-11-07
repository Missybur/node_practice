"use strict";

var fs = require("fs");

// Synyc version


// var data = fs.readFileSync("./files/times.json");

// var array = JSON.parse(data);

// array.push(Date.now());

// fs.writeFileSync("./files/times.json", JSON.stringify(array));

// console.log(array);


// Asnyc version:


fs.readFile('./files/times.json', function(err, data){
  if(err){
    throw err;
  }
  var array = JSON.parse(data);
  array.push(Date.now());
  fs.writeFile('./files/times.json', JSON.stringify(array), function(err){
    if(err){
      throw err;
    }
    console.log('time added successfully')
  });
});

