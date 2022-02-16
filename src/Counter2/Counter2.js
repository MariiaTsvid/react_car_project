import React from "react";
import { ClickedContext } from "../App";

export default props => {
    return (
        <div style={{
            border: '1px solid #ccc',
            width: 200,
            margin: 'auto'
        }}>
            <h3>Counter 2</h3>

            {/* Так делали раньше */}
            {/* {props.clicked ? <p>Clicked (Натиснуто)</p> : null} */}

            {/* Так делают теперь */}
            <ClickedContext.Consumer>
                {clicked => clicked ? <p>Clicked</p> : null}
            </ClickedContext.Consumer>
        </div>
    )
}