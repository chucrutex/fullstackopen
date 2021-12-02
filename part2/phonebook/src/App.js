import React, { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const validateFields = (newName, newNumber) => {

    // não deixa adicionar nome vazio
    if (newName.trim && newName.trim().length <= 0) {
      alert("Name must be filled");
      return false;
    }

    // não deixa adicionar número vazio
    if (newNumber.trim && newNumber.trim().length <= 0) {
      alert("Number must be filled");
      return false;
    }

    return true;

  };

  // tratador do botão de adicionar nome
  const handleNewNameClick = (event) => {

    // impede refresh da página
    event.preventDefault();

    // não deixa adicionar campos vazios
    if (!validateFields(newName, newNumber))
      return;

    // se chegou aqui, é pq os campos estão válidos
    console.log("%cConteúdo da variável event", "color: #007acc;", event);

    // arruma os espaços sobressalentes
    let newNameTrimmed = newName.trim();
    let newNumberTrimmed = newNumber.trim();

    if (persons.find(person => person.name === newNameTrimmed))
      alert(newNameTrimmed + " is already added to phonebook");
    else {

      // adiciona o nome ao array
      let newPerson = { name: newNameTrimmed, number: newNumberTrimmed };
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    }

  };

  // tratador de edição do campo de novo nome
  const handleChangeNewName = (event) => {
    console.log("%cConteúdo da variável event.target.value", "color: #007acc;", event.target.value);
    setNewName(event.target.value);
  };

  const handleChangeNewNumber = (event) => {
    console.log("%cConteúdo da variável event.target.value", "color: #007acc;", event.target.value);
    setNewNumber(event.target.value);
  };

  return (

    <div>
      <h2>Phonebook</h2>
      <form>
        <div>name: <input onChange={handleChangeNewName} value={newName} /></div>
        <div>number: <input onChange={handleChangeNewNumber} value={newNumber} /></div>
        <div><button type="submit" onClick={handleNewNameClick}>add</button></div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key={person.name}>{person.name} {person.number}<br /></div>)}
    </div>
  );
};

export default App;