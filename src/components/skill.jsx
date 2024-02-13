import PropTypes from "prop-types";

const skillData = [
  {
    skill: "React",
    emoji: "💪",
    color: "blue",
  },
  {
    skill: "HTML+CSS",
    emoji: "💪",
    color: "orange",
  },
  {
    skill: "JavaScript",
    emoji: "💪",
    color: "yellow",
  },
  {
    skill: "Svelte",
    emoji: "👶",
    color: "orangered",
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
            emoji={skill.emoji}
            color={skill.color}
          />
        ))}
      </div>
    </>
  );
}

const NewSkill = ({ skill, emoji, color }) => {
  return (
    <>
      <div className="skill" style={{ backgroundColor: color }}>
        <span>{skill}</span>
        <span>{emoji}</span>
      </div>
    </>
  );
};

NewSkill.propTypes = {
  skill: PropTypes.string,
  emoji: PropTypes.string,
  color: PropTypes.string,
};
