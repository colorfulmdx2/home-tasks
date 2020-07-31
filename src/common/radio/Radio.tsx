import React, {ChangeEvent} from "react";
import {RadioDataType} from "../../HT-7-Select/Hometask7";
import styleRadio from './Radio.module.scss'

type RadioPropsType = {
    value: RadioDataType
    onChange: (value: string) => void
}

export const Radio = (props:RadioPropsType) => {

    const onChangeHandler = (e: any) => {
        props.onChange(e.currentTarget.value)
        //props.onChange(e.currentTarget.checked)
    }

    return (
        <div className={styleRadio.container}>
            {
                props.value.map((el) => {
                    return (
                        <div>
                            <input type={'radio'}
                                   key={el.id}
                                   name={el.name}
                                   onChange={onChangeHandler}
                                   id={el.id}
                                   value={el.value}
                                   checked={el.checked}

                            />
                            <label htmlFor={el.id}>{el.value}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}

/*
<input type="radio" id="contactChoice1"
       name="contact" value="email">
    <label htmlFor="contactChoice1">Email</label>

    <input type="radio" id="contactChoice2"
           name="contact" value="phone">
        <label htmlFor="contactChoice2">Phone</label>*/
