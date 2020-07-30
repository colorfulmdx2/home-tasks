import React from 'react';
import styleMessage from './message.module.scss'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {orange} from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        large: {
            width: theme.spacing(9),
            height: theme.spacing(9),
        },
        backgroundColor: {
            background: 'purple'
        }
    }),
);
export type Message = {
    avatar: string,
    name: string,
    message: string
    time: string
}


const Message = (props:Message) => {
    const classes = useStyles();
    return (
        <div className={styleMessage.container}>

            <Avatar src="./assets/images/background.jpg"  className={classes.large}>{props.avatar}</Avatar>

            <div className={styleMessage.text}>
                <div className={styleMessage.name}>{props.name}</div>
                <div className={styleMessage.message}>{props.message}</div>
            </div>
            <div className={styleMessage.respond}>
                <a href={'/'}>RESPOND</a>
            </div>
            <div className={styleMessage.time}>
                {props.time}
            </div>

        </div>
    )
}

export default Message