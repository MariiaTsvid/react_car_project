import React from "react"
// import Radium from "radium"
// import './Car.css'
import classes from "../Car/Car.module.css"
import PropTypes, { number } from "prop-types"
import withClass from "../hoc/withClass"

//создаем реакт-компонент Car
class Car extends React.Component {

    // componentWillReceiveProps(nextProps) {
    //     console.log('Компонент Car, етап життєвого циклу componentWillReceiveProps, nextProps = ',nextProps)
    // }

    //цей життєвий цикл використовується для оптимізації. Завжди повертає true або false
    // shouldComponentUpdate(nextProps, nextState) {
    //    // //console.log('Компонент Car, етап життєвого циклу shouldComponentUpdate, nextProps = ',nextProps,', nextState = ',nextState)
    //    // //метод trim() используется для удаления лишних пробелов
    //     return nextProps.name.trim() !== this.props.name
    // }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log('Компонент Car, етап життєвого циклу componentWillUpdate, nextProps = ',nextProps,', nextState = ',nextState)
    // } 

    // //Замена componentWillUpdate в новых версиях реакт 16.3+
    // static getDerivedStateFromProps (nextProps, prevState) {
    //     console.log ('Компонент Car, етап життєвого циклу getDerivedStateFromProps, nextProps = ',nextProps,', prevState = ',prevState )
    
    //     return prevState
    // }

    // getSnapshotBeforeUpdate () {
    //     console.log('Компонент Car, етап життєвого циклу getSnapshotBeforeUpdate')
    // }

    // componentDidUpdate() {
    //     console.log('Компонент Car, етап життєвого циклу componentDidUpdate')
    // }

    // componentWillUnmount() {
    //     console.log('Компонент Car, етап життєвого циклу componentWillUnmount')    
    // }

    //Cтарый способ задания и использования референций
    // componentDidMount() {
    //     //ставим фокус на 2-ой инпут 
    //     if (this.props.index === 1) 
    //     {
    //         this.inputRef.focus()
    //     }
    // }

    //новый способ задания референций
    constructor(props) {
        //метод super, чтобы всё работало, и чтобы он также отработал с методом конмтруктора
        super(props)
        this.inputRef = React.createRef()
    }
    componentDidMount() {
        //ставим фокус на 2-ой инпут 
        if (this.props.index === 1) 
        {
            this.inputRef.current.focus()
        }
    }


    render () {
        //console.log('Компонент Car, етап життєвого циклу Render')

        //имитация ошибки для проверки работы errorBoundary
        // if (Math.random() > 0.7) {
        //     throw new Error('Car random failed')
        // }

        //обьявляем массив
        // const inputClasses = ['input']

        // if (this.props.name !== '') {
        //     //добавляем в массив к имени класса подкласс, таким образлм если поля ввода будет не пустым, то применяться стили класса input green
        //     inputClasses.push('green')
        // }
        // else {
        //     inputClasses.push('red')
        // }

        // if (this.props.name.length >= 13)
        // {
        //     inputClasses.push('bold')
        // }

        // const style = {
        //     border: '1px solid #ccc',
        //     boxShadow: '0 4px 5px 0 rgba(0, 0, 0 , 0.14)',
        //     ':hover': {
        //         border:'1px solid #aaa',
        //         boxShadow: '0 4px 15px 0 rgba(0,0,0,0.25)',
        //         background: 'yellow'
        //     }
        // }

        // return (
        //     <div className="Car" style={style}>
        //         <h3>Car name (Назва автівки): {this.props.name} </h3>
        //         <p> Year (Рік): <strong>{this.props.year}</strong></p>
        //         <input 
        //             type="text" 
        //             onChange = {this.props.onChangeName} 
        //             value = {this.props.name}
        //             className={inputClasses.join(' ')}
        //         />
        //         {/* <button onClick={props.onChangeTitle}>Click</button> */}
        //         <button onClick={this.props.onDelete}> Delete (Видалити цю автівку)</button>
        //     </div>
        // )

        //переименовали Car.css в Car.module.scss
        

        //Корректно, но ниже мы избавляемся от div в пользу Fragment 
        //А для обвертки будем использовать HOC (High Order Component) withClass
        // return (
        //     <div className={classes.Car}>
        //         <h3>Car name (Назва автівки): {this.props.name} </h3>
        //         <p> Year (Рік): <strong>{this.props.year}</strong></p>
        //         <input 
        //             type="text" 
        //             onChange = {this.props.onChangeName} 
        //             value = {this.props.name}
        //             className={inputClasses.join(' ')}
        //         />
        //         <button onClick={this.props.onDelete}> Delete (Видалити цю автівку)</button>
        //     </div>
        // )

        const inputClasses = [classes.input]
        console.log('classes: ', [classes.input])

        if (this.props.name !== '') {
            //добавляем в массив к имени класса подкласс, таким образлм если поля ввода будет не пустым, то применяться стили класса input green
            inputClasses.push(classes.green)
        }
        else {
            inputClasses.push(classes.red)
        }

        if (this.props.name.length >= 13)
        {
            inputClasses.push(classes.bold)
        }


        console.log('inputClasses: ', inputClasses)

        //Используем Fragment и HOC withClass для обвертки
        return (
            <React.Fragment>
                <h3>Car name (Назва автівки): {this.props.name} </h3>
                <p> Year (Рік): <strong>{this.props.year}</strong></p>
                <input 
                    //Cтарый способ задания и использования референций
                    // ref = {(inputRef) => this.inputRef = inputRef}
                    
                    //Новый способ задания и использования референций
                    ref = {this.inputRef}

                    type = "text" 
                    onChange = {this.props.onChangeName} 
                    value = {this.props.name}
                    className = {inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}> Delete (Видалити цю автівку)</button>
            </React.Fragment>
        )
    }
}

