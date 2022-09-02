import React from "react";

const TodoListItem = (props) => {
    return (
        <li>{props.todo.text}</li>
    )
}

export default TodoListItem