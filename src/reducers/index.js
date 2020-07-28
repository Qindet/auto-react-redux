const initialState = {
    autoList: [],
    loadingList: true,
    errorList: false,
    autoItem: {},
    loadingItem: true,
    errorItem: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_AUTO_REQUESTED':
            return {
                ...state,
                loadingList: true,
                errorList: false,
                autoList: []
            }
        case 'FETCH_AUTO_LOADED':
            return {
                ...state,
                loadingList: false,
                errorList: false,
                autoList: action.payload
            }
        case 'FETCH_AUTO_FAILED':
            return {
                ...state,
                loadingList: false,
                errorList: action.payload,
                autoList: []
            }
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

export default reducer