import React from "react";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import s from "./ContactList.module.css";

const Contact = () => {
    const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <div className={s.wrapperText}>
        <span className={s.text}>
          <FaUser /> {name}
        </span>
        <span className={s.text}>
          <FaPhoneAlt /> {number}
        </span>
      </div>
      <button className={s.btn} onClick={()=>dispatch{item.id}}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
