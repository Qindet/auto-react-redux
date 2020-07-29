
const changeService = (name) => {
    console.log(name)
    return {
        type: 'CHANGE_SERVICE',
        payload: name
    }

}

export {changeService}