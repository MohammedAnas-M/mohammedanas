import classes from "./ProfileIntro.module.scss";
import {
  PROFILE_NAME,
  JOB_NAME,
  INTRO_PARA,
  FROM_PLACE,
  LIVING_PLACE,
  AGE,
  GENDER,
} from "../../../../Utils/Constants/Constants";
import { useEffect, useState } from "react";

const ProfileIntro = (props: {}) => {
  const [isResumeHash, setIsResumeHash] = useState(false);
  const handleDownload = () => {
    const resumePath = `${process.env.PUBLIC_URL}/Resume.pdf`;
    window.open(resumePath, "_blank");
  };

  const buttonClassnames = `${classes["downloadCv"]} ${
    isResumeHash ? classes["highlight"] : ""
  }`;

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      const { hash } = window.location;
      console.log("hash changed ", hash);
      setIsResumeHash(hash === "#profile__intro-resume");
      setTimeout(() => {
        setIsResumeHash(false);
      }, 5000);
    });
  }, []);
  
  return (
    <section id="profile__intro" className={classes["intro"]}>
      <div id="profile__intro-resume" style={{ visibility: "hidden" }} />
      <div className={classes["name"]}>{PROFILE_NAME}</div>
      <div className={classes["job_desc"]}>{JOB_NAME}</div>
      <p className={classes["introPara"]}>{INTRO_PARA}</p>
      <ul className={classes["list"]}>
        <li>
          <strong>From: </strong>
          {FROM_PLACE}
        </li>
        <li>
          <strong>Lives in: </strong>
          {LIVING_PLACE}
        </li>
        <li>
          <strong>Age: </strong>
          {AGE}
        </li>
        <li>
          <strong>Gender: </strong>
          {GENDER}
        </li>
      </ul>
      <button id="resume" onClick={handleDownload} className={buttonClassnames}>
        Download CV
      </button>
    </section>
  );
};

export default ProfileIntro;
