import React, {useState} from "react";
import EditebleSpan from "../common/editeble-span/EditebleSpan";
import style from './Hometask4.module.scss'
import Input from "../common/input/Input";
import Button from "../common/button/Button";

type HomeTask4Type = {

}

export const Hometask4 = (props: HomeTask4Type) => {

    const [title, setTitle] = useState("INPUT")
    const [error, setError] = useState<boolean>(false)

    const onChangeHandler = (value: string) => {
        setTitle(value)
    }
    const onKeyPressHandler = () => {
        alert('You have pressed enter')
    }




    return (
        <div className={style.container}>
               <div className={style.button}>
                   <Button title={"button example"} deletestyle={false} onClickFunction={()=>{}}/>
               </div>
               <div className={style.input}>
                   <Input onChangeHandler={onChangeHandler}
                          onKeyPressHandler={onKeyPressHandler}
                          errorStyle={false}
                          placeholder={'input example...'}
                   />
               </div>
           </div>

    )
}
