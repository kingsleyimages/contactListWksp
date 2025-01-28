import axios from 'axios';
import React, { useState, useEffect } from 'react';

function SelectedContact({ selectedContactID, setSelectedContactID }) {
  const [contact, setContact] = useState(null);
  useState(() => {
    axios(
      `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactID}`
    ).then((data) => {
      console.log(data.data);
      setContact(data.data);
    });
  }, []);
  //check if contacts has data, if not display a message
  if (!contact)
    return (
      <h1 style={{ fontSize: '100px' }}>
        Just a second while we gather your data...
      </h1>
    );

  return (
    <div>
      {/* get data and use ? to check if the data is available before trying to access it */}
      <h2>{contact?.name}</h2>
      <p>Company: {contact?.company?.name}</p>
      <p>
        Address: {contact?.address?.street} {contact?.address?.suite}
        use braces to access the object properties or add spaces and punctuation
        as needed
        {contact?.address?.city}
        {', '}
        {contact?.address?.zipcode}
      </p>
      <p>Email: {contact?.email}</p>
      <p>Phone: {contact?.phone}</p>
      <p>Username: {contact?.username}</p>
      <p>URL: {contact?.website}</p>
      <p></p>
      {/* return to the contact list */}
      <button onClick={() => setSelectedContactID(null)}>Back</button>
    </div>
  );
}

export default SelectedContact;
