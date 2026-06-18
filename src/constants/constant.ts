export const constant = {
  app_url: import.meta.env.VITE_APP_URL ?? "",
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
      title: "Frontend",
      skill: "Angular, Angular Material, RxJS",
      level: 3 as const,
    },
    {
      title: "Backend",
      skill: "NestJS, ASP.NET",
      level: 3 as const,
    },
    {
      title: "Databases & ORMs",
      skill: "PostgreSQL, MongoDB, Prisma Core",
      level: 3 as const,
    },
    {
      title: "DevOps & Infrastructure",
      skill: "Linux, Docker, Nginx, TCP/IP, CI/CD",
      level: 3 as const,
    },
    {
      title: "Testing & Quality",
      skill: "Jest (unit, integration)",
      level: 2 as const,
    },
    {
      title: "Real-time & Network",
      skill: "Socket.io, WebSockets",
      level: 2 as const,
    },
    {
      title: "Libraries & Tools",
      skill: "JWT, Puppeteer, Handlebars",
      level: 2 as const,
    },
  ],
  education: {
    university: import.meta.env.VITE_EDUCATION ?? "university",
    dateRange: "September 2020 - June 2024",
  },
  employment_history: JSON.parse(import.meta.env.VITE_EMPLOYMENT_HISTORY) ?? [
    {
      employer: "?",
      range: "?",
      workdone: [{ title: "?", content: "?", url: "?" }],
    },
  ],

  galery_1: JSON.parse(import.meta.env.VITE_GALERY_1) ?? [""],
  galery_1_data: JSON.parse(import.meta.env.VITE_GALERY_1_DATA) ?? {},
  // galery_2: JSON.parse(import.meta.env.VITE_GALERY_2) ?? [""],
  // galery_2_data: JSON.parse(import.meta.env.VITE_GALERY_2_DATA) ?? {},
};
