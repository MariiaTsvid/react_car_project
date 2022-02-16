import React, {Component} from 'react';
import Auxiliary from '../hoc/Auxiliary'
import Counter2 from '../Counter2/Counter2';

export default class Counter extends Component {
    //локальный state
    state = {
        counter: 0
    }

    addCounter = () => {
        //неидеальное использование state, может привести к ошибке в случае ассинхронного обращения к state
        // this.setState ({
        //     counter: this.state.counter + 1

        // })

        //правильное использование state
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render () {
        // return (
        //     <div>
        //         <h2>Counter (Лічильник) {this.state.counter} </h2>
        //         <button onClick={this.addCounter}>+</button>
        //         <button onClick={() => this.setState ({counter: this.state.counter - 1})}>-</button>
        //     </div>
        // )

        //1 способ избежать использование корневого элемента 
        //использование массива как элемент для возврата
        // return [
        //     <h2 key={'1'}> Counter (Лічильник) {this.state.counter} </h2>,
        //     <button key={'2'} onClick={this.addCounter}> + </button>,
        //     <button key={'3'} onClick={() => this.setState ({counter: this.state.counter - 1})}> - </button>
        // ]

        //2 способ избежать использование корневого элемента 
        //использование fragment 
        // return (
        //     <React.Fragment>
        //         <h2>Counter (Лічильник) {this.state.counter} </h2>
        //         <button onClick={this.addCounter}>+</button>
        //         <button onClick={() => this.setState ({counter: this.state.counter - 1})}>-</button>
        //     </React.Fragment>
        // )

        //3 способ избежать использование корневого элемента 
        //использование нового компонента Auxiliary
        return (
            <Auxiliary>
                <h2>Counter (Лічильник) {this.state.counter} </h2>
                
                {/* Так делали раньше */}               
                {/* <Counter2 clicked={this.props.clicked} /> */}

                {/* так теперь работают со вложенными компонентами */}
                {/* теперь тут не нужно передавать clicked, потому что мі его передаем напрямую из Арр.js */}
                <Counter2 />
               
                <button onClick={this.addCounter}>+</button>
                <button onClick={() => this.setState ({counter: this.state.counter - 1})}>-</button>
            </Auxiliary>
        )
        
    }
}