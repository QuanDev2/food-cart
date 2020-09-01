var mysql = require("mysql");
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "u3r5w4ayhxzdrw87.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: hidden,
  password: hidden,
  database: hidden,
  // debug: true,
});
module.exports.pool = pool;
