import React from "react";

const withClass = (Component, className) => {
    //Можно так return (props) => { Но когда 1 параметр на входе в функцию, то можно и так:
    return props => {
        return (
            <section className = {className}>
                <Component {...props} />
            </section>
        )
    }
}

export default withClass