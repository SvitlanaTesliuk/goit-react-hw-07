import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactItem}>
          {name}: {number}
          <button onClick={() => dispatch(deleteContact(id))} className={styles.button}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;