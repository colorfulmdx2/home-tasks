import React from 'react';
import styleFilter from './Filter.module.scss'



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
            <button className={styleFilter.button} onClick={onAllClickFilter}>all</button>
            <button className={styleFilter.button} onClick={onImportantClickFilter}>important</button>
            <button className={styleFilter.button} onClick={onUnImportantClickFilter}>unimportant</button>
        </div>
    );
}

export default Filter;
