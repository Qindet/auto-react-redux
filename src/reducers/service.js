import WagService from "../services/wag-service";

const initialState = {
    service: new WagService()
}

export default function serviceReducer(state=initialState, action) {
    switch (action.type) {
        case 'CHANGE_SERVICE':
            console.log(action.payload)
            return {
                service: action.payload
            }
        default:
            return state
    }
}