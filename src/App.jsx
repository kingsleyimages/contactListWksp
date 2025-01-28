import { useState } from 'react';
import ContactList from './components/ContactList/ContactList';
import SelectedContact from './components/SelectedContact/SelectedContact';
function App() {
  const [selectedContactID, setSelectedContactID] = useState(null);

  return (
    <>
      {
        // if selectedContactID is not null, display contact details
        selectedContactID ? (
          // send the setSelectedContactID and selectedContactID to the SelectedContact component so we can reset it to null when the user clicks the back button
          <SelectedContact
            selectedContactID={selectedContactID}
            setSelectedContactID={setSelectedContactID}
          />
        ) : (
          <ContactList setSelectedContactID={setSelectedContactID} />
        )
      }
    </>
  );
}

export default App;
