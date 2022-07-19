import React, { useEffect, Fragment } from 'react';
import { withRouter } from "react-router-dom";

function NonAuthLayout(props) {

    let state = {};
    const capitalizeFirstLetter = (string) => {
        return string.charAt(1).toUpperCase() + string.slice(2);
    };
    useEffect(() => {
        let currentage = capitalizeFirstLetter(props.location.pathname);
        document.title = currentage + " | Quran";
    }, [])
    return (
        <Fragment>
            {props.children}
        </Fragment>
    )
}

export default (withRouter(NonAuthLayout));
