const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

let secretNumber = Math.floor(Math.random()*100)+1;
app.post("/guess",(req,res)=>{
    const{number}=req.body
    if(number==secretNumber)
    {
        return res.json({message:"Correct! You Guessed it"})
    }
    else if(number>secretNumber){
        return res.json({message: "Too High"})
    }
    else{
        return res.json({message: "Too Low!!"})
    }
})

app.get("/reset",(req,res)=>{
    secretNumber=Math.floor(Math.random()*100)+1
    res.json({message:"New Game Started"})
})
app.listen(5000,()=>console.log("serving at port 5000"))