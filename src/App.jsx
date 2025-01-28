import { useState } from 'react';
import ContactList from './components/ContactList/ContactList';

function App() {
  const [selectedContactID, setSelectedContactID] = useState(null);

  return (
    <>
      {
        // if selectedContactID is not null, display contact details
        selectedContactID ? (
          <div>Selected Contact View</div>
        ) : (
          <h2>Contact List</h2>
        )
      }

      <ContactList setSelectedContactID={setSelectedContactID} />
    </>
  );
}

export default App;
