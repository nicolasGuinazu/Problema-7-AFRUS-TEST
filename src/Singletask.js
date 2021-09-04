import classes from './Singletask.module.css'

const Singletask=(props)=>{
    return(
        <div className={classes.card}>
           <ul>
               <li>{props.name}</li>
               <li>{props.date}</li>
               <li>{props.priority}</li>
               <li>{props.description}</li>
           </ul>
           <div>
           <button  className={classes.delete} onClick={props.clicked}><i class="far fa-trash-alt"></i></button>
           <button  className={classes.edit} onClick={props.edited}><i class="fas fa-edit"></i></button>
           </div>
           
        </div>
    )
   
}

export default Singletask