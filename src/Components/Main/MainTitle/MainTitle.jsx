import React from "react";
import classes from "./MainTitle.module.scss";

const MainTitle = () => {
  return (
    <div className={classes.mainTitleWrapper}>
      <div className={classes.mainTitle}>
        <h2 className={classes.MainTitleHeader}>HANDSOME</h2>
        <p className={classes.MainTitleText}>Keep it handsome</p>
      </div>
    </div>
  );
};

export default MainTitle;
