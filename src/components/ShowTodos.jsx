import react from "react";
import  "./ShowTodos.css";

export const ShowTodos = ({index, todo, onDeleteList, onUpdateList})=>{
   return(
    <div className="showTodoContainer">
        {
        index<=5 && 
        <>
                <h3>{todo}</h3>
                <button onClick={() => onDeleteList(index)} >Delete Todo!!</button>
                <button onClick={()=>onUpdateList(index)} >Update Todo!!</button>
        </>
        }
    </div>
   )
}