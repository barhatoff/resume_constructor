export const constant = {
  photo_url:
    import.meta.env.VITE_PHOTO_URL ??
    "https://ionicframework.com/docs/img/demos/avatar.svg",
  name: import.meta.env.VITE_NAME ?? "name surname",
  position: import.meta.env.VITE_POSITION ?? "position",
  city: import.meta.env.VITE_CITY ?? "city",
  phone: import.meta.env.VITE_PHONE ?? "+0",
  email: import.meta.env.VITE_EMAIL ?? "mail",
  github_link: import.meta.env.VITE_GITHUB ?? "git",
  linkedin_link: import.meta.env.VITE_LINKEDIN ?? "linkedin",
  skills: [
    { skill: "Frontend: ReactTS, SASS, TailwindCSS, MUI", level: 3 as 3 },
    { skill: "Backend: TS, Express, JWT", level: 3 as 3 },
    { skill: "DataBases: MongoDB, PostgreSQL", level: 3 as 3 },
    { skill: "UNIT: Jest", level: 2 as 2 },
    { skill: "Socket.io", level: 2 as 2 },
    { skill: "TCP/IP", level: 2 as 2 },
  ],
  education: {
    university: import.meta.env.VITE_EDUCATION ?? "university",
    dateRange: "September 2020 - June 2024",
  },
  employment_history: JSON.parse(import.meta.env.VITE_EMPLOYMENT_HISTORY) ?? [
    { employer: "?", range: "?", workdone: [{ title: "?", content: "?" }] },
  ],
};
