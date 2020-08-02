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

        /*case "SORT": {
            return {...state.sort((a,b) => {
                    if (a.age < b.age) {
                        return 1;
                    }
                    if (a.age > b.age) {
                        return -1;
                    }
                    return 0;
                })}
        }*/
        case "CHECK": {
            return [...state.filter(i => i.age > 18)]
        }
        default:
            return [];
    }
};