export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Critique AI",
    techs: ["Flask", "Google Cloud", "AI"],
    link: "https://github.com/ashokkmt/critiqueai",
  },
  {
    title: "Portfolio Theme using Astro",
    techs: ["Astro", "Cloudfare", "Tailwind"],
    link: "https://github.com/ashokkmt/ashokkumawat",
  },
];

export default projects;
