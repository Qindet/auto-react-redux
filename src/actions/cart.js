const itemAdded = (item) => {
    return {
        type: 'ITEM_ADDED_TO_CART',
        payload: item
    }
}



export {
    itemAdded
}