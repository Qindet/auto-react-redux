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

const fetchAutoList = (autoService, dispatch) => () => {
    dispatch(autoRequested())
    autoService.getBmwItems()
        .then((items) => dispatch(autoLoaded(items)))
        .catch((error) => dispatch(autoError(error)))
}



const autoItemRequested = () => {
    console.log(1)
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

const fetchAutoItem = (autoService, dispatch, id) =>  {

    dispatch(autoItemRequested())
    autoService.getItem(id)
        .then((item) => {
            dispatch(autoItemLoaded(item))
        })
        .catch((error) => dispatch(autoItemError(error)))
}


export {
    fetchAutoList,
    fetchAutoItem
}