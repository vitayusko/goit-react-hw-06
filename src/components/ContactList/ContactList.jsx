import React from "react";
import Contact from "./Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contact/selector";
import { selectFilter } from "../../redux/filter/selector";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className={s.contactList}>
      {filteredData.map((item) => (
        <Contact
          // key={item.id}
          // handleDeleteContact={handleDeleteContact}
          // {...item}
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
        />
      ))}
    </div>
  );
};

export default ContactList;
