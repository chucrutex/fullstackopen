import React, { useState } from "react";

const History = (props) => {

  // o componente mostra um texto de instrução no estado inicial
  if (props.allClicks.length === 0)
    return (
      <td colSpan="6">the app is used by pressing the buttons</td>
    );

  // o componente mostra um texto com os cliques que já foram dados,
  // se não mais estiver no estado inicial
  return (
    <td colSpan="6">button press history: {props.allClicks.join(" ")}</td>
  );

};

const MultiValue = (props) => {

  // o componente mostra um texto com o valor clicado dos botões seguintes
  return (
    <td colSpan="3">{props.value}</td>
  );

};

const Button = (props) => {

  return (
    <td>
      <p>{props.value}</p>
      <p><button onClick={props.onClick}>{props.text}</button></p>
    </td>
  );

};

const App = () => {

  // armazena estado de quando esquerda for clicado
  const [left, setLeft] = useState(0);

  // armazena estado de quando direita for clicado
  const [right, setRight] = useState(0);

  const [value, setValue] = useState(10);

  // armazena todos os estados de clique, inicializando com um array vazio
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    // guarda o array anterior com "L" ao final
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    // guarda o array anterior com "R" ao final
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  const handleResetAll = () => {
    // reseta ambos os lados
    setLeft(0);
    setRight(0);
    setAll([]);
  };

  // ATENÇÃO!!! este trecho retorna uma função
  const hello = (who) => () => console.log("Hello", who);

  // preenche o estado com o valor recebido
  const setToValue = (newValue) => setValue(newValue);

  // haverá os 2 botões com seus respectivos contadores 
  return (
    <div>
      <table border="1">
        <tbody>
          <tr align="center">
            <Button value={left} onClick={handleLeftClick} text="left" />
            <Button value={right} onClick={handleRightClick} text="right" />
            <Button value="will reset the state of the app" onClick={handleResetAll} text="reset" />
            <Button value="will say hello world on the console" onClick={hello("world")} text="hello" />
            <Button value="will say hello react on the console" onClick={hello("react")} text="hello" />
            <Button value="will say hello function on the console" onClick={hello("function")} text="hello" />
          </tr>
          <tr align="center">
            <History allClicks={allClicks} />
          </tr>
        </tbody>
      </table >
      <p />
      <table border="1">
        <tbody>
          <tr align="center">
            <MultiValue value={value} />
          </tr>
          <tr align="center">
            <Button value="will set the value to 1000" onClick={()=>setToValue(1000)} text="thousand" />
            <Button value="will reset the value" onClick={()=>setToValue(0)} text="reset" />
            <Button value="will increment the value" onClick={()=>setToValue(value + 1)} text="increment" />
          </tr>
        </tbody>
      </table >
    </div >
  );
};

export default App;