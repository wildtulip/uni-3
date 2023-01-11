import React from "react";
import classes from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div className={classes.contacts}>
      <div id="Contacts" className={classes.contactsHeadWrapper}>
        <div className={classes.wandWrapper}></div>
        <div>
          <h2>КОНТАКТИ</h2>
          <p>Професіоналів, які живуть своєю справою</p>
        </div>
      </div>
      <div className={classes.contactsContentWrapper}>
        <div className={classes.contactsContent}>
          <div className={classes.contactsContentTitle}>
            <div className={classes.wandShortWrapper}></div>
            <h3> АДРЕСА</h3>
          </div>
          <p className={classes.contactsContentText}>
            Поскот, вул. Академіка Сахарова 36
          </p>
        </div>
        <div className={classes.contactsContent}>
          <div className={classes.contactsContentTitle}>
            <div className={classes.wandShortWrapper}></div>
            <h3> ТЕЛЕФОН:</h3>
          </div>
          <p className={classes.contactsContentText}>+380 (63) 546 70 20</p>
        </div>
        <div className={classes.contactsContent}>
          <div className={classes.contactsContentTitle}>
            <div className={classes.wandShortWrapper}></div>
            <h3> РОБОЧИЙ ЧАС:</h3>
          </div>
          <p className={classes.contactsContentText}>Щодня: з 9-00 до 21-00</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
