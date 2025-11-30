type Props = {
  employer: string;
  range: string;
  workdone: { title: string; content: string; url: string }[];
};
export default function EmploymentElem({ employer, range, workdone }: Props) {
  const formatUrl = (url: string) => {
    const splittedUrl = url.split(".");

    if (splittedUrl[0] === "appDemo") {
      return `/demo?target=${splittedUrl[1]}`;
    }
    return url;
  };

  return (
    <div className="mt-5">
      <p className="font-bold">{employer}</p>
      <p className="text-xs">{range}</p>
      <div className="mt-2">
        {workdone.map((elem, i) => (
          <div key={`elem_employment_${i}`}>
            <div className="flex pl-5 mt-2" key={`employment_elem_${i}`}>
              <p className="mr-2">•</p>
              <div>
                <span className="font-medium">{elem.title} </span>
                <span>{elem.content}</span>
              </div>
            </div>
            <a
              className="ml-5 underline cursor-pointer hover:opacity-80"
              href={formatUrl(elem.url)}
              target="_blank"
            >
              link to app
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
