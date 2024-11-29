import style from './App.module.css'
import Form from './Form'
import Contact from './Contact';
import { useState } from 'react';

function App() {
  const [contacts , setContacts] = useState([])
  const [isEmpty , setEmpty] = useState(true);

  function addNewData(data) {
    if(contacts.find((contact) => contact.email === data.email || contact.number === data.number)) {
      alert("Email or number Already exists")
    }
    else {
      setContacts((prev) => [...prev , data])
      setEmpty(false)
    }
  }

  function deleteContact(contactInfo) {
    if(contacts.length === 1) {
      setEmpty(true)
    }
    setContacts(contacts.filter(contact => contact.email != contactInfo.email))
  }

  return (
    <div className={style.container}>
      <Form addNewData={addNewData} />

      {
        isEmpty ? <h1>No Contacts saved</h1> :
        contacts.map((contact , index) => (
          <Contact key={index} contact={contact} deleteContact={deleteContact} />
        ))
      }
    </div>
  )
}

export default App