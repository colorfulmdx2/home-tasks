import React, {ChangeEvent, useState} from 'react';
import styleInput from './Input.module.scss'
import {Input} from "../common/input/Input";
import Button from "../common/button/Button";



function InputHT(props: any) {


    const [title, setTitle] = useState("")

    const onChangeHandler = (value: string) => {
        setTitle(value)
    }

    const hello = () => {
        if (title.trim()) {
            alert('Hello ' + title.trim() + ' !')
        } else {
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
                           errorStyle={true}
                    />
                </div>
                <div className={styleInput.button}>
                    <Button onClickFunction={hello}
                            deletestyle={true}
                            title={'+'}
                    />
                </div>
            </div>
        </div>
    );
}

export default InputHT;
