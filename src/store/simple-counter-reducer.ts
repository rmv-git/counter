type initialStateType = {
    counterValue: number;
}
const initialState: initialStateType = {
    counterValue: 0,
}

export const simpleCounterReducer = (state = initialState, action: SetCounterValueType): initialStateType => {
    switch (action.type) {
        case 'SET_COUNTER_VALUE':
            return {...state, counterValue: action.counterValue}
        default:
            return state
    }
}

type SetCounterValueType = ReturnType<typeof setCounterValueAC>;

export const setCounterValueAC = (counterValue: number) => {
    return {
        type: 'SET_COUNTER_VALUE',
        counterValue
    } as const
}