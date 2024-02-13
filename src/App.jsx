import Image from "./components/image";
import Description from "./components/description";
import SkillList from "./components/skill";

export default function App() {
  return (
    <div className="card">
      <Image />
      <div className="data">
        <Description />
        <SkillList />
      </div>
    </div>
  );
}
