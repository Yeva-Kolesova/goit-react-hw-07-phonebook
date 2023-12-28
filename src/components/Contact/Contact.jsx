export const Contact = ({ id, name, phone, onDeleteContact }) => {
  return (
    <li>
      <p>
        {name}: {phone}
      </p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};
