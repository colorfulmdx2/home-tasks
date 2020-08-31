import React, {useCallback} from 'react';
import styleButton from './ButtonComponent.module.scss'

type ButtonType = {
    title: string
    deletestyle:boolean
    onClickFunction: () => void
}

const Button = React.memo((props:ButtonType) => {

    const onClickHandler = useCallback(() => {
        props.onClickFunction()
    }, [])

    return (
        <div className={styleButton.button}>
            <button onClick={onClickHandler}
                    className={!props.deletestyle
                        ? styleButton.buttonRegular
                        : styleButton.buttonDelete}
            >{props.title}</button>
        </div>
    )
})

export default Button