import React from "react";
import classes from "./Gallery.module.scss";
import photo1 from "../../../Icons/DSC00153.webp";
import photo2 from "../../../Icons/DSC00168.webp";
import photo3 from "../../../Icons/DSC00175.webp";
import photo4 from "../../../Icons/DSC00190.webp";
import photo5 from "../../../Icons/DSC00202.webp";
import photo6 from "../../../Icons/DSC00216.webp";
import photo7 from "../../../Icons/DSC00225.webp";
import photo8 from "../../../Icons/DSC00210.webp";

const Gallery = () => {
  return (
    <div id="Gallery" className={classes.gallery}>
      <div className={classes.galleryHeadWrapper}>
        <div className={classes.wandWrapper}></div>
        <div>
          <h2>ГАЛЕРЕЯ</h2>
          <p>На варті ваших стрижок з 2017 року</p>
        </div>
      </div>
      <div className={classes.photos}>
        <img className={classes.photo} src={photo1} alt="photo1" />
        <img className={classes.photo} src={photo2} alt="photo2" />
        <img className={classes.photo} src={photo3} alt="photo3" />
        <img className={classes.photo} src={photo4} alt="photo4" />
        <img className={classes.photo} src={photo5} alt="photo5" />
        <img className={classes.photo} src={photo6} alt="photo6" />
        <img className={classes.photo} src={photo7} alt="photo7" />
        <img className={classes.photo} src={photo8} alt="photo8" />
      </div>
    </div>
  );
};

export default Gallery;
