const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mysql = require("mysql2");

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "election"
    },
    console.log("Connected to the election database.")
)

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
})




// default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})