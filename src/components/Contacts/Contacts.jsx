import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/operations';
import { selectContacts, selectFilter } from 'store/selector';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
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
