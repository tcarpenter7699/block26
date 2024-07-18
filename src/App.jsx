import { useState } from "react";
import ContactList from "./components/ContactList";
import ContactSingle from "./components/SelectedContactId";

function App() {
  const [selectedContact, setSelectedContact] = useState();
  const [isContactSelected, setIsContactSelected] = useState(false);

  const rowClick = (contact) => {
    setSelectedContact(contact);
    setIsContactSelected(true);
  };

  const buttonClick = () => {
    setIsContactSelected(false);
  };

  return (
    <div>
      {isContactSelected ? (
        <>
          <h2>Selected Contact Details</h2>
          <p>Name: {selectedContact.name}</p>
          <p>Username: {selectedContact.username}</p>
          <p>Email: {selectedContact.email}</p>
          <ContactSingle
            setSelectedContactId={setSelectedContact}
            selectedContactId={selectedContact.id}
          />
        </>
      ) : (
        <ContactList setSelectedContactId={rowClick} />
      )}
      <button className="but" onClick={buttonClick}>
        Show All Contacts
      </button>
    </div>
  );
}
export default App;