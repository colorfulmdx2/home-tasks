import React, {useState} from 'react'
import {Select} from "../common/select/Select";
import styleHometask7 from './Hometask7.module.scss'
import {Radio} from "../common/radio/Radio";

type SelectValueDataType = {
    value: string
    selected: boolean
}
type RadioValueDataType = {
    value: string
    name: string
    id: string
    checked: boolean
}

export type SelectDataType = Array<SelectValueDataType>
export type RadioDataType =  Array<RadioValueDataType>

export const Hometask7 = () => {

    let [selectData, setSelectData] = useState([
        {value: 'Vik', selected: true},
        {value: 'Dava', selected: false},
        {value: 'Vlad', selected: false}
    ])

    let [radioData, setRadioData] = useState<Array<RadioValueDataType>>([
        {value: '1', name: 'number1', id: '1', checked: true},
        {value: '2', name: 'number1', id: '2', checked: false},
        {value: '3', name: 'number1', id: '3', checked: false}
        ])


    const onChangeSelectHandler = (value: string) => {
        debugger
        let newArr = selectData.map( (el)=> {
            if(el.value === value) {
                return {...el, selected: true}
            } else {
                return {...el, selected: false}
            }
        } )
        setSelectData(newArr)
    }
    const onChangeRadioHandler = (value: string) => {
        let newArr = radioData.map( (el)=> {
            if(el.value === value) {
                return {...el, checked: true}
            } else {
                return {...el, checked: false}
            }
        } )
        setRadioData(newArr)

    }

   return (
       <div className={styleHometask7.container}>
            <Select data={selectData}
                    onChange={onChangeSelectHandler}
                    checked={false}
            />
            <Radio value={radioData}
                   onChange={onChangeRadioHandler}

            />
       </div>
   )
}