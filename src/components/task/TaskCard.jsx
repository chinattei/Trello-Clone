import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import TaskCardDeleteButton from './button/TaskCardDeleteButton'
import TakAddInput from './input/TakAddInput'
import TaskCardTitle from './TaskCardTitle'
import Tasks from './Tasks'

export default function TaskCard({
    taskCardsList,
    setTaskCardsList,
    taskCard,
    index
}

) {
    const [inputText, setInputText] = useState("");
    const [taskList, setTaskList] = useState([]);

    return (
        <Draggable
        draggableId={taskCard.id}
        index={index}
        >
            {(provided) => (
                <div
                className='taskCard'
                ref={provided.innerRef}
                {...provided.draggableProps}
                >
                    <div
                        className="taskCardTitleAndTaskCardDeleteButtonArea"
                        {...provided.dragHandleProps}
                    >
                        <TaskCardTitle />
                        <TaskCardDeleteButton
                        taskCardsList={taskCardsList}
                        setTaskCardsList={setTaskCardsList}
                        taskCard={taskCard}
                        />
                    </div>
                    <TakAddInput
                    inputText={inputText}
                    setInputText={setInputText}
                    taskList={taskList}
                    setTaskList={setTaskList}
                    />
                    <Tasks
                    inputText={inputText}
                    setInputText={setInputText}
                    taskList={taskList}
                    setTaskList={setTaskList}
                    />
                </div>
            )}
        </Draggable>
    )
}
