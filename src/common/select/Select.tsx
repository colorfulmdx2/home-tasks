import React, {ChangeEvent, useCallback} from 'react'
import styleSelect from './Select.module.scss'
import {SelectDataType} from "../../HT-7-Select/Hometask7";

type SelectPropsType = {
    data: SelectDataType
    onChange: (value:string) => void
    checked: boolean
}

export const Select = React.memo((props: SelectPropsType) => {

    const onChangeHandler = useCallback((e:ChangeEvent<HTMLSelectElement>) => {
        props.onChange(e.currentTarget.value)
    }, [])
    return (
        <div className={styleSelect.container}>
            <select onChange={onChangeHandler}>
                {
                    props.data.map((el:any) => <option value={el.value}>{el.value}</option>)
                }
            </select>
        </div>
    )
})