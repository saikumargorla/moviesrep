const fs = require('fs');

let rawdata = fs.readFileSync('movies.json');  
let movies = JSON.parse(rawdata);  
console.log(movies);