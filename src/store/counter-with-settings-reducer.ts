export type initialStateType = {
    counterValue: number;
    startValue: number;
    maxValue: number;
    textError: string;
}
const initialState: initialStateType = {
    counterValue: 0,
    startValue: 0,
    maxValue: 0,
    textError: '',
}

export const counterWithSettingsReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'SET_COUNTER_VALUE':
            return {...state, counterValue: action.counterValue}
        case 'SET_START_VALUE':
            return {...state, startValue: action.startValue}
        case 'SET_MAX_VALUE':
            return {...state, maxValue: action.maxValue}
        case 'SET_ERROR':
            return {...state, textError: action.textError}
        default:
            return state
    }
}

type SetCounterValueType = ReturnType<typeof setCounterValueAC>;
type SetStartValueType = ReturnType<typeof setStartValueAC>;
type SetMaxValueType = ReturnType<typeof setMaxValueAC>;
type SetErrorType = ReturnType<typeof setErrorAC>;
type ActionsType =
    | SetStartValueType
    | SetMaxValueType
    | SetErrorType
    | SetCounterValueType;

export const setCounterValueAC = (counterValue: number) => {
    return {
        type: 'SET_COUNTER_VALUE',
        counterValue
    } as const
}
export const setStartValueAC = (startValue: number) => {
    return {
        type: 'SET_START_VALUE',
        startValue
    } as const
}
export const setMaxValueAC = (maxValue: number) => {
    return {
        type: 'SET_MAX_VALUE',
        maxValue
    } as const
}
export const setErrorAC = (textError: string) => {
    return {
        type: 'SET_ERROR',
        textError
    } as const
}
