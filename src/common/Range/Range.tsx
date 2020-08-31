import React, {ChangeEvent, useState} from "react";
import style from './range.module.scss'

type RangePropsType = {
    value: number
    name: string
    min: number
    max: number
    step: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Range = React.memo((props: RangePropsType) => {



    return (
        <div className={style.container}>
            <div className={style.screen}>{props.value}</div>
            <input type={'range'}
                   value={props.value}
                   name={props.name}
                   min={props.min}
                   max={props.max}
                   step={props.step}
                   onChange={props.onChange}
            />
            <label htmlFor={props.name}>{props.name}</label>
        </div>
    )
})