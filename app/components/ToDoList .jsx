import ToDoItem from "./ToDoItem"
import { useState } from "react"
export default function ToDoList({todoList}) {
    return (
        todoList.map((item, index) => <ToDoItem item={item.value} key={item.key}></ToDoItem>)
    )
}