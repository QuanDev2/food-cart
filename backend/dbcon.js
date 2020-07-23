var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'u3r5w4ayhxzdrw87.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'ff9wigitfa151kog',
  password: 'wl528iake408c175',
  database: 'icn0giuzhwu77xsh'
});
module.exports.pool = pool;
