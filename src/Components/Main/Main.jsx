import React from "react";
import MainTitle from "./MainTitle/MainTitle";
import classes from "./Main.module.scss";
import AboutUs from "./AboutUs/AboutUs";
import Services from "./Services/Services";
import Masters from "./Masters/Masters";
import Gallery from "./Gallery/Gallery";
import Contacts from "../Contacts/Contacts";

const Main = () => {
  return (
    <div className={classes.main}>
      <MainTitle />
      <AboutUs />
      <Services />
      <Masters />
      <Gallery />
      <Contacts />
    </div>
  );
};

export default Main;
