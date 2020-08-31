import React, {ChangeEvent, useState} from "react";
import {Range} from "../common/Range/Range";
import style from "./RangeHometask.module.scss";
import Button from "../common/button/Button";
import {DoubleRangeSlider} from "../common/DoubleRange";

export const RangeHometask = (props:any) => {

    const onClickHandler = () => {

    }

    const onChangeRangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(Number.parseInt(e.currentTarget.value))
    }
    const [value, setValue] = useState(0)

    const [value1, setValue2] = React.useState<number[]>([20, 37]);
    const handleChange = (event: any, newValue: number | number[]) => {
        setValue2(newValue as number[]);
    };


    return (
        <div className={style.container}>
            <DoubleRangeSlider handleChange={handleChange}
                               value={value1}
            />
            <Range name={"price"}
                   value={value}
                   max={100}
                   min={1}
                   step={1}
                   onChange={onChangeRangeHandler}
            />

            <Button title={"Send"} deletestyle={false} onClickFunction={onClickHandler}/>
        </div>

    )
}