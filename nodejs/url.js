const url =   "http://localhost:5000/students/2?name=Ahmed&department=SE";

const {URL} = require("url");

const splittedURL = new URL(url);
console.log(splittedURL.searchParams.get("name"))
console.log(splittedURL.host)
console.log(splittedURL.hostname)
console.log(splittedURL.search)
console.log(splittedURL.protocol)
console.log(splittedURL.href)
console.log(splittedURL.port)
console.log(splittedURL.pathname)
console.log(splittedURL.origin)
console.log(splittedURL.hash)