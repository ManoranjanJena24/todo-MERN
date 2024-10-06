async function addTodo(){
    let body={
        method:"POST",
        body:JSON.stringify({
            "title":"from frontend",
            "desc":"desc"
        }),
        headers:{
            "Content-Type": "application/json"
        }
    }
    let res=await fetch("http://localhost:3000/todos",body)
    let json = await res.json()
    console.log(json)
}

addTodo();