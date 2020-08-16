import React from 'react';
import styleFilter from './Filter.module.scss'
import Button from "../common/button/Button";



function Filter(props: any) {

    const onAllClickFilter = () => {
        props.changeFilter('all')
    }
    const onImportantClickFilter = () => {
        props.changeFilter('important')
    }
    const onUnImportantClickFilter = () => {
        props.changeFilter('unimportant')
    }

    return (
        <div className={styleFilter.filter}>
            <Button title={'all'} deletestyle={false} onClickFunction={onAllClickFilter}/>
            <Button title={'important'} deletestyle={false} onClickFunction={onImportantClickFilter}/>
            <Button title={'unimportant'} deletestyle={false} onClickFunction={onUnImportantClickFilter}/>
        </div>
    );
}

export default Filter;
