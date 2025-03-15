const express=require("express")
const jwt=require("jsonwebtoken")
var app=express()
app.use(express.json())





app.post("/login", (req, res) => {
    const {username,password}=req.body
    if((username=="rohit") && (password=="rohit")){

        const token = jwt.sign({ username, password }, "cvrcollege");
    
       
        console.log(token);
    
        res.json(token);
    }
    else{
        res.status(400).json({"message":"Invalid user"})
    }

 
});
app.get("/protected",authentication,(req,res)=>{
    res.json({"message":"Welcome to home page"})
})
app.get("/Students",(req,res)=>{
    res.json({"message":"Student"})
})
function authentication(req,res,next){
    const authHeader=req.headers["authorization"]
    console.log(authHeader)
    const token= authHeader&&authHeader.split(' ')[1]
    console.log(token)
    jwt.verify(token,"cvrcollege",(err,decoded)=>{
        if(err){
            return res.status(404).json({"message":"Invalid token login"})
        }
        else{
            next()
        }
    })
}
app.listen(3000, () => {
    console.log("Server is running ");
});
