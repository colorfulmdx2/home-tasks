import React, {useReducer} from "react";
import style from './Reducer.module.scss'
import Button from "../common/button/Button";
import {check, sortDOWN, sortUP, WorkReducer} from "../reducers/WorkReducer";
import moment from "moment";

type PersonType = {
    id: string
    name: string
    age: number
}

export const ReducerHT = () => {

    let [state, dispatchToState] = useReducer(WorkReducer, [
        {id: "1", name: "Viktor", age: 32},
        {id: "2", name: "Ann", age: 14},
        {id: "3", name: "Ziberta", age: 20}
    ])



    const incHandler = () => {
        dispatchToState(sortUP())
    }

    const decHandler = () => {
        dispatchToState(sortDOWN())
    }

    const sortHandler = () => {
        dispatchToState(check())
    }

    let time = moment().format('MMMM Do YYYY, h:mm:ss a');
    return (
        <div className={style.container}>

            {state.map((e:PersonType) => (
                <div className={style.elementContainer}>
                    <div className={style.element}>{e.name}</div>
                    <div className={style.element}>{e.age}</div>
                </div>
            ))}
            <Button title={'INC'} deletestyle={false} onClickFunction={incHandler}/>
            <Button title={'DEC'} deletestyle={false} onClickFunction={decHandler}/>
            <Button title={'SORT'} deletestyle={false} onClickFunction={sortHandler}/>
        </div>
    )
}