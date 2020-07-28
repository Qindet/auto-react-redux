import React, {useEffect} from "react";
import {connect} from "react-redux";

import withService from "../components/hoc/with-service";
import {fetchAutoList, itemAdded} from "../actions";
import AutoList from "../components/auto-list";
import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error-indicator";
import compose from "../utils";

const AutoListContainer = ({autoList, loadingList, errorList, fetchAuto, itemAdded}) => {
    useEffect(() => {
        fetchAuto()
    }, [fetchAuto])

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

const mapStateToProps = ({autoListReducer: {autoList,loadingList,errorList}}) => {
    return {
        autoList,
        loadingList,
        errorList
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {autoService} = ownProps
    return {
        fetchAuto: fetchAutoList(autoService, dispatch),
        itemAdded: (item) => dispatch(itemAdded(item))
    }
}


export default compose(withService(), connect(mapStateToProps,mapDispatchToProps))(AutoListContainer)

// export default withService()(connect(mapStateToProps, mapDispatchToProps)(AutoListContainer))