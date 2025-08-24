type Props = {
  employer: string;
  range: string;
  workdone: { title: string; content: string }[];
};
export default function EmploymentElem({ employer, range, workdone }: Props) {
  return (
    <div className="mt-5">
      <p className="font-bold">{employer}</p>
      <p className="text-xs">{range}</p>
      <div className="mt-2">
        {workdone.map((elem, i) => (
          <div className="flex pl-5 mt-2" key={`employment_elem_${i}`}>
            <p className="mr-2">•</p>
            <div>
              <span className="font-medium">{elem.title} </span>
              <span>{elem.content}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
