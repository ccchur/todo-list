import { Card, CardBody } from "@nextui-org/react";
import {Chip} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/button";

export default function ToDoItem({ item }) {
	return ( 
		<div>
			<Card className="m-5">
                <CardBody className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center">
                        <Chip
                        // startContent={<CheckIcon size={18} />}
                        // variant="faded"
                        color="primary"
                        className="mr-5"
                    >
                        待办
                    </Chip>
                    <p>{item}</p></div>
                    <ButtonGroup size="sm">
                        <Button color="success" className="text-[#fff] font-semibold">完成</Button>
                        <Button color="warning" className="text-[#fff] font-semibold">标记</Button>
                        <Button color="danger" className="text-[#fff] font-semibold">删除</Button>
                    </ButtonGroup>
                </CardBody>
	        </Card>
		</div>
	);
}
