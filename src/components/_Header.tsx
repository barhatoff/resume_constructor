import { constant } from "../constants/constant";

export default function Header() {
  return (
    <div className="w-full h-2/12 flex bg-emerald-400">
      <div className="w-1/4">
        <img
          src={constant.photo_url}
          className="w-full h-full object-cover"
          alt="avatar"
        />
      </div>
      <div className="w-3/4 p-5">
        <h1 className="font-medium text-2xl">{constant.name}</h1>
        <h2 className="mt-1">{constant.position}</h2>

        <div className="mt-15 text-xs">
          <p>{constant.city}</p>
          <a href={`tel:${constant.phone}`} className="underline">
            {constant.phone}
          </a>
          <span className="ml-2 mr-2">•</span>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${constant.email}`}
            target="_blank"
            className="underline"
          >
            {constant.email}
          </a>
        </div>
      </div>
    </div>
  );
}
