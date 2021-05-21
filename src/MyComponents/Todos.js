import React from 'react'
import {TodoItems} from "./TodoItems";

export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className=" my-3">Todos List</h3>
            {props.todos.length===0? "No todos to display":
            props.todos.map((todo)=>{
                console.log(todo.sno);
                return(
                 <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/> 
            )
            })
            }
        </div>
    )
}
