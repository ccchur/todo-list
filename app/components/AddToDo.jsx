import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";
import { useState } from "react"
export default function AddToDo({addToDo, typeList}) {

	const [inputValue, setInputValue] = useState("");
	const [selectType, setSelectType] = useState("");

	const handleAddToDo = () => {
		if (inputValue.trim() !== "") {
			addToDo({key: genID(),value:inputValue, type:selectType});
			setInputValue(""); // 清空输入框
		}
	};
	
	function genID(){
		return  crypto.randomUUID();
	}

	return (
		<div className="w-full flex flex-row items-center gap-4 mt-[25px] mb-[25px]">

			<Input size='md' type="text" placeholder="输入待办事项" color="primary"
				onChange={(e) => setInputValue(e.target.value)} value={inputValue}
			/>
			<Select 
				className="md w-[200px]" 
				onChange={(e) => setSelectType(e.target.value)}
			>
				{typeList.map((item) => (
					<SelectItem key={item} value={item}>
						{item}
					</SelectItem>
				))}
			</Select>
			<Button size="md" color="primary" onClick={handleAddToDo}>
                添加
            </Button> 
			</div> 
	)
}
