import React, {useState} from 'react';
import styleTask from './Task.module.scss'
import {TaskType} from "./Todolist";
import EditebleSpan from "../common/editeble-span/EditebleSpan";


function Task(props: TaskType) {

    const [title, setTitle] = useState(props.title)

    const onChangeHandler = (value: string) => {
        setTitle(value)
    }


    return (
        <div className={styleTask.task}>
            <div className={styleTask.container}>
                {
                    props.importance ? <div className={styleTask.importance}>!!!</div> : <div className={styleTask.importance}>!</div>
                }

                {/*<div className={styleTask.taskMessage}>{props.title}</div>*/}
                <EditebleSpan onChangeHandler={onChangeHandler} onKeyPressHandler={()=>{}} value={title} errorStyle={false}/>
                <div className={styleTask.deleteButton}>
                    <button className={styleTask.button} onClick={props.deleteTask}>Del</button>
                </div>
            </div>
        </div>
    );
}

export default Task;
