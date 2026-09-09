// setInterval(()=>{
// console.log("Hello")
// require("dotenv").config()
// console.log(process.env.PORT)
// console.log(process.pid)

// console.log(process.ppid)
// console.log(process.cwd())

// console.log(process.argv)
// console.log(process.argv[1])

// },1000)


// console.log(process.version)
// console.log(process.versions)
// console.log(process.platform)


// understanding buffer

const message = "Hello";
const data = Buffer.from(message);
console.log("Buffer string : ",data)
console.log("Data string : ",data.toString())


const math = require("./math")
console.log(math.subtract(1,2))


// import {add} from './math.js'
// console.log(add(1,2))