// Обычная функция, для создания компонентов, почти не используется
// function Car() {
//     return (
//         <h2>This is car component</h2>
//     )
// }

// Стрелочная функция синтаксис ES 6, результат точно такой же как у предыдущей
// const car = () => {
//     return (
//         <div>This is car component</div>
//     )    
// }

//такая запись еще короче, результат точно такой же как у предыдущей
// const car = () => <div>This is car component</div>

//если нужно вернуть более 1 строки, то заключаем их в круглые скобки
// const car = () => (
// <div>
//     This is car component
//     <strong>test</strong>
// </div>
// )

// export default car

// то же, что мы делали выше, но без использования константы, просто сразу возвращаем результат работы стрелочной функции
// export default () => (
//     <div>
//         This is car component
//         <strong>test</strong>
//     </div>
// )

// Правильное написание, но ниже более частое, т.к. чаще всего на входе мы получаем только 1 обект props, то круглые скобки можно убрать, см. ниже
// export default (props) => (
//     <div>
//         <h3>Car name: {props.name} </h3>
//         <p>Year: <strong>{props.year}</strong></p>
//     </div>
// )

// компонент, который по умолчанию возвращает некоторый jsx-код = 1 машину 
// export default props => (
//     <div className="Car"
//     //inline-стили
//     // style = {{
//         // border: '1px solid #ccc',
//         // margin: '10px',
//         // // display: 'inline-block',
//         // padding:'10px',
//         // boxShadow: '0 4px 5px 0 rgba(0, 0, 0 , 0.14)',
//         // borderRadius: '5px'
//     // }}
//     >
//         <h3>Car name: {props.name} </h3>
//         <p> Year: <strong>{props.year}</strong></p>
//         <input type="text" onChange = {props.onChangeName} value = {props.name}/>
//         {/* <button onClick={props.onChangeTitle}>Click</button> */}
//         <button onClick={props.onDelete}>Delete</button>
//     </div>
// )

//работа с динамическими классами, валидация input
// export default props => {
//     //обьявляем массив
//     const inputClasses = ['input']

//     if (props.name !== '') {
//         //добавляем в массив к имени класса подкласс, таким образлм если поля ввода будет не пустым, то применяться стили класса input green
//         inputClasses.push('green')
//     }
//     else {
//         inputClasses.push('red')
//     }

//     if (props.name.length >= 13)
//     {
//         inputClasses.push('bold')
//     }

//     const style = {
//         border: '1px solid #ccc',
//         boxShadow: '0 4px 5px 0 rgba(0, 0, 0 , 0.14)'
//     }

//     return (
//         <div className="Car" style={style}>
//             <h3>Car name (Назва автівки): {props.name} </h3>
//             <p> Year (Рік): <strong>{props.year}</strong></p>
//             <input 
//                 type="text" 
//                 onChange = {props.onChangeName} 
//                 value = {props.name}
//                 className={inputClasses.join(' ')}
//             />
//             {/* <button onClick={props.onChangeTitle}>Click</button> */}
//             <button onClick={props.onDelete}> Delete (Видалити цю автівку)</button>
//         </div>
//     )
// }

//работа с инлайнстилями и пакетом radium
// const Car = props => {
//     //обьявляем массив
//     const inputClasses = ['input']

//     if (props.name !== '') {
//         //добавляем в массив к имени класса подкласс, таким образлм если поля ввода будет не пустым, то применяться стили класса input green
//         inputClasses.push('green')
//     }
//     else {
//         inputClasses.push('red')
//     }

//     if (props.name.length >= 13)
//     {
//         inputClasses.push('bold')
//     }

//     const style = {
//         border: '1px solid #ccc',
//         boxShadow: '0 4px 5px 0 rgba(0, 0, 0 , 0.14)',
//         ':hover': {
//             border:'1px solid #aaa',
//             boxShadow: '0 4px 15px 0 rgba(0,0,0,0.25)'
//         }
//     }

//     return (
//         <div className="Car" style={style}>
//             <h3>Car name (Назва автівки): {props.name} </h3>
//             <p> Year (Рік): <strong>{props.year}</strong></p>
//             <input 
//                 type="text" 
//                 onChange = {props.onChangeName} 
//                 value = {props.name}
//                 className={inputClasses.join(' ')}
//             />
//             {/* <button onClick={props.onChangeTitle}>Click</button> */}
//             <button onClick={props.onDelete}> Delete (Видалити цю автівку)</button>
//         </div>
//     )
// }

// export default Radium(Car) 

// export default Car

//Валідація
Car.propTypes = {
    // обязательное для нас поле на входе проверяем на наличие isRequired
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    index: number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}

// пример использoвания HOC withClass для обвeртки компонента Car
export default withClass(Car, classes.Car)