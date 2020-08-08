import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchAutoItem, itemAdded} from "../actions"
import AutoItemDetails from "../components/auto-item-details";
import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error-indicator";

const AutoItemDetailsContainer = ({fetchAutoItem,autoItem, loadingItem, errorItem, itemId, itemAdded,service}) => {

    useEffect(() => {
        fetchAutoItem(service,itemId)
    },[fetchAutoItem,itemId,service])

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

const mapDispatchToProps =  {
       fetchAutoItem,
        itemAdded
}

// возможно нужен подход для одного запроса а не получения из всего скорее всего нужно так и сделать
export default connect(mapStateToProps, mapDispatchToProps)(AutoItemDetailsContainer)