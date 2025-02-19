import React, { useState,useRef } from "react";
import './style.css';

const Todo = ()=>{
    const [todos, setTodos] = useState([])
    const inputRef = useRef(null);
    const[error, setError] = useState("");
    const addTodo = ()=>{
        const newTodoItem = inputRef.current.value.trim();
        if(newTodoItem){
            setError("");
            setTodos(prevTodo => [...prevTodo, newTodoItem]);
            inputRef.current.value = '';
        }else{
            setError("Please enter what you want to add")
        }
    }
    const removeItem = (index) => {
        setTodos((prevTodos) => prevTodos.filter((item, i) => i !== index)  );
    };
    return(
        <>
        <input type="text" className="input" ref={inputRef} />
        <button onClick={addTodo}>Add</button> <br></br>
        <span className="error">{error}</span>
        <ul>
            {todos && todos.map((todo,i)=>{
                    return(
                        <li key={i}><span>{todo}</span> <button onClick={()=>{removeItem(i)}} className="red">Remove</button></li>
                    )
                })
            }
        </ul>
        </>
    )
}
export default Todo;