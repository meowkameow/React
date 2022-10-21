const initialState = {
    showName: false,
    name: 'JeniVi'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'showNameToggle':
            return {
                ...state,
                showName: !state.showName
            }
        default:
            return state
    }
}
