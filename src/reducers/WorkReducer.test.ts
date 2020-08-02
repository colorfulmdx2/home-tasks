import {WorkReducer} from "./WorkReducer";


let startState: any = {};

beforeEach(() => {

        startState= [
            {id: "1", name: "Viktor", age: 32},
            {id: "2", name: "Ann", age: 14},
            {id: "3", name: "Ziberta", age: 20}
        ]

})
test('Array of names has to be filtered by ascending person age', () => {
    const action = {type: 'SORT', payload: 'up'}
    const endState = WorkReducer(startState, action)

    expect(endState).toEqual([
        {id: "2", name: "Ann", age: 14},
        {id: "3", name: "Ziberta", age: 20},
        {id: "1", name: "Viktor", age: 32},
    ])
});

test('Array of names has to be filtered by descending person age', () => {
    const action = {type: 'SORT', payload: 'down'}
    const endState = WorkReducer(startState, action)

    expect(endState).toEqual([
        {id: "1", name: "Viktor", age: 32},
        {id: "3", name: "Ziberta", age: 20},
        {id: "2", name: "Ann", age: 14}
    ])
});

test('Array of names has to be filtered and contain only adult person (18+)', () => {
    const action = {type: "CHECK", payload: ''}
    const endState = WorkReducer(startState, action)

    expect(endState).toEqual([
        {id: "1", name: "Viktor", age: 32},
        {id: "3", name: "Ziberta", age: 20},

    ])
});

