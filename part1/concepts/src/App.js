import React, { useState } from "react";

const App = () => {

  // armazena estado de quando esquerda for clicado
  const [left, setLeft] = useState(0);

  // armazena estado de quando direita for clicado
  const [right, setRight] = useState(0);

  // armazena todos os estados de clique, inicializando com um array vazio
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    // guarda o array anterior com "L" ao final
    setAll(allClicks.concat("L"))
    setLeft(left + 1)
  };

  const handleRightClick = () => {
    // guarda o array anterior com "R" ao final
    setAll(allClicks.concat("R"))
    setRight(right + 1)
  };


  // haverá os 2 botões com seus respectivos contadores 
  return (
    <div>
      <table border="1">
        <tr align="center"><td>{left}</td><td> {right}</td></tr>
        <tr align="center"><td><button onClick={handleLeftClick}>left</button></td><td> <button onClick={handleRightClick}>right</button></td></tr>
        <tr align="center"><td colSpan="2">{allClicks.join(" ")}</td></tr>
      </table>
    </div>
  );
};

export default App;