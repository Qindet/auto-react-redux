import React from "react";
import {Consumer} from "../auto-service-context/auto-service-context";

const withService = () => (Wrapped) => {
    return (props) => {
        return (
            <Consumer>
                {
                    (autoService) => {
                        return <Wrapped {...props} autoService={autoService}/>
                    }
                }
            </Consumer>
        )
    }
}

export default withService