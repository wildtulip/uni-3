import React from "react";
import AboutUsLogo from "../../../Icons/AboutUsLogo.jpg";
import classes from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <div id="AboutUs" className={classes.AboutUsWrapper}>
      <div className={classes.AboutUsHeadWrapper}>
        <div className={classes.wandWrapper}></div>
        <div>
          <h2>ПРО НАС</h2>
          <p>HANDSOME - найперший барбершоп на селищі</p>
        </div>
      </div>
      <div className={classes.AboutUsMainContentWrapper}>
        <div className={classes.AboutUsMainText}>
          <p className={classes.AboutUsMainTextItem}>
            Ми-перший Барбершоп на Котовському.Високий сервіс, сучасні послуги,
            характер, загартування та руки майстра своєї справи – це все
            говорить про професіоналізм та якісний рівень нашого barbershop.
          </p>
          <p className={classes.AboutUsMainTextItem}>
            Затримай свій погляд, друже наш, на хвилину і влови наше послання.
            Ми – родина Нandsomе, ми – конгломерат: складне поєднання дружби,
            пристрасті, співзвучності духу, єдиного способу думки, незаперечного
            бажання бути кращим, бути чесним, бути, а не здаватися.
          </p>
          <p className={classes.AboutUsMainTextItem}>
            Це клуб, де живе своя філософія. Філософія, що породжує почуття
            причетності та довіри.
          </p>
          <p className={classes.AboutUsMainTextItem}>
            Звільняючись від того, хто ти є, ти стаєш тим, ким можеш бути.
          </p>
          <p className={classes.AboutUsMainTextItem}>
            Змінюй своє життя вже сьогодні!
          </p>
        </div>
        <div>
          <img
            className={classes.AboutUsLogo}
            src={AboutUsLogo}
            alt="AboutUsLogo"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
