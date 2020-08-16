import React, {useState} from 'react';
import EditebleSpan from "../common/editeble-span/EditebleSpan";
import Button from "../common/button/Button";
import stylesHometask6 from './Hometask6.module.scss'

type StateType = {
    x: string
    y: number
}

export const Hometask6 = (props:any) => {

    function saveState<T> (key: string, state: T) {
        const stateAsString = JSON.stringify(state);
        localStorage.setItem(key, stateAsString)
    }

    function restoreState<T>(key: string, defaultState: T) {
        const stateAsString = localStorage.getItem(key);
        if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
        return defaultState;
    }

    const [title, setTitle] = useState('Editable Span')

    const onChangeHandler = (value: string) => {
        setTitle(value)
    }

    let addToLocalStorageTitle = 'Add'
    const addToLocalStorageOnClick = () => {
        saveState<StateType>("test", {x: title, y: 1})
    }

    let getFromToLocalStorageTitle = 'Get'
    const getFromToLocalStorageOnClick = () => {
        let state: StateType = restoreState<StateType>("test", {x: "A", y: 0})
        setTitle(state.x)
    }

    return (
        <div className={stylesHometask6.container}>
            <div className={stylesHometask6.editableSpan}>
                <EditebleSpan onChangeHandler={onChangeHandler}
                              onKeyPressHandler={()=>{}}

                              value={title}
                              errorStyle={false}/>
            </div>
            <div className={stylesHometask6.buttonsContainer}>
                <div className={stylesHometask6.addButton}>
                    <Button title={addToLocalStorageTitle}
                            deletestyle={false}
                            onClickFunction={addToLocalStorageOnClick}/>
                </div>
                <div className={stylesHometask6.getButton}>
                    <Button title={getFromToLocalStorageTitle}
                            deletestyle={false}
                            onClickFunction={getFromToLocalStorageOnClick}/>
                </div>
            </div>
        </div>
    )
}