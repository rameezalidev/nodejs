const crypto = require("crypto");
require("dotenv").config();
const password = process.env.DB_PASSWORD;

const hash = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

console.log(hash);