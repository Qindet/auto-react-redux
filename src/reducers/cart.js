const initialState = {
    items: [],
    total: 0
}

export default function cartReducer(state=initialState, action) {
    switch (action.type) {
        case 'ITEM_ADDED_TO_CART':
            const id = state.items.findIndex((item) => item.id === action.payload.id)
            const arr = [...state.items]
            if (id === -1) {
               action.payload.count = 1
                action.payload.total = action.payload.price
               arr.push(action.payload)
           } else {
               arr[id].count++
               arr[id].total += arr[id].price
               const total = arr.reduce((sum, cur) => sum+ cur.total, 0)
               return {
                   ...state,
                   total,
                   items: arr
               }
           }
            const total = arr.reduce((sum, cur) => sum+ cur.total, 0)
            return {
              ...state,
                total,
                items: arr
            }
        case 'ITEM_DELETED_FROM_CART':
            const id1 = state.items.findIndex((item) => item.id === action.payload)
            const arr1 = [...state.items]
            if (id1 === -1) {
                return {
                    ...state
                }
            }
            if (state.items[id1].count > 1) {
                arr1[id1].count--
                arr1[id1].total -= arr1[id1].price
                const total = arr1.reduce((sum, cur) => sum+ cur.total, 0)
                return {
                    ...state,
                    total,
                    items: arr1
                }
            }
            if (state.items[id1].count === 1) {
                const newArr = [...arr1.slice(0,id1),...arr1.slice(id1+1)]
                const total = newArr.reduce((sum, cur) => sum+ cur.total, 0)
                return {
                    ...state,
                    total,
                    items: newArr
                }
            }
        case 'ALL_ITEMS_DELETED_FROM_CART':
            const id2 = state.items.findIndex((item) => item.id === action.payload)
            const arr2 = [...state.items]
            const newArr = [...arr2.slice(0,id2),...arr2.slice(id2+1)]
            const totals = newArr.reduce((sum, cur) => sum+ cur.total, 0)
            return {
                ...state,
                total: totals,
                items: newArr
            }
        default:
            return state
    }
}
