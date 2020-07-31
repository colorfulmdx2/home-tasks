import React, {useState} from "react";
import EditebleSpan from "../common/editeble-span/EditebleSpan";

type HomeTask4Type = {

}

export const Hometask4 = (props: HomeTask4Type) => {

    const [title, setTitle] = useState("INPUT")
    const [error, setError] = useState<boolean>(false)

    const onChangeHandler = (value: string) => {
        setTitle(value)
    }

    const addTpStorage = ()=> {
        let state = {
            id: '1',
            title: 'werewr'
        }
        let stateAsString = JSON.stringify(state)

        localStorage.setItem('viktor', stateAsString)
    }

    const getFromStorage = ()=> {
        debugger
        let my = localStorage.getItem('viktor')
        if (my) {
            let stateFromStorage = JSON.parse(my)
        }

    }


    return (
        <div>
            <button onClick={addTpStorage}>Add to localstorage</button>
            <button onClick={getFromStorage}>Get values from localstorage</button>


            <EditebleSpan onChangeHandler={onChangeHandler}
                          value={title}
                          errorStyle={error}
                          onKeyPressHandler={()=>{}}
            />
        </div>
    )
}
