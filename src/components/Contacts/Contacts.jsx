import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/operations';
import { selectContacts, selectFilter } from 'store/selector';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};


const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterText = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterText.toLowerCase())
    );
  };

  return (
    <>
      <ul>
        {getFilteredContacts().map(contact => (
          <Contact
            key={contact.id}
            {...contact}
            onDeleteContact={handleDeleteContact}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
