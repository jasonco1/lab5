const mysql = require('mysql');

const pool = mysql.createPool({
    //parameters
    //you must use your own database hostname, username, etc. parameters here
    connectionLimit: 10,
    host: "ipobfcpvprjpmdo9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "i4i0lenz5ikvvxmr",
    password: "v6ds5dd9rcdapyv0",
    database: "rh7jrrhygw2u4hrg"
    
});//database pool connection 

module.exports = pool;
