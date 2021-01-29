import React, { useState, useEffect } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import NotificationSuccess from "./components/NotificationSuccess";
import NotificationError from "./components/NotificationError";
import phoneBookService from "./components/services/phoneBook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    phoneBookService.getAll().then((initialPhoneBook) => {
      setPersons(initialPhoneBook);
    });
  }, []);

  const results =
    searchTerm === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    const isExist = persons
      .map((person) => person.name.toLowerCase())
      .includes(nameObject.name.toLowerCase());

    if (!isExist) {
      phoneBookService.create(nameObject)
      .then((response) => {
        setPersons(persons.concat(response));
        setSuccessMessage(`Add ${nameObject.name}`);
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
        setNewName("");
        setNewNumber("");
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      });
    } else {
      const contact = persons.filter(
        (person) => person.name.toLowerCase() === nameObject.name.toLowerCase()
      )[0];

      const confirmUpdate = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );
      if (confirmUpdate) {
        phoneBookService
          .update(contact.id, { ...nameObject, id: contact.id })
          .then((response) => {
            setPersons(
              persons.map((person) =>
                person.id === contact.id
                  ? { ...nameObject, id: response.id }
                  : person
              )
            );
            setSuccessMessage(`Update ${nameObject.name}`);
            setTimeout(() => {
              setSuccessMessage("");
            }, 5000);
          })
          .catch((err) => {
            setErrorMessage(
              `Information of ${nameObject.name} has already been remove from server`
            );
            setTimeout(() => {
              setErrorMessage("");
            }, 5000);
          });
      }
      setNewName("");
      setNewNumber("");
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleDelete = (id) => {
    const person = persons.find((p) => p.id === id);

    const confirmDelete = window.confirm(`Delete ${person.name}?`);

    if (confirmDelete) {
      phoneBookService.deleted(id).then(() => {
        const filteredPersons = persons.filter((person) => person.id !== id);
        setPersons(filteredPersons);
        setSuccessMessage(
          `Information of ${person.name} has been removed from the server`
        );
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <NotificationSuccess message={successMessage} />
      <NotificationError message={errorMessage} />
      <Filter searchTerm={searchTerm} handleChange={handleChange} />
      <h3>add a new</h3>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumChange={handleNumChange}
      />
      <h3>Numbers</h3>
      <Persons
        persons={persons}
        results={results}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
