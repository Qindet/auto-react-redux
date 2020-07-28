const itemAdded = (item) => {
    return {
        type: 'ITEM_ADDED_TO_CART',
        payload: item
    }
}

const itemDeleted = (id) => {
    return {
        type: 'ITEM_DELETED_FROM_CART',
        payload: id
    }
}

const allItemsDeleted = (id) => {
    return {
        type: 'ALL_ITEMS_DELETED_FROM_CART',
        payload: id
    }
}


export {
    itemAdded,
    itemDeleted,
    allItemsDeleted
}