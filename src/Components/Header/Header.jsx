import React from "react";
import classes from "./Header.module.scss";
import Logo from "../../Icons/Logo.png";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logoBlock}>
        <img className={classes.Logo} src={Logo} alt="logo" />
        <div className={classes.logoBlockTextWrapper}>
          <p className={classes.logoBlockText}>Кращий барбершоп країни</p>
        </div>
      </div>
      <nav className={classes.navLinks}>
        <a href="#AboutUs" className={classes.navLink}>
          Про нас
        </a>
        <a href="#Services" className={classes.navLink}>
          Послуги
        </a>
        <a href="#Masters" className={classes.navLink}>
          Майстри
        </a>
        <a href="#Gallery" className={classes.navLink}>
          Фото
        </a>
        <a href="#Contacts" className={classes.navLink}>
          Контакти
        </a>
      </nav>
      <div className={classes.navContacts}>
        <p className={classes.contactNumber}> +380 (63) 546 70 20 </p>
        <p>Передзвонити мені</p>
      </div>
    </header>
  );
};

export default Header;
