import React, {useEffect} from "react";
import {connect} from "react-redux";


import {fetchAutoList, itemAdded} from "../actions";
import AutoList from "../components/auto-list";
import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error-indicator";


const AutoListContainer = ({autoList, loadingList, errorList, fetchAutoList, itemAdded, service}) => {
    useEffect(() => {
        fetchAutoList(service)
    }, [fetchAutoList, service])

    if (loadingList) {
        return <Spinner/>
    }

    if (errorList) {
        return <ErrorIndicator/>
    }

    return (
        <div className="auto-list">
            <AutoList autoList={autoList} itemAdded={itemAdded}/>
        </div>
    )
}

const mapStateToProps = ({autoListReducer: {autoList,loadingList,errorList},serviceReducer:{service}}) => {
    return {
        autoList,
        loadingList,
        errorList,
        service
    }
}

const mapDispatchToProps  = {
        fetchAutoList,
        itemAdded
}


export default connect(mapStateToProps,mapDispatchToProps)(AutoListContainer)

// export default withService()(connect(mapStateToProps, mapDispatchToProps)(AutoListContainer))