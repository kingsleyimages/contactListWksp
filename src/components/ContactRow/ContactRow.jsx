import React from 'react';
// output a row for each contact

// braces in the function declaration are to deconsturct the props object so we can use the properties directly
function ContactRow({ setSelectedContactId, contact }) {
  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
      }}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}

export default ContactRow;
