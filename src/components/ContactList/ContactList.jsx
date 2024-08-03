import React from "react";
import Contact from "./Contact";
import s from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectorContacts } from "../../redux/contact/selector";

const ContactList = () => {
  const contacts = useSelector(selectorContacts);
  // const dispatch = useDispatch();
  return (
    <div className={s.contactList}>
      {contacts.map((item) => (
        <Contact
          key={item.id}
          handleDeleteContact={handleDeleteContact}
          {...item}
        />
      ))}
    </div>
  );
};

export default ContactList;
