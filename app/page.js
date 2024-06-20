"use client"
import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList ";
import AddToDo from "./components/AddToDo";
import { useState, useEffect } from "react";
export default function Home() {

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const newTodoList = JSON.parse(localStorage.getItem("todo")) || [];
    setTodoList(newTodoList);
  }, [])
  const addToDo = (item) => {
    const newTodoList = [...todoList, item];
    setTodoList(newTodoList);
    localStorage.setItem("todo", JSON.stringify(newTodoList));
  }

  return (
    <div >
      <NextUIProvider>
        <div className="p-5 w-[70%] h-[700px] m-auto relative">
          <Header></Header>
          <ToDoList todoList={todoList}></ToDoList>
          <AddToDo addToDo={addToDo}></AddToDo>
        </div>
      </NextUIProvider>
    </div>
    
  );
}
