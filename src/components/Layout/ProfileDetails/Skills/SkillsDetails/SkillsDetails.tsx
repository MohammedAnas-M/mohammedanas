import classes from "./SkillsDetails.module.scss";

const SkillsDetails = (props: {}) => {
  const skills = [
    {
      name: "HTML",
      progress: "percent100",
    },
    {
      name: "JavaScript",
      progress: "percent100",
    },
    {
      name: "ReactJS",
      progress: "percent90",
    },
    {
      name: "Zustand library",
      progress: "percent85",
    },
    {
      name: "Redux",
      progress: "percent85",
    },
    {
      name: "CSS",
      progress: "percent85",
    },
    {
      name: "SCSS",
      progress: "percent85",
    },
    {
      name: "Jest",
      progress: "percent85",
    },
    {
      name: "JQuery",
      progress: "percent85",
    },
    {
      name: "ADA(Americans with Disabilities Act)",
      progress: "percent85",
    },
    {
      name: "React Query",
      progress: "percent85",
    },
    {
      name: "Preact",
      progress: "percent60",
    },
    {
      name: "Web Components",
      progress: "percent80",
    },
    {
      name: "LitJS",
      progress: "percent80",
    },
  ];

  return (
    <div className={classes["skillDetailsContainer"]}>
      {skills.map((skill) => {
        return (
          <div className={classes["skill"]} key={skill.name}>
            <p className={classes["skill__text"]}>{skill.name}</p>
            <div className={classes["progressBarWrapper"]}>
              <div
                className={`${classes["progressBar"]} ${
                  classes[`${skill.progress}`]
                }`}
              >
                {skill.progress.match(/\d+/) + "%"}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsDetails;
