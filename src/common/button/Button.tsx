import React from 'react';
import styleButton from './ButtonComponent.module.scss'

type ButtonType = {
    title: string
    deletestyle:boolean
    onClickFunction: () => void
}

const Button = (props:ButtonType) => {

    const onClickHandler = () => {
        props.onClickFunction()
    }

    return (
        <div className={styleButton.button}>
            <button onClick={onClickHandler}
                    className={!props.deletestyle
                        ? styleButton.buttonRegular
                        : styleButton.buttonDelete}
            >{props.title}</button>
        </div>
    )
}

export default Button