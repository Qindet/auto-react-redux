const initialState = {
    items: []
}

export default function cartReducer(state=initialState, action) {
    switch (action.type) {
        case 'ITEM_ADDED_TO_CART':
            const idx = state.items.findIndex((item) => item.id === action.payload.id)
            const arr = [...state.items]
           if (idx === -1) {
               action.payload.count = 1
               arr.push(action.payload)
           } else {
               arr[idx].count++
               arr[idx].price += arr[idx].price
               return {
                   ...state,
                   items: arr
               }
           }
            return {
              ...state,
                items: arr
            }
        default:
            return state
    }
}