import classes from "./Academics.module.scss";

const Academics = () => {
  return (
    <div className={classes["academics__container"]}>
      <ul className={classes["academics__timeline"]}>
        <li className={classes["academics__course"]}>
          <div
            className={`${classes["academics__title"]} ${classes["academics__title--red"]}`}
          >
            2019
          </div>
          <div className={classes["academics__details"]}>
            <h5 className={classes["academics__details__title"]}>
              M Tech in Software Engineering
            </h5>
            <p className={classes["academics__details__subtitle"]}>
              BITS Pilani University
            </p>
            I studied M Tech in Software Engineering from BITS pilani university
            from Wipro technologies. It was an integrated learning course in
            Wipro Technologies. I was working in real time project also while
            pursuing the M Tech with Wipro Technologies.
          </div>
        </li>
        <li className={classes["academics__course"]}>
          <div className={classes["academics__title"]}>2015</div>
          <div className={classes["academics__details"]}>
            <h5 className={classes["academics__details__title"]}>BCA</h5>
            <p className={classes["academics__details__subtitle"]}>
              Calicut University
            </p>
            I studied BCA from Cherpulassery College of Science and Technology
            which is located at Palakkad district, Kerala state, India
          </div>
        </li>
      </ul>
      <ul className={classes["academics__timeline"]}>
        <li className={classes["academics__course"]}>
          <div
            className={`${classes["academics__title"]} ${classes["academics__title--red"]}`}
          >
            2021 to Current
          </div>
          <div className={classes["academics__details"]}>
            <h5 className={classes["academics__details__title"]}>Capgemini</h5>
            <p className={classes["academics__details__subtitle"]}>
              Consultant
            </p>
            I have been working in Subway project with Capgemini. I am
            responsible for developing, migrating and maintaining the web
            application of the Subway food ordering web app.
          </div>
        </li>
        <li className={classes["academics__course"]}>
          <div className={classes["academics__title"]}>2015 to 2021</div>
          <div className={classes["academics__details"]}>
            <h5 className={classes["academics__details__title"]}>
              Wipro Technologies
            </h5>
            <p className={classes["academics__details__subtitle"]}>
              Senoir Software Engineer
            </p>
            I worked with Wipro Technologies for 5 years and 11 months. I worked
            in GSK project with Wipro. I was responsible for developing,
            migrating and supporting the web applications in GSK.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Academics;
