

const autoItemRequested = () => {
    return {
        type: 'FETCH_ITEM_REQUESTED'
    }
}

const autoItemLoaded = (item) => {
    return {
        type: 'FETCH_ITEM_LOADED',
        payload: item
    }
}

const autoItemError = (error) => {
    return {
        type: 'FETCH_ITEM_FAILED',
        payload: error
    }
}

const fetchAutoItem = (service, dispatch, id) =>  {

    dispatch(autoItemRequested())
    service.getItem(id)
        .then((item) => {
            dispatch(autoItemLoaded(item))
        })
        .catch((error) => dispatch(autoItemError(error)))
}

export {
    fetchAutoItem
}