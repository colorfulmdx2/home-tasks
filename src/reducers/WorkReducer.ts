
export type SortActionType = {
    type: "SORT"
    payload: string
}
export type CheckActionType = {
    type: "CHECK"
    payload: string
}

export type ActionType = CheckActionType | SortActionType

export const WorkReducer = (state: Array<{ id: string, name: string, age: number }>, action: { type: string, payload: any }) => {


    switch (action.type) {
        case "SORT": {
            if (action.payload === 'up') {
                let copy = [...state]
                let a = copy.sort((a, b) => {
                        if (a.age > b.age) {
                            return 1;
                        }
                        if (a.age < b.age) {
                            return -1;
                        }
                        return 0;
                    }
                )
                return a
            } else {
                let copy = [...state]
                let a = copy.sort((a, b) => {
                        if (a.age < b.age) {
                            return 1;
                        }
                        if (a.age > b.age) {
                            return -1;
                        }
                        return 0;
                    }
                )
                return a
            }
        }
        case "CHECK": {
            return [...state.filter(i => i.age > 18)]

        }
        default:
            return [];
    }
};

export const sortUP = (): ActionType => {
    return  {type: 'SORT', payload: 'up'}
}
export const sortDOWN = (): ActionType => {
    return  {type: 'SORT', payload: 'down'}
}
export const check = (): CheckActionType => {
    return  {type: 'CHECK', payload: ''}
}