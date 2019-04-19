const initialState = {
    data: [],
    isLoading: true
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_DATA":
            return {...state, data: action.fetched_data, isLoading: action.isLoading}
        case "HANDLE_LOADING":
        return {...state, isLoading: action.isLoading}
        default:
            return state;
    }
}

export default reducer