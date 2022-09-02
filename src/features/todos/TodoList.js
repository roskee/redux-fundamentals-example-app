import React from "react"
import { useSelector } from "react-redux"
import TodoListItem from "./TodoListItem"

const TodoList = () => {
    const todos = useSelector(state => state.todos
)
    const listItems = todos.map(todo => <TodoListItem key={todo.id} todo={todo}/>)
    return <ul>{listItems}</ul>
}

export default TodoList