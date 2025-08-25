type Props = {
  skill: string;
  level: 1 | 2 | 3 | 4 | 5;
};

export default function SkillElement({ skill, level }: Props) {
  const Skillbar = ({ level }: { level: number }) => {
    const array = new Array(5).fill(0);
    return (
      <div className="flex justify-between">
        {array.map((_, index) => (
          <div
            className={`w-2/12 h-1 rounded-sm ${index + 1 > level ? "bg-sky-100" : "bg-emerald-400"}`}
            key={`skill_elem_${index}`}
          />
        ))}
      </div>
    );
  };
  return (
    <div className="mt-3">
      <p className="text-xs mb-1">
        <span className="hidden md:inline">-</span> {skill}
      </p>
      <Skillbar level={level} />
    </div>
  );
}
