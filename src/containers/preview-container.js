import React, {useEffect, useState} from "react";
import withService from "../components/hoc/with-service";
import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error-indicator";
import Preview from "../components/preview/preview";

const PreviewContainer = ({autoService}) => {
    const [item,setItem] = useState({})
    const [itemLoading,setItemLoading] = useState(true)
    const [itemError,setItemError] = useState(false)
    const [showInfo,setShowInfo] = useState(false)
    useEffect(() => {
        setItemLoading(true)
        autoService.getPreview()
            .then((item) => {
                setItem(item)
                setItemLoading(false)
            })
            .catch(() => setItemError(true))
    },[autoService])
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

export default withService()(PreviewContainer)