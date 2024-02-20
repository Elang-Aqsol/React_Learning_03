import PropTypes from "prop-types";

const skillData = [
  {
    skill: "React",
    level: "beginner",
    color: "#6633ff",
  },
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#e07b39",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#f8bd63",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#ff3333",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#33ff99",
  },
  {
    skill: "Git & Github",
    level: "intermediate",
    color: "#A03232",
  },
];

export default function Skill() {
  return (
    <>
      <div className="skill-list">
        {skillData.map((skill, index) => (
          <NewSkill
            key={index}
            skill={skill.skill}
            level={skill.level}
            color={skill.color}
          />
        ))}
      </div>
    </>
  );
}

const NewSkill = ({ skill, level, color }) => {
  return (
    <>
      <div className="skill" style={{ backgroundColor: color }}>
        <span>{skill}</span>
        <span>
          {level === "beginner"
            ? "🤓"
            : level === "intermediate"
            ? "👦"
            : level === "advanced" && "👨‍🎓"}
        </span>
      </div>
    </>
  );
};

NewSkill.propTypes = {
  skill: PropTypes.string,
  level: PropTypes.string,
  color: PropTypes.string,
};
