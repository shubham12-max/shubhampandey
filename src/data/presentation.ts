type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "ashokkumawat4555@gmail.com",
  title: "Hi, i’m Ashok 👋",
  //profile: "/profile.webp",
  description:
    "I am a 2nd-year BTech student at Graphic Era Hill University, Dehradun. I am passionate about *software development, and problem-solving*. Currently, I am exploring backend and frontend development while expanding my knowledge in AI and cloud platforms. I have experience with *Python, C, C++, MySQL, MongoDB, and GCP*, and I enjoy solving complex problems through efficient code and system design. I am always *looking for opportunities to grow and contribute to innovative projects*.",
  socials: [
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/ashokkmt",
    },
    {
      label: "GitHub",
      link: "https://github.com/ashokkmt",
    },
    {
      label: "StackOverflow",
      link: "https://stackoverflow.com/users/22745165/november",
    },
  ],
};

export default presentation;
