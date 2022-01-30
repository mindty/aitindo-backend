const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "todos"
});

// ---------------- GET ALL TODO ------------------//
app.get("/api/getAllToDo", (req, res) => {
  
  const sqlSelect ="SELECT * FROM todo;";
  db.query(sqlSelect, (err, result) => {
    console.log(result);
    console.log(err);

    res.send(result);
    if(err){
      res.send(err);
    }
  })
})

// ---------------- POST NEW TODO ------------------//
app.post("/api/addToDo", (req, res) => {
  
  const name = req.body.name
  const status = req.body.status
  
  const sqlInsert ="INSERT INTO todo(name, status) VALUES (?, ?);";
  db.query(sqlInsert, [name, status], (err, result) => {
    console.log(result)
    console.log(err)

    if(err){
      res.send(err);
    }
  })
})

app.delete("/api/deleteToDo", (req, res) =>{
  const id_todo = req.body.id
  const sqlDelete = "DELETE FROM todos WHERE id = ?;";
  db.query(sqlDelete, id_todo, (err, result) => {
    console.log(result);
    if(err) console.log(err);
  })
})

app.listen(3001, () =>{
  console.log("running on port 3001");
});