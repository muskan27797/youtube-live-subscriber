import react, {useState, useRef, useEffect} from "react";
import { ShowTodos } from "./ShowTodos";

export const Todos = ()=>{

    const [todoList, setTodoList] = useState([]);
    const [todo, setTodo] = useState("");
    const [count, setCount] = useState(0);

    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    })


    const handleSubmit=(event)=>{
       event.preventDefault();
       if(todo !== ''){
        setTodoList((prevTodo)=>[...prevTodo,todo]);
       } 
       setTodo("")
    }

    const onDelete = (todoIndex) => {

      let listAfterDelete = todoList.filter((item, index) => {
        if(index === todoIndex){
            return false;
        }
        return true;
    });
      setTodoList(listAfterDelete);
    }

    const onUpdate=(todoUpdateIndex)=>{
      let listAfterUpdate = todoList.map((item, index) =>{
        if(index === todoUpdateIndex){
            item = item + "Updated List"
        }
         return item
      })

      setTodoList(listAfterUpdate);
    }

    const handleTodo = (event)=>{
        setTodo(event.target.value);
    }

    return(
        <div className="todosContainer">
           <h1> Todo Item Title </h1>
           <form onSubmit = {handleSubmit}>
              <input type="text" placeholder="Add Todo"  ref={inputRef} value={todo} onChange={handleTodo}/>
              <input type="submit"/> 
           </form>
           <div>
                {todoList.map((todo, index) => <ShowTodos key={index} todo={todo} index={index} onDeleteList={onDelete} onUpdateList={onUpdate}></ShowTodos>)}
           </div>
        
        <div >{count}</div>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>IncrementCount</button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>DecrementCount</button>
        <button onClick={() => setCount(0)}>ResetCount</button>
        </div>
    )
}