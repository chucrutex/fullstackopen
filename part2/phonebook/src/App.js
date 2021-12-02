import React, { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas" }
  ]);
  const [newName, setNewName] = useState("");

  // tratador do botão de adicionar nome
  const handleNewNameClick = (event) => {

    // impede refresh da página
    event.preventDefault();

    // não deixa adicionar nome vazio
    if (newName.trim && newName.trim().length <= 0)
      alert("Name must be filled");

    // se chegou aqui, é pq o nome da pessoa foi preenchido
    console.log("%cConteúdo da variável event", "color: #007acc;", event);

    let newNameTrimmed = newName.trim();

    if (persons.find(person => person.name === newNameTrimmed))
      alert(newNameTrimmed + " is already added to phonebook");
    else {

      // adiciona o nome ao array
      let newPerson = { name: newNameTrimmed };
      setPersons(persons.concat(newPerson));

      // limpa o campo do nome
      setNewName("");

    }

  };

  // tratador de edição do campo de novo nome
  const handleChangeNewName = (event) => {
    console.log("%cConteúdo da variável event.target.value", "color: #007acc;", event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleChangeNewName} value={newName} />
        </div>
        <div>
          <button type="submit" onClick={handleNewNameClick}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key={person.name}>{person.name}<br /></div>)}
    </div>
  );
};

export default App;