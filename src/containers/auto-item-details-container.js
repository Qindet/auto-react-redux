import React, {useEffect} from "react";
import {connect} from "react-redux";
import withService from "../components/hoc/with-service"
import {fetchAutoItem} from "../actions"
import AutoItemDetails from "../components/auto-item-details";
import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error-indicator";

const AutoItemDetailsContainer = ({fetchItem,autoItem, loadingItem, errorItem, itemId}) => {

    useEffect(() => {
        fetchItem(itemId)
    },[fetchItem])

    if (loadingItem) {
        return <Spinner/>
    }

    if (errorItem) {
        return <ErrorIndicator/>
    }

    return <AutoItemDetails autoItem={autoItem}/>
}

const mapStateToProps = ({autoItem, loadingItem, errorItem}) => {
    return {
        autoItem,
        loadingItem,
        errorItem
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {autoService} = ownProps
    return {
        fetchItem: (id) => fetchAutoItem(autoService, dispatch,id)
    }
}

// возможно нужен подход для одного запроса а не получения из всего скорее всего нужно так и сделать
export default withService()(connect(mapStateToProps, mapDispatchToProps)(AutoItemDetailsContainer))