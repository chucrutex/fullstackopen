import React, { useState } from "react"

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {

  // useState retorna um objeto com um campo numérico e uma função que recebe um número
  // que dispara a atualização do estado
  // além disso, o counter é inicializado com o valor passado para useState
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  console.log("rendering...", counter);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={decreaseByOne} text="minus" />
      <Button onClick={setToZero} text="zero" />
    </div>);

};

export default App;