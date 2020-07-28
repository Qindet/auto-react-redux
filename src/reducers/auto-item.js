const initialState = {
    autoItem: {},
    loadingItem: true,
    errorItem: false
}

export default function autoItemReducer(state=initialState, action) {
    switch (action.type) {
        case 'FETCH_ITEM_REQUESTED':
            return {
                ...state,
                loadingItem: true,
                errorList: false,
                autoItem: {}
            }
        case 'FETCH_ITEM_LOADED':
            return {
                ...state,
                loadingItem: false,
                errorItem: false,
                autoItem: action.payload
            }
        case 'FETCH_ITEM_FAILED':
            return {
                ...state,
                loadingItem: false,
                errorItem: action.payload,
                autoItem: {}
            }
        default:
            return state
    }
}