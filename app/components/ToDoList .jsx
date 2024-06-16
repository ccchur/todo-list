import ToDoItem from "./ToDoItem"
import { useState } from "react"
export default function ToDoList() {
    const [todoItems, setTodoItems] = useState(['吃饭','睡觉'])
    return (
        todoItems.map((item) => <ToDoItem item={item}></ToDoItem>)
    )
}