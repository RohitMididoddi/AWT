const express=require('express')
var app=express()
app.listen(2000,()=>{
    console.log("Server Started...");
})
let student=[
    {"id":"1","name":"karthik","branch":"IT"},
    {"id":"2","name":"advaith","branch":"CSE"},
    {"id":"3","name":"jashook","branch":"ECE"}
]
//get methods
app.get("/students",(req,res)=>{
    if(student.length==0){
        res.status(404).json({"message":"empty"})
    }
    else{
        res.status(200).json({"message":"Student data",student})
    }
})
app.get("/students/:id",(req,res)=>{
    const id=req.params.id
    let student =students.find(s=>s.id===id)
    if(student){
        res.status(200).json({"message":"student found",students})
    }
    else{
        res.status(404).json({"message":"student not found"})
    }
})
//delete method
app.delete("/deletestudent/:id",(req,res)=>{
    const id=req.params.id;
    let students=student.find(s=>s.id===id)
    if(students){
        student=student.filter(s=>s.id!==id)
        res.status(200).json({"message":"Deleted successfully","student":student})
    }
    else{
        res.status(404).json({"message":"Student not found"})
    }
})
//adding the students
app.use(express.json())
app.post("/addstudent",(req,res)=>{
    let students=req.body;
    student.push(students);
    res.status(200).json({"Message":"Student added successfully","students":student})
})
//update student details
app.put("/updatestudent/:id",(req,res)=>{
    const id=req.params.id
    studentindex=student.findIndex(s=>s.id===id)
    if(studentindex!=-1){
        // student[studentindex].name=req.body.name
        student[studentindex].branch=req.body.branch
        res.status(200).json({"message":"updated successfully","students":student})
}
    else{
        res.status(404).json({"message":"student not found"})
    }
}) 
