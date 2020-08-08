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

const fetchAutoList = ( service)  => (dispatch)=>{
    dispatch(autoRequested())
    service.getItems()
        .then((items) => dispatch(autoLoaded(items)))
        .catch((error) => dispatch(autoError(error)))
}

export {
    fetchAutoList
}