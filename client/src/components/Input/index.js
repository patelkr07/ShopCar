import React from "react";

function Input(props) {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}} className="input-group input-group-lg">
            <input className="form-control" type="text" {...props} />
        </div>
    );
}

export default Input;