import React, {useEffect} from "react";
import {connect} from "react-redux";
import withService from "../components/hoc/with-service"
import {fetchAutoItem, itemAdded} from "../actions"
import AutoItemDetails from "../components/auto-item-details";
import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error-indicator";
import compose from "../utils";

const AutoItemDetailsContainer = ({fetchItem,autoItem, loadingItem, errorItem, itemId, itemAdded,service}) => {

    useEffect(() => {
        fetchItem(itemId,service)
    },[fetchItem,itemId,service])

    if (loadingItem) {
        return <Spinner/>
    }

    if (errorItem) {
        return <ErrorIndicator/>
    }

    return <AutoItemDetails autoItem={autoItem} itemAdded={itemAdded}/>
}

const mapStateToProps = ({autoItemReducer:{autoItem, loadingItem, errorItem},serviceReducer:{service}}) => {
    return {
        autoItem,
        loadingItem,
        errorItem,
        service
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchItem: (id,service) => fetchAutoItem(service, dispatch,id),
        itemAdded: (item) => dispatch(itemAdded(item))
    }
}

// возможно нужен подход для одного запроса а не получения из всего скорее всего нужно так и сделать
export default compose(withService(), connect(mapStateToProps, mapDispatchToProps))(AutoItemDetailsContainer)