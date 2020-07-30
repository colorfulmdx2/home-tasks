import React, {useState} from 'react';
import styleTodolist from './Todolist.module.scss'
import Task from "./Task";
import {v1} from "uuid";
import Filter from "./FIlter";


export type TaskType = {
    id: string
    title: string
    importance: boolean
    deleteTask: () => void
}
export type FilterValueType = 'all' | 'important' | 'unimportant'


function Todolist(props: any) {


    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", importance: true},
        {id: v1(), title: "JS", importance: false},
        {id: v1(), title: "ReactJS", importance: false},
        {id: v1(), title: "rest api", importance: true},
        {id: v1(), title: "graphQL", importance: false},
    ])


    let [filter, setFilter] = useState<FilterValueType>('all')



    if (filter ==='important') {
        tasks = tasks.filter(t => t.importance === true)
    }
    if (filter ==='unimportant') {
        tasks = tasks.filter(t => t.importance === false)
    }

    function changeFilter(value: FilterValueType) {
        setFilter(value)
    }
    function removeTask(id: string) {
        let filtredTasks = tasks.filter(t => t.id !== id)
        setTasks(filtredTasks)
    }


    return (
        <div className={styleTodolist.todolist}>
            <div className={styleTodolist.tasksContainer}>
                {
                    tasks.map(t => {
                        const onRemoveHandler = () => removeTask(t.id)
                        return (
                            <Task
                                key={t.id}
                                id={t.id}
                                title={t.title}
                                importance={t.importance}
                                deleteTask={onRemoveHandler}
                            />
                        )
                    })
                }
            </div>

            <Filter changeFilter={changeFilter}/>
        </div>
    );
}

export default Todolist;
