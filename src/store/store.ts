import {combineReducers, createStore} from "redux";
import {Homework10Reducer} from "../reducers/homework10-reducer";


const rootReducer = combineReducers({
    homework10: Homework10Reducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

