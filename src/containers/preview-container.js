import React, {useEffect, useState} from "react";
import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error-indicator";
import Preview from "../components/preview/preview";
import {connect} from "react-redux";

const PreviewContainer = ({service}) => {
    const [item,setItem] = useState({})
    const [itemLoading,setItemLoading] = useState(true)
    const [itemError,setItemError] = useState(false)
    const [showInfo,setShowInfo] = useState(false)
    useEffect(() => {
        setItemLoading(true)
        service.getPreview()
            .then((item) => {
                setItem(item)
                setItemLoading(false)
            })
            .catch(() => setItemError(true))
    },[service])
    if (itemLoading) {
        return <Spinner/>
    }

    if (itemError) {
        return <ErrorIndicator/>
    }
    const onAddClass = () => {
        setShowInfo((s) => !s)
    }
    return <Preview item={item} showInfo={showInfo} onAddClass={onAddClass}/>
}

const mapStateToProps = ({serviceReducer:{service}}) => {
    return {
        service
    }
}

export default connect(mapStateToProps)(PreviewContainer)