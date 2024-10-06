const express = require("express");
const app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json())

// let todos = [
//     {
//         title:"todo 1",
//         desc:"desc1",
//         isCompleted:false
//     },
//     {
//         title:"todo 2",
//         desc:"desc1",
//         isCompleted:false
//     },
//     {
//         title:"todo 3",
//         desc:"desc1",
//         isCompleted:false
//     },
   
// ]


let todos=[]



app.put("/todos/:id",(req,res)=>{
    try{
        const index=todos.findIndex(todo=>todo.id==req.params.id)

        todos[index]={...todos[index],...req.body}
        return res.status(200).json({"message":"Todos Updated"})
    }
    catch(error){
        console.log(error)

    }
})

app.post("/todos", (req, res) => {
    console.log(req.body)
    const{title,desc,isCompleted}=req.body
    todos.push({...req.body , id : todos.length+1});
    // return res.status(200).json({ todos})
    return res.status(200).json({"message":"Succesfully added "})
    
})

app.delete("/todos/:id",(req,res)=>{
    console.log(req.body)
    try{
        // todos.splice(req.params.id,1)
        const filteredTodo=todos.filter(todo=>todo.id != req.params.id)
        todos=[...filteredTodo]
        console.log(filteredTodo)
        return res.status(200).json({"message":"deleted successfully"})
    }
    catch(error){
        console.log(error)
    }
})


app.get("/todos", (req, res) => {
    try{
        return res.status(200).json({ todos })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({"message":"please try again"})
    }
    
})

app.get("/", (req, res) => {
    return res.status(200).json({
        "messages": "kyaa hee bhaai kee haal"
    })
})

app.listen(3000, () => {
    console.log("Server is running on port number 3000")
})