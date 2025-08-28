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
    {
      skill: "Frontend: React (TS), Redux Toolkit, SASS, TailwindCSS, MUI",
      level: 3 as 3,
    },
    { skill: "Backend: Node.js (TS), Express, JWT", level: 3 as 3 },
    { skill: "Databases: MongoDB, PostgreSQL", level: 3 as 3 },
    { skill: "Testing: Jest (unit, integration)", level: 2 as 2 },
    { skill: "Real-time: Socket.io, WebSockets", level: 2 as 2 },
    { skill: "Networking: TCP/IP basics", level: 2 as 2 },
  ],
  education: {
    university: import.meta.env.VITE_EDUCATION ?? "university",
    dateRange: "September 2020 - June 2024",
  },
  employment_history: JSON.parse(import.meta.env.VITE_EMPLOYMENT_HISTORY) ?? [
    { employer: "?", range: "?", workdone: [{ title: "?", content: "?" }] },
  ],
};
