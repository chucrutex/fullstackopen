import React, { useState } from "react";

const History = (props) => {

  // o componente mostra um texto de instrução no estado inicial
  if (props.allClicks.length === 0)
    return (
      <td colSpan="3">the app is used by pressing the buttons</td>
    );

  // o componente mostra um texto com os cliques que já foram dados,
  // se não mais estiver no estado inicial
  return (
    <td colSpan="3">button press history: {props.allClicks.join(" ")}</td>
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


  // haverá os 2 botões com seus respectivos contadores 
  return (
    <div>
      <table border="1">
        <tbody>
          <tr align="center">
            <Button value={left} onClick={handleLeftClick} text="left" />
            <Button value={right} onClick={handleRightClick} text="right" />
            <Button value="" onClick={handleResetAll} text="reset" />
          </tr>
          <tr align="center">
            <History allClicks={allClicks} />
          </tr>
        </tbody>
      </table >
    </div >
  );
};

export default App;