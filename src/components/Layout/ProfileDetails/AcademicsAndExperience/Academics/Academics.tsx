import classes from "./Academics.module.scss";

const Academics = () => {
  return (
    <div className={classes["academics__container"]}>
      <div className={classes["academic__column"]}>
        <h1 className={classes["academic__title"]}>Education</h1>
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
              I earned my M.Tech in Software Engineering from BITS Pilani University through an integrated learning program with Wipro Technologies. Throughout this academic journey, I seamlessly balanced theoretical knowledge from the university curriculum with hands-on experience in real-time projects at Wipro Technologies. This unique combination enriched my learning experience, allowing me to apply theoretical concepts to practical, industry-relevant scenarios.
            </div>
          </li>
          <li className={classes["academics__course"]}>
            <div className={classes["academics__title"]}>2015</div>
            <div className={classes["academics__details"]}>
              <h5 className={classes["academics__details__title"]}>BCA</h5>
              <p className={classes["academics__details__subtitle"]}>
                Calicut University
              </p>
              I pursued my BCA degree at Cherpulassery College of Science and Technology, situated in the picturesque Palakkad district of Kerala, India. This academic experience laid the foundation for my journey into the field of technology and serves as a testament to my commitment to academic excellence.
            </div>
          </li>
        </ul>
      </div>
      <div className={classes["academic__column"]}>
        <h1 className={classes["academic__title"]}>Experience</h1>
        <ul className={classes["academics__timeline"]}>
          <li className={classes["academics__course"]}>
            <div
              className={`${classes["academics__title"]} ${classes["academics__title--red"]}`}
            >
              2021 to Current
            </div>
            <div className={classes["academics__details"]}>
              <h5 className={classes["academics__details__title"]}>
                Capgemini
              </h5>
              <p className={classes["academics__details__subtitle"]}>
                Consultant
              </p>
              During my tenure at Capgemini as a Front-End Developer, I've undertaken diverse responsibilities that encompass the complete spectrum of web development. My role has been instrumental in driving the implementation of new features, orchestrating the seamless migration of web applications from JQuery to ReactJS, and consistently enhancing their functionality.

A pivotal aspect of my contribution involves researching and formulating optimal solutions for boosting performance and ensuring a cohesive user experience across web components and modules. Moreover, I've been dedicated to the ongoing maintenance of web applications, ensuring their reliability and relevance in a dynamic digital landscape.

This journey at Capgemini has not only honed my technical proficiency but has also enabled me to cultivate an acute eye for performance optimization and the seamless integration of cutting-edge technologies.
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
              I served as a Web Developer at Wipro Technologies, where I had the opportunity to specialize in a range of technologies including jQuery, HTML, CSS, and ReactJS. My role within a dynamic team of four developers involved not only collaborating on projects, but also taking ownership of critical responsibilities such as implementing enhancements and resolving bugs within a web application. This experience allowed me to not only refine my technical skills but also foster a strong sense of teamwork and accountability.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Academics;
