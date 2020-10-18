import React from "react";

function Conditional(props) {
    if(props.isLoading === true) {
        return (
            <h1>Loading...</h1>
        )
    }
    else {
        return (
            props.toShow
        )
    }
}

export default Conditional