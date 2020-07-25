import React, {useEffect, useState} from "react";
import './preview.css'
import AutoService from "../../services/auto-service";

const Preview = () => {
    const [item,setItem] = useState({})
    const AutoService = new AutoService()
    useEffect(() => {
        setItem(AutoService.getPreviewBmw())
    },[])

    return (
        <div>
            <div className="preview-img">
                <img src={item.img} alt="img"/>
            </div>
        </div>
    )
}

export default Preview