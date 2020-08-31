import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value: number) {
    return `${value}`;
}

export const DoubleRangeSlider = (props:any) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                Simple range
            </Typography>
            <Slider
                value={props.value}
                onChange={props.handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}
