import React, {Fragment} from "react";

import PreviewContainer from "../../containers/preview-container";

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