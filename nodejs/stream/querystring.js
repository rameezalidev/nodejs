const querystring = require('querystring');
const URL = "http://localhost:3000/search?name=Rameez&age=22";


const data = querystring.parse(URL.split("?")[1])
console.log(data)

data.name = "Rameez Malik"
const string = querystring.stringify(data)
console.log(string)