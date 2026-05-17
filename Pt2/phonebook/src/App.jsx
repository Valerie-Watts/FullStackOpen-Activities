import { useState, useEffect } from 'react'
import './index.css'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState('success')

  useEffect(() => {
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const showMessage = (text, type = 'success') => {
  setMessage(text)
  setMessageType(type)
  setTimeout(() => setMessage(null), 8000)
}

  const addPerson = (event) => {
    event.preventDefault()

    const existing = persons.find(p => p.name === newName)

    if (existing) {
  if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
    const updatedPerson = { ...existing, number: newNumber }
    personService
      .update(existing.id, updatedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(p => p.id !== existing.id ? p : returnedPerson))
        showMessage(`Updated ${returnedPerson.name}`)
        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        if (error.response && error.response.data.error) {
          showMessage(error.response.data.error, 'error')
        } else {
          showMessage(`${existing.name} was already removed from server`, 'error')
          setPersons(persons.filter(p => p.id !== existing.id))
        }
      })
  }
  return
}

    const personObject = { name: newName, number: newNumber }

    personService.create(personObject)
  .then(returnedPerson => {
    setPersons(persons.concat(returnedPerson))
    showMessage(`Added ${returnedPerson.name}`)
    setNewName('')
    setNewNumber('')
  })
  .catch(error => {
  console.log(error)
  console.log(error.response)
  showMessage(error.response.data.error, 'error')
})
  }

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.remove(id).then(() => {
        setPersons(persons.filter(p => p.id !== id))
        showMessage(`Deleted ${name}`)
      })
    }
  }

  const personsToShow = filter
    ? persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  return (
    <div>
      <h2>Phonebook</h2>

    
      <Notification message={message} type={messageType} />

      <Filter filter={filter} onFilterChange={e => setFilter(e.target.value)} />

      <h3>Add a new</h3>

      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        onNameChange={e => setNewName(e.target.value)}
        newNumber={newNumber}
        onNumberChange={e => setNewNumber(e.target.value)}
      />

      <h3>Numbers</h3>

      <Persons persons={personsToShow} onDelete={deletePerson} />
    </div>
  )
}

export default App