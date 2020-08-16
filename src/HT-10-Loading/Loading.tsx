import React from "react";
import style from './Loading.module.scss'
import Button from "../common/button/Button";
import {CircularProgress} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {setLoading, setLoadingOff} from "../reducers/homework10-reducer";

export const Loading = (props:any) => {

    const dispatch = useDispatch()

    const loading = useSelector<AppRootStateType, boolean>(state => state.homework10.loading)

    const on = () => {
        dispatch(setLoading(true))
    }

    const off = () => {
        dispatch(setLoadingOff(false))
    }

    const buttonOnclickHandler = () => {
        on()
        setTimeout(off, 1000)
    }

    return (
        <div className={style.container}>
            <Button title={'SHOW'} deletestyle={false} onClickFunction={buttonOnclickHandler}/>
            {loading &&  <CircularProgress color="secondary"/>}
        </div>
    )
}