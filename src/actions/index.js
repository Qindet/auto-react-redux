const autoRequested = () => {
    return {
        type: 'FETCH_AUTO_REQUESTED'
    }
}


const autoLoaded = (items) => {
    return {
        type: 'FETCH_AUTO_LOADED',
        payload: items
    }
}

const autoError = (error) => {
    return {
        type: 'FETCH_AUTO_FAILED',
        payload: error
    }
}

const fetchAuto = (autoService, dispatch) => () => {
    dispatch(autoRequested())
    autoService.getBmwItems()
        .then((items) => dispatch(autoLoaded(items)))
        .catch((error) => dispatch(autoError(error)))
}

const itemToDetails = (id) => {
    return {
        type: 'ITEM_TO_DETAILS',
        payload: id
    }
}

export {
    fetchAuto,
    itemToDetails
}