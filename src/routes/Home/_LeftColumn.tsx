import { constant } from "../../constants/constant";
import UILinks from "../../ui/ui.links";
import SkillElement from "../../ui/ui.SkillElement";

export default function LeftColumn() {
  return (
    <div className="w-1/4 p-5">
      <UILinks
        links={[
          { url: constant.github_link, label: "github" },
          { url: constant.linkedin_link, label: "linkedin" },
        ]}
      />
      <div className="mt-10">
        <h3 className="font-medium">Skills</h3>
        {constant.skills.map((elem, i) => (
          <SkillElement skill={elem.skill} level={elem.level} key={`skill_element_${i}`} />
        ))}
      </div>
    </div>
  );
}
