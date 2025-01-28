import React, { useState, useEffect } from 'react';
import ContactRow from '../ContactRow/ContactRow';

const dummyContacts = [
  { id: 1, name: 'R2-D2', phone: '222-222-2222', email: 'r2d2@droids.com' },
  { id: 2, name: 'C-3PO', phone: '333-333-3333', email: 'c3po@droids.com' },
  { id: 3, name: 'BB-8', phone: '888-888-8888', email: 'bb8@droids.com' },
];

function ContactList({ setSelectedContactID }) {
  //create a state variable to store the contacts
  const [contacts, setContacts] = useState(dummyContacts);

  // display something if data fetch takes a while
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    // get the data
    fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
      // convert the data to object
      .then((response) => response.json())
      // log the data and use setContacts to update the state
      .then((json) => {
        // console.log(json);
        setContacts(json);
      })
      .catch((err) => console.log(err));
    setLoading(false);
    // use empty array to run the effect only once
  }, []);
  if (loading) {
    return <h1>Just a second while we gather your data...</h1>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => {
          return (
            <ContactRow
              key={contact.id}
              contact={contact}
              setSelectedContactID={setSelectedContactID}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default ContactList;
