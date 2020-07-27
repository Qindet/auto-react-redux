const initialState = {
    autoList: [],
    loadingList: true,
    errorList: false,
    itemToDetails: {}
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
        case 'FETCH_AUTO_ERROR':
            return {
                ...state,
                loadingList: false,
                errorList: action.payload,
                autoList: []
            }
        case 'ITEM_TO_DETAILS':
            return {
                ...state,
                itemToDetails: action.payload
            }
        default:
            return state
    }
}

export default reducer