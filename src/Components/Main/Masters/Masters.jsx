import React from "react";
import classes from "./Masters.module.scss";
import Master1 from "../../../Icons/Master1.png";
import Master2 from "../../../Icons/Master2.png";
import Master3 from "../../../Icons/Master3.png";
import Master4 from "../../../Icons/Master4.png";
import Master5 from "../../../Icons/Master5.png";
import Master6 from "../../../Icons/Master6.png";
import Master7 from "../../../Icons/Master7.png";
import Master8 from "../../../Icons/Master8.png";

const Masters = () => {
  return (
    <div id="Masters" className={classes.MastersWrapper}>
      <div className={classes.MastersHeadWrapper}>
        <div className={classes.wandWrapper}></div>
        <div>
          <h2>МАЙСТРИ</h2>
          <p>Середній досвід роботи наших майстрів - 3 роки</p>
        </div>
      </div>
      <div className={classes.mastersCard}>
        <a
          href="https://b65577.alteg.io/company/82007/menu?o=m387732"
          className={classes.mastersItem}
        >
          <img src={Master1} alt="Master1" />
          <div className={classes.mastersItemText}>
            <h3>КРИКЕТ</h3>
            <p>БАРБЕР</p>
          </div>
        </a>
        <a
          href="https://b65577.alteg.io/company/82007/menu?o=m1195626"
          className={classes.mastersItem}
        >
          <img src={Master2} alt="Master2" />
          <div className={classes.mastersItemText}>
            <h3>ВАДИМ</h3>
            <p>СТАРШИЙ БАРБЕР</p>
          </div>
        </a>
        <a
          href="https://b65577.alteg.io/company/82007/menu?o=m2091670"
          className={classes.mastersItem}
        >
          <img src={Master3} alt="Master3" />
          <div className={classes.mastersItemText}>
            <h3>ВАДОС</h3>
            <p>БАРБЕР</p>
          </div>
        </a>
        <a
          href="https://b65577.alteg.io/company/82007/menu?o=m2095148"
          className={classes.mastersItem}
        >
          <img src={Master4} alt="Master4" />
          <div className={classes.mastersItemText}>
            <h3>ГЕННАДІЙ</h3>
            <p>СТАРШИЙ БАРБЕР</p>
          </div>
        </a>
        <a
          href="https://b65577.alteg.io/company/82007/menu?o=m299479"
          className={classes.mastersItem}
        >
          <img src={Master5} alt="Master5" />
          <div className={classes.mastersItemText}>
            <h3>АРТУР</h3>
            <p>БАРБЕР</p>
          </div>
        </a>
        <a
          href="https://b65577.alteg.io/company/82007/menu?o=m1951976"
          className={classes.mastersItem}
        >
          <img src={Master6} alt="Master6" />
          <div className={classes.mastersItemText}>
            <h3>МИКИТА</h3>
            <p>БАРБЕР</p>
          </div>
        </a>
        <a
          href="https://b65577.alteg.io/company/82007/menu?o=m162403"
          className={classes.mastersItem}
        >
          <img src={Master7} alt="Master7" />
          <div className={classes.mastersItemText}>
            <h3>СЕРГІЙ</h3>
            <p>БАРБЕР</p>
          </div>
        </a>
        <a
          href="https://n65577.alteg.io/company:82007?o=m299479"
          className={classes.mastersItem}
        >
          <img src={Master8} alt="Master8" />
          <div className={classes.mastersItemText}>
            <h3>ОЛЕКСІЙ</h3>
            <p>БАРБЕР</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Masters;
