export type Blog = {
  name: string;
  link: string;
  image: string;
  id: number;
  published_date: string;
  subtitle: string;
};
export type Contact = {
  name: string;
  imageLink: string;
  title: string;
  color: string;
  icon: React.ReactNode;
};
export type SkillArea = {
  name: string;
  image: string;
  subtitle: string;
};

export type Experience = {
  company: string;
  employmentTime: string;
  description: string;
  skills: string[];
  position: string;
};
export type Tech = {
  name: string;
  logo: JSX.Element;
};

export type Skill = {
  title: string;
  skills: Tech[];
  logo: string;
};
export type Biography = {
  name: string;
  age: number;
  email: string;
  birthdate: string;
  address: string;
  phone: string;
};

export type Education = {
  title: string;
  result: string;
  duration: string;
  description: string;
  institution: string;
};
export type Task = {
  tasks: string[];
  technologies: string;
};
export type ProjectImage = {
  img: string;
  title: string;
  rows?: number;
  cols?: number;
};
export type Project = {
  typeOfContent: string;
  projectName: string;
  description: string;
  performedTasks: Task[];
  imageUrl: string;
  themeColor: string;
  projectOverview: string;
  clientName: string;
  clientAddress: string;
  projectYear: string;
  projectType: string;
  clientWebsite: string;
  projectImages: ProjectImage[];
};

export type SocialLink = {
  link: string;
  logo: JSX.Element;
};
