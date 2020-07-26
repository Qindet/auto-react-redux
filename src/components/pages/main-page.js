import React, {Fragment} from "react";
import Preview from "../preview";
import PreviewContainer from "../../containers/preview-container";
import AutoList from "../auto-list";
import AutoListContainer from "../../containers/auto-list-container";

const MainPage = () => {

    return (
        <Fragment>
            <PreviewContainer />
            <AutoListContainer />
        </Fragment>
    )
}

export {
    MainPage
}