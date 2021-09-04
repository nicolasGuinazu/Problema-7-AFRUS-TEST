import classes from './Tasks.module.css'
import Singletask from './Singletask';
import { useState,useRef } from 'react';

const Tasks=()=>{
    
    const [newTask,setNewTask]=useState([])
    const nameInputRef=useRef();
    const dateInputRef=useRef();
    const priorityInputRef=useRef();
    const descriptionInputRef=useRef();  

    
    const onSubmitHandler=(event)=>{
        event.preventDefault();
        let task={
            id:Math.random().toString(),
            name:nameInputRef.current.value,
            date:dateInputRef.current.value,
            priority:priorityInputRef.current.value,
            description:descriptionInputRef.current.value
        }
        let newArrTasks=[...newTask]
        newArrTasks.push(task)
        setNewTask(newArrTasks)
    }
    
    const deleteHandler=(id)=>{
        let newTasks=[]
        newTasks=newTask.filter(el=>el.id!=id)
        setNewTask(newTasks)
    }

    const editedHandler=(id)=>{
        let editedTask=[]
        let updatedTask=[]
        editedTask=newTask.find(el=>el.id==id)
        nameInputRef.current.value=editedTask.name;
        dateInputRef.current.value=editedTask.date;
        priorityInputRef.current.value=editedTask.priority;
        descriptionInputRef.current.value=editedTask.description;
        updatedTask=newTask.filter(el=>el.id!=id)
        setNewTask(updatedTask)
        /* newTodosArray=newto.filter(el=>el.id!=id)
        let newToDo={
            id:Math.random().toString(),
            name:nameInputRef.current.value,
            date:dateInputRef.current.value,
            priority:priorityInputRef.current.value,
            description:descriptionInputRef.current.value
        }
        let newArr=[...newTodosArray]
        newArr.push(newToDo)
        setNewto(newArr) */
    }
    
   
    const clearHandler=()=>{
        dateInputRef.current.value=''
        priorityInputRef.current.value=''
        descriptionInputRef.current.value=''
        nameInputRef.current.value=''
        setNewTask([])
    }
    let mappedArr;
    if(newTask.length>0){
        mappedArr=newTask.map(el=>
        <Singletask
        key={el.id} 
        name={el.name} 
        date={el.date} 
        priority={el.priority}
        description={el.description}
        clicked={()=>deleteHandler(el.id)}
        edited={()=>editedHandler(el.id)}/>)   
    }
   

    return(
        <>
      
        <div className={classes.card}>
        <form onSubmit={onSubmitHandler}>
            <label>Name</label>
            <input className={classes.input} required ref={nameInputRef}></input>
            <label>Date</label>
            <input type="date" className={classes.input} required ref={dateInputRef}></input>
            <label>Pritority</label>
            <input  className={classes.input} required ref={priorityInputRef}></input>
            <label>Description</label>
            <input className={classes.input} required ref={descriptionInputRef}></input>
         
        <div><button className={classes.add} type="submit"><i className="fas fa-plus"></i></button>
        <button className={classes.erase} onClick={clearHandler}>CLEAR</button></div>
        
        </form>
        </div>
        
        <div className={classes.container}>
   {mappedArr}  
        </div>
        
        </>
    )
   
}

export default Tasks


