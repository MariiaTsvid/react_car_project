import React, { Component } from 'react';
import './App.scss';
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter';

// так теперь работают со вложенными компонентами напрямую
export const ClickedContext = React.createContext(false)

class App extends Component {

  // //варіант 1 оголошення state
  // state = {
  //   cars: [
  //     // {name: 'Ford (Форд)', year: 2018},
  //     // {name: 'Audi (Ауді)', year: 2016},
  //     {name: 'Mazda (Мазда)', year: 2010}
  //   ],
  //   pageTitle: 'React components (Реакт компонент)',
  //   showCars: false
  // }

  //варіант 2 оголошення state
  constructor(props) {

    // console.log('Компонент App, етап життєвого циклу Constructor')

    super(props)

    this.state = {
      //для counter2
      clicked: false,

      cars: [
        {name: 'Ford (Форд)', year: 2018},
        {name: 'Audi (Ауді)', year: 2016},
        {name: 'Mazda (Мазда)', year: 2010}
      ],
      pageTitle: 'React components (Реакт компонент)',
      showCars: false
    }
  }

  //функция изменяет название странички
  //Вариант 1
  // changeTitleHandler = (newTitle) => {
  //   // console.log('Clicked!')

  //   this.setState({
  //     pageTitle: newTitle
  //   })
  // }

  //Вариант 2
  // changeTitleHandler = pageTitle => {
  //   this.setState({
  //     pageTitle
  //   })
  // }

  //функция для обработки события изменения в input поле
  // handleInput = (event) => {
  //   // console.log('Changed!', event.target.value)

  //   this.setState({
  //     pageTitle: event.target.value
  //   })
  // }

  //функция при клике на кнопку показывает или скрывает список машин
  toogleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  //функция изменяет название машины
  onChangeName(name, index) {
    // console.log('name: ', name, " index: ", index)

    const car = this.state.cars[index]
    car.name = name

    //клонируем массив
    // const cars = this.state.cars.concat()
    //в ES6 синтаксисе клонируем массив с помощью спред оператора разворачиваем массив внутри нового массива
    const cars = [...this.state.cars]

    cars[index] = car

    this.setState({
      //Вариант 1 записи ключу cars из state присваеваем значение массива cars, который мы изменили
      // cars: cars
      //Упрощенный вариант 2 делает тоже самое, присваевает массиву cars из State значение массива cars из этой функции, элемент которого мы изменили
      cars
    })
  }

  //обычнвя функция для удаления машины
  deleteHandler (index) {
    const cars = this.state.cars.concat()

    cars.splice(index, 1)

    this.setState({cars})
  }
 
  // componentWillMount() {
  //   console.log('Компонент App, 1-ий етап життєвого циклу componentWillMount')
  // }

  // componentDidMount() {
  //   console.log('Компонент App, 3-ий етап життєвого циклу componentDidMount')
  // }

  render() {

    // console.log('Компонент App, 2-ий етап життєвого циклу Render')

    const divStyle = {
      textAlign: 'center'
    }

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key = {index}>
            <Car
                name = {car.name}
                year = {car.year}

                index = {index}

                // onChangeTitle = {() => {this.changeTitleHandler(car.name)}}
                
                //если onChangeName обычная функция
                //Вариант 1
                // onChangeName = {(event) => this.onChangeName(event.target.value, index)}
                //Вариант 2, тк параметр один скобки можно не писать
                onChangeName = {event => this.onChangeName(event.target.value, index)}

                //функция для удаления машины
                onDelete = {this.deleteHandler.bind(this, index)}
              />
          </ErrorBoundary>
        )
      })
    }

    return (
      <div className="App" style={divStyle}>
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>
 
        {/* так делали раньше */}
        {/* <Counter clicked={this.state.clicked} /> */}

        {/* так теперь работают со вложенными компонентами напрямую */}
        <ClickedContext.Provider value={this.state.clicked}>
            <Counter />
        </ClickedContext.Provider>

        <hr/>

        <button 
          style={{marginTop: 20}}
          onClick={this.toogleCarsHandler}
          >Toggle cars (Перемкнути список автівок)</button>

        <button onClick={() => this.setState({clicked: true})}>
          Change clicked (Змінити на clicked)
        </button>


        {/* <input type="text" onChange={this.handleInput}/> */}

        {/* <button onClick={this.changeTitleHandler.bind(this, 'Hello!')}>Change Title</button> */}

        {/* 
        const cars = this.state.cars

        <Car 
          name={cars[0].name} 
          year={cars[0].year} 
          onChangeTitle = {this.changeTitleHandler.bind(this, cars[0].name)} />
        <Car 
          name={cars[1].name} 
          year={cars[1].year} 
          onChangeTitle = {() => {this.changeTitleHandler(cars[1].name)} } />
        <Car 
          name={cars[2].name} 
          year={cars[2].year} 
          onChangeTitle = {() => {this.changeTitleHandler(cars[2].name)} } /> */}

        {/*ревлизовываем вывод списка машин правельнее*/}
        {
          // this.state.showCars
          // ?
          //   this.state.cars.map((car, index) => {
          //     return (
          //       <Car
          //         key = {index} 
          //         name = {car.name}
          //         year = {car.year}
          //         onChangeTitle = {() => {this.changeTitleHandler(car.name)}}
          //       />
          //     )
          //   })
          // : null
        }   
          
        <div style = {{
          width: 400,
          margin: 'auto',
          paddingTop: '20px'
        }}>
          { cars }
        </div>  
      </div>
    );

    // return React.createElement(
    //    'div',
    //    {
    //      className: 'App'
    //    },
    //    React.createElement(
    //      'h1',
    //      null,
    //      'Hello world!'
    //     )
    // )
  }
}

export default App