"use client"
import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList ";
import AddToDo from "./components/AddToDo";
export default function Home() {
  return (
    <div >
      <NextUIProvider>
        <div className="p-5 w-[70%] h-[700px] m-auto relative">
          <Header></Header>
          <ToDoList></ToDoList>
          <AddToDo></AddToDo>
        </div>
      </NextUIProvider>
    </div>
    
  );
}
