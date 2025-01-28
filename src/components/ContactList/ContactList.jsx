import React, { useState, useEffect } from 'react';
import ContactRow from '../ContactRow/ContactRow';
import axios from 'axios';
// - axios is a library that makes it easier to make requests to an API

function ContactList({ setSelectedContactID }) {
  //create a state variable to store the contacts
  const [contacts, setContacts] = useState([]);

  // display something if data fetch takes a while

  useEffect(() => {
    // get the data
    axios('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
      // return information is stored in array named data with other values
      .then((data) => {
        {
          // need to access data.data to get the array of contacts
          console.log(data.data);
          setContacts(data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  //check if contacts has data, if not display a message
  if (!contacts.length)
    return (
      <h1 style={{ fontSize: '100px' }}>
        Just a second while we gather your data...
      </h1>
    );

  //regular function fetch version

  // fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
  //   // convert the data to object
  //   .then((response) => response.json())
  //   // log the data and use setContacts to update the state
  //   .then((json) => {
  //     console.log(json);
  //     setContacts(json);
  //   })
  //   .catch((err) => console.log(err));
  //    setLoading(false);
  // use empty array to run the effect only once
  // }, []);
  // if (loading) {
  //   return <h1>Just a second while we gather your data...</h1>;
  // }

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
