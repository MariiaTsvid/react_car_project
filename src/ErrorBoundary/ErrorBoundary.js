import React from "react";

export default class ErrorBoundary extends React.Component {

    //локальный state, где мы будем хранить информацию об ошибках
    state = {
        hasError: false
    }

    componentDidCatch (error, info) {
        this.setState({hasError: true})
    }

    render () {
        if (this.state.hasError) {
            return <h1 style={{color: 'red'}}>Somthing went wrong! Щось пішло не так!</h1>
        }

        return this.props.children
    }
}