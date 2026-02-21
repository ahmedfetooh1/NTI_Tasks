const fs = require("fs") 
let  [ , , command]  =  process.argv
if(command == "create"){
    
    let  [ , , , todo]  =  process.argv
    let allTodo =  JSON.parse(fs.readFileSync("./todos.json" , {encoding: 'utf-8'}))
    let index = allTodo.length
    allTodo.push({title: todo , id: index + 1})
    fs.writeFileSync("./todos.json" , JSON.stringify(allTodo))
    
    
}else if(command == "list"){
    let allTodo =  JSON.parse(fs.readFileSync("./todos.json" , {encoding: 'utf-8'}))
    
    console.log(allTodo);
    
    
    
}else if(command == "delete"){
    
    let  [ , , , todo]  =  process.argv
    let allTodo =  JSON.parse(fs.readFileSync("./todos.json" , {encoding: 'utf-8'}))
    
    let Index = allTodo.findIndex(function(item){
        return item.title == todo
    })
    
    if(Index == -1){
        console.log("not found");
        
    }else{
        
        allTodo.splice(Index,1)
    }
    fs.writeFileSync("./todos.json" , JSON.stringify(allTodo))

}
else if  (command == "update"){
    let  [ , , , todo , newTodo]  =  process.argv
    let allTodo =  JSON.parse(fs.readFileSync("./todos.json" , {encoding: 'utf-8'}))
    
    let Index = allTodo.findIndex(function(item){
    return item.title == todo
    })
    if(Index == -1){
        console.log("not found");
        
    }else{
        allTodo[Index].title = newTodo
    
    }
    fs.writeFileSync("./todos.json" , JSON.stringify(allTodo))


}
