import React from "react";
import classes from "./Services.module.scss";

const Services = () => {
  return (
    <div id="Services" className={classes.Services}>
      <div className={classes.ServicesHeadWrapper}>
        <div className={classes.wandWrapper}></div>
        <div>
          <h2>ПОСЛУГИ</h2>
          <p>Наші учні стають нашими майстрами</p>
        </div>
      </div>
      <div className={classes.servicesCardWrapper}>
        <div className={classes.servicesCard}>
          <div className={classes.servicesCardTitle}>
            <h3>БАРБЕР</h3>
          </div>
          <div className={classes.servicesCardContent}>
            <div className={classes.servicesItem}>
              <p>СТРИЖКА</p> <p>400 ₴</p>
            </div>
            <div className={classes.servicesItem}>
              <p>КОМБО </p>
              <p>500 ₴</p>
            </div>
            <div className={classes.servicesItem}>
              <p>БОРОДА</p> <p>250 ₴</p>
            </div>
            <div className={classes.servicesItem}>
              <p>МАШИНКА</p> <p>250 ₴</p>
            </div>
            <div className={classes.servicesItem}>
              <p>ДИТЯЧА (ДО 10 РОКІВ)</p> <p>300 ₴</p>
            </div>
            <div className={classes.servicesItem}>
              <p>ГОЛІННЯ</p> <p>300 ₴</p>
            </div>
            <div className={classes.servicesItem}>
              <p>ВКЛАДАННЯ</p> <p>100 ₴</p>
            </div>
            <div className={classes.servicesItem}>
              <p>КАМУФЛЮВАННЯ</p> <p>350 - 450 ₴</p>
            </div>
            <div className={classes.servicesItem}>
              <p>СТРИЖКА МАШИНКОЮ + БОРОДА</p> <p>400 ₴</p>
            </div>
            <div className={classes.servicesItem}>
              <p>БАТЬКО + СИН</p> <p>600 ₴</p>
            </div>
          </div>
        </div>
        <div className={classes.servicesCard}>
          <div className={classes.servicesCardTitle}>
            <h3>СТАРШИЙ БАРБЕР</h3>
          </div>
          <div className={classes.servicesCardContent}>
            <div className={classes.servicesItem}>
              <p>СТРИЖКА</p> <p>450 ₴</p>
            </div>
            <div className={classes.servicesItem}>
              <p>КОМБО </p>
              <p>600 ₴</p>
            </div>
            <div className={classes.servicesItem}>
              <p>БОРОДА</p> <p>300 ₴</p>
            </div>
            <div className={classes.servicesItem}>
              <p>МАШИНКА</p> <p>300 ₴</p>
            </div>
            <div className={classes.servicesItem}>
              <p>ДИТЯЧА (ДО 10 РОКІВ)</p> <p>350 ₴</p>
            </div>
            <div className={classes.servicesItem}>
              <p>ГОЛІННЯ</p> <p>300 ₴</p>
            </div>
            <div className={classes.servicesItem}>
              <p>ВКЛАДАННЯ</p> <p>100 ₴</p>
            </div>
            <div className={classes.servicesItem}>
              <p>КАМУФЛЮВАННЯ</p> <p>350 - 450 ₴</p>
            </div>
            <div className={classes.servicesItem}>
              <p>СТРИЖКА МАШИНКОЮ + БОРОДА</p> <p>500 ₴</p>
            </div>
            <div className={classes.servicesItem}>
              <p>БАТЬКО + СИН</p> <p>700 ₴</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
