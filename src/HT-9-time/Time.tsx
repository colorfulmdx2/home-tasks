import React, {useState} from "react";
import moment from "moment";
import styles from './Time.module.scss'
import Button from "../common/button/Button";

export const Time = () => {

    const [timerId, setTimerId] = useState();
    const [date, setDate] = useState(new Date());

    const onClickStartTime = () => {
        clearInterval(timerId); // останавливает предыдущий таймер
        const timer_id = setInterval(() => setDate(new Date()), 1000);
        setTimerId(timer_id);
    }
    const onClickStopTime = () => clearInterval(timerId)

    return (
        <div className={styles.container}>
            <div>
                {date.toString()}
            </div>
            <Button title={"REFRESH"} deletestyle={false} onClickFunction={onClickStartTime}/>
            <Button title={"STOP"} deletestyle={false} onClickFunction={onClickStopTime}/>
        </div>
    )
}