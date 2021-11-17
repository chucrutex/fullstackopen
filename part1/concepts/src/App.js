import React from "react";

const Hello = ({name, age}) => {

  // recupera o ano da data corrente
  // retorna a diferença do ano corrente e a idade 
  // para tentar adivinhar o ano de nascimento da pessoa
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  );
}

const App = () => {
  const name = "Peter"
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  );
}

export default App;