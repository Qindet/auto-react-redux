import React, {Fragment} from "react";

import PreviewContainer from "../../containers/preview-container";

import AutoListContainer from "../../containers/auto-list-container";
import AutoItemDetails from "../auto-item-details";

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