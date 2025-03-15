const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

 
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.log("Error connecting to database:", error));

 
const studentSchema = new mongoose.Schema({
  "name": { type: String, required: true },
  "RollNo": { type: String, required: true },
  "section": { type: String, required: true }
});
 
const students = mongoose.model("student1", studentSchema);
 
app.get('/students', (req, res) => {
  students.find()
    .then((studentsList) => {
      res.status(200).json(studentsList);
    })
    .catch((error) => {
      res.status(500).json({ message: "Error retrieving students", error });
    });
});
app.post('/')
 
