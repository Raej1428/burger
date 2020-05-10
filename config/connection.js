var mysql = require("mysql");
// mysql://root:rootroot1313@locahost:3306/burgers_db

// Make connection.
var connection;

if (process.env.JAWSDB_GRAY_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_GRAY_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "rootroot1313",
        database: "burgers_db"
    });

}
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;