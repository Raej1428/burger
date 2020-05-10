var mysql = require("mysql");
// mysql://root:rootroot1313@locahost:3306/burgers_db


// Make connection.
var connection;

if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
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

// connection.query("USE bu09izwutcdhkvpy", function(err) {
//     if (err) throw err;
//     connection.query('CREATE TABLE IF NOT EXISTS burgers(' +
//         'id INT NOT NULL AUTO_INCREMENT,' +
//         'PRIMARY KEY(id),' +
//         'link VARCHAR(255),' +
//         'item VARCHAR(255),' +
//         'stock VARCHAR(255)' +
//         ')',
//         function(err) {
//             if (err) throw err;
//         });
// });

// Export connection for our ORM to use.
module.exports = connection;