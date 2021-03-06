import React, {useCallback, useState} from "react";
import styleEditebleSpan from './EditebleSpan.module.scss'
import Input from "../input/Input";

export type EditebleSpanType = {
    onChangeHandler: (value: string) => void
    onKeyPressHandler: () => void
    value: string
    errorStyle: boolean
}

const EditebleSpan = React.memo((props:EditebleSpanType) => {

    let [editMode, setEditMode] = useState(false);

    const activateEditMode = useCallback(() => {
        setEditMode(true);
    }, [])
    const activateViewMode = useCallback(() => {
        setEditMode(false);
    }, [])

    return (
        <div className={styleEditebleSpan.container}>
            {
                editMode
                    ? <Input onBlur={activateViewMode}
                             onChangeHandler={props.onChangeHandler}
                             value={props.value}
                             errorStyle={props.errorStyle}
                             onKeyPressHandler={props.onKeyPressHandler}

                    />
                    : <span className={styleEditebleSpan.span}
                            onDoubleClick={activateEditMode}

                    >{props.value}</span>
            }
        </div>
    )
})

export default EditebleSpan