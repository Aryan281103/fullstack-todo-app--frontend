import axios from 'axios'

const baseUrl="https://fullstack-todo-app-backend-a9ao.onrender.com"

const getAllToDo=(setToDo)=>{
    axios.get(baseUrl)
    .then(({data})=>{
        console.log('data --> ',data );
        setToDo(data)
    })
}

const addToDo=(text,setText,setToDo)=>{
    
    axios.post(`${baseUrl}/save`,{text})
    .then((data)=>{
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    })
    .catch((e)=>console.log(e))

}

const updateToDo=(toDoId,text,setToDo,setText,setIsUpdating)=>{
    
    axios.post(`${baseUrl}/update`,{_id: toDoId,text})
    .then((data)=>{
        
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
    .catch((e)=>console.log(e))

}

const deleteToDo=(_id,setToDo)=>{
    
    axios.post(`${baseUrl}/delete`,{_id})
    .then((data)=>{

        getAllToDo(setToDo)
    })
    .catch((e)=>console.log(e))

}



export {getAllToDo,addToDo,updateToDo,deleteToDo}