type initialStateType = {
    loading: boolean
}

type SetLoadingActionType = {
    type: "SET_LOADING"
    loading: boolean
}

type Homework10ReducerActionType = SetLoadingActionType

const initialState = {loading: false}

export const Homework10Reducer = (state: initialStateType = initialState, action: Homework10ReducerActionType) => {
    switch (action.type) {
        case "SET_LOADING":
            return {...state, loading: action.loading}
        default:
            return state;
    }
};

export const setLoading = (loading: boolean): SetLoadingActionType => ({type: "SET_LOADING", loading: true})
export const setLoadingOff = (loading: boolean): SetLoadingActionType => ({type: "SET_LOADING", loading: false})
