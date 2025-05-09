export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Portfolio Theme using Astro",
    techs: ["Astro", "Cloudfare", "Tailwind"],
    link: "https://github.com/shubham12-max/shubhampandey",
  },
];

export default projects;
