import { constant } from "../../constants/constant";
import type { EmploymentHistoryElem } from "../../types/types";
import EmploymentElem from "../../ui/ui.employmentElem";

export default function RightColumn() {
  return (
    <div className="w-3/4 p-5 pt-15">
      <div>
        <h2 className="text-2xl font-medium">Education</h2>
        <p className="font-medium mt-2">{constant.education.university}</p>
        <p className="text-xs">{constant.education.dateRange}</p>
      </div>
      <div>
        <h2 className="text-2xl font-medium mt-15">Employment History</h2>
        {constant.employment_history.map((elem: EmploymentHistoryElem, i: number) => (
          <EmploymentElem
            employer={elem.employer}
            range={elem.range}
            workdone={elem.workdone}
            key={`employment_elem_${i}`}
          />
        ))}
      </div>
    </div>
  );
}
