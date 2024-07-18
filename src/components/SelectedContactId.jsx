import { useEffect, useState } from "react";

function ContactSingle({ setSelectedContactId, selectedContactId }) {
  const [contact, setContact] = useState();
  console.log("Contact: ", contact);
  useEffect(() => {
    async function fetchSingleContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSingleContact();
  }, [selectedContactId]);
}
export default ContactSingle;