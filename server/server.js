const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json())

const db =mysql.createConnection({
    host:"localhost",
    user:'naveen',
    password:'naveen',
    database:'APIstudentList'
})


app.get('/', (re, res) => {
    const sql = "SELECT * FROM regData";
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: 'Error inside server'});
        return res.json(result);
    })
})


app.post('/regData', (req, res) => {
    const sql = "INSERT INTO regData (name, email) VALUES (?)";
    const value = [
        req.body.name,
        req.body.email
    ]
    db.query(sql, [value], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})


app.get('/read/:id', (req, res) => {
    const sql = "SELECT * FROM regData WHERE id = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if(err) return res.json({Message: 'Error inside server'});
        return res.json(result);
    })
})

app.listen(7007, () => {
    console.log('Listenint 7007...')
})