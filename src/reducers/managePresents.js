const initialState = {
    numberOfPresents: 0
}

export function managePresents(state = initialState, action){
    switch (action.type) {
        case 'INCREASE':
            return {numberOfPresents: state.numberOfPresents + 1}
        default:
            return state;
    }
}
