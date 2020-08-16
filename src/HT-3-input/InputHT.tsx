import React, {ChangeEvent, useState} from 'react';
import styleInput from './Input.module.scss'
import {Input} from "../common/input/Input";
import Button from "../common/button/Button";



function InputHT(props: any) {


    const [title, setTitle] = useState("")
    const [error, setError] = useState(false)

    const onChangeHandler = (value: string) => {
        setTitle(value)
    }

    const hello = () => {
        if (title.trim()) {
            setError(false)
            alert('Hello ' + title.trim() + ' !')
            setTitle('')
        } else {
            setError(true)
            alert('Type something')
        }

    }

    const onKeyPressHandler = () => {
            hello();
    }

    return (
        <div className={styleInput.container}>
            <div className={styleInput.content}>
                <div className={styleInput.input}>
                    <Input value={title}
                           onChangeHandler={onChangeHandler}
                           placeholder={'Type your name...'}
                           onKeyPressHandler={onKeyPressHandler}
                           errorStyle={error}
                    />
                </div>
                <div className={styleInput.button}>
                    <Button onClickFunction={hello}
                            deletestyle={error}
                            title={'+'}
                    />
                </div>
            </div>
        </div>
    );
}

export default InputHT;
