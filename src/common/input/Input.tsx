import React, {ChangeEvent, KeyboardEvent, useCallback} from 'react';
import styleInputComponent from './InputComponent.module.scss'

export type InputPropsType = {
    onChangeHandler: (value: string) => void
    onKeyPressHandler: () => void
    value?: string
    placeholder?: string
    errorStyle: boolean
    onBlur?: () => void
}



export const Input = React.memo((props:InputPropsType) => {
        const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            props.onChangeHandler(e.currentTarget.value)
        }, [])
        const onKeyPressHandler = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
            if(e.charCode === 13){
                props.onKeyPressHandler()
            }
        }, [])



        return (
            <div>
                <input placeholder={props.placeholder}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       onBlur={props.onBlur}
                       value={props.value}
                       className={!props.errorStyle ? styleInputComponent.input : styleInputComponent.inputError}/>
            </div>
        )
    }
)
export default Input