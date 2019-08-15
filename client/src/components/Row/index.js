import React from "react";

// function Row(props) {
//     return <div className={`row${props.fluid ? "-fluid" : ""}`} {...props} />;
// }

function Row(props) {
    return <div style={{display: 'flex', justifyContent: 'center'}} className={`row${props.fluid ? "-fluid" : ""}`} {...props} />;
}


export default Row;