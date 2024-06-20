import { Card, CardBody } from "@nextui-org/react";
import {Chip} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/button";

export default function ToDoItem({ item, deleteToDo, markToDo, finishToDo }) {

	const handleToDelete = () => {
		deleteToDo(item);
	}

	const handleToMark = () => {
		markToDo(item);
	}

	const handleToFinish = () => {
		finishToDo(item);
	}
	return ( 
		<div className="relative">
			<Card className="m-5">
				<CardBody className="flex flex-row justify-between items-center">
					<div className="flex flex-row items-center">
						<Chip
						color="primary"
						className="mr-5"
					>
						待办
                        </Chip>
                        
                        
                        {item.isMarked ? <p className="text-[#f5a524]">{item.value}</p> : <p>{item.value}</p>}
                        {item.isFinished ? <span className="absolute w-[65%] h-[5px] bg-[#17c964] left-[77px] top-[26px] opacity-[0.6] rounded" ></span> : null}

					</div>
					
                    
                    <ButtonGroup size="sm">
                        <Button color="success" className="text-[#fff] font-semibold"
                        onClick={handleToFinish}>完成</Button>
						<Button color="warning" className="text-[#fff] font-semibold"
						onClick={handleToMark}>标记</Button>
                        <Button color="danger" className="text-[#fff] font-semibold"
                        onClick={handleToDelete}>删除</Button>
					</ButtonGroup>
				</CardBody>
				</Card>

		</div>
	);
}
