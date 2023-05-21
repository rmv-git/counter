type initialStateType = {
    counterValue: number
}
const initialState: initialStateType = {
    counterValue: 0
}

export const simpleCounterReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'INCREMENT_COUNTER_VALUE':
            return {...state, counterValue: action.counterValue + 1}
        case 'DECREMENT_COUNTER_VALUE':
            return {...state, counterValue: action.counterValue - 1}
        case 'RESET_COUNTER_VALUE':
            return {...state, counterValue: 0}
        default:
            return state
    }
}

type IncrementCounterValueType = ReturnType<typeof incrementCounterValueAC>;
type DecrementCounterValueType = ReturnType<typeof decrementCounterValueAC>;
type ResetCounterValueType = ReturnType<typeof resetCounterValueAC>;
type ActionsType = IncrementCounterValueType
    | DecrementCounterValueType
    | ResetCounterValueType;

export const incrementCounterValueAC = (counterValue: number) => {
    return {
        type: 'INCREMENT_COUNTER_VALUE',
        counterValue
    } as const
}
export const decrementCounterValueAC = (counterValue: number) => {
    return {
        type: 'DECREMENT_COUNTER_VALUE',
        counterValue
    } as const
}
export const resetCounterValueAC = () => {
    return {
        type: 'RESET_COUNTER_VALUE',
    } as const
}
