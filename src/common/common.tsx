import {
  Blog,
  CertificateOrAcheivement,
  Contact,
  Education,
  Experience,
  Project,
  Skill,
  SkillArea,
  SocialLink,
} from "./types";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";
import { BiLogoReact } from "react-icons/bi";
import { TbBrandTypescript } from "react-icons/tb";
import { BiLogoRedux } from "react-icons/bi";
import { RiJavascriptLine } from "react-icons/ri";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiFirebase } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import jsImage from "../assets/js.jpg";
import ScicImage from "../assets/Scic_Silvia_Satoar_Plabon.jpg";
import ScicRecommendation from "../assets/SCICRecommendation.jpg";
import BlogReactImage from "../assets/blogReact.jpg";
import FullStackJsCourse from "../assets/fullStackJsCourse.jpg";
import {
  TbBrandGolang,
  TbBrandReactNative,
  TbBrandMongodb,
} from "react-icons/tb";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaNodeJs,
} from "react-icons/fa";
import BackendDevelopmentImage from "../assets/backendDevelopment.jpg";
import FrontendDevelopmentImage from "../assets/frontendDevelopment.jpg";
import AppDevelopmentImage from "../assets/appDevelopment.png";
import { GiHeadphones, GiMaterialsScience } from "react-icons/gi";
import ReactExperienceImage from "../assets/reactExperienceImage.jpg";
import NodeExperienceImage from "../assets/nodejs-experience.jpg";
import GolangExperienceImage from "../assets/golangExperience.jpg";
import SoftwareExperienceImage from "../assets/softwareEngineeringExperience.jpg";

// eslint-disable-next-line react-refresh/only-export-components
export const blogs: Blog[] = [
  {
    name: "Stripe Multipartner platform for the express or custom-connected account",
    link: "https://medium.com/@silviaplabon/stripe-multipartner-platform-for-the-express-or-custom-connected-account-2f8da15d3dca",
    image: "https://i.ibb.co/1nZTBZ7/stripe.jpg",
    id: 0,
    published_date: "Feb 26, 2023",
    subtitle:
      "If you wish to run a business with a number of merchants, you must use a multi-partner platform service from Stripe. There are three sorts of accounts that may be used for a multi-partner platform. A standard linked account can only accept direct charges, but a custom or express connected account can accept destination charges as well as separate costs/transfers. You can select an account based on your charge type.",
  },
  {
    name: "JS Popular Method Of String",
    link: "https://silviaplabon.medium.com/js-popular-method-of-string-b15a9c8a9839",
    image: "https://i.ibb.co/WzkTkZ6/javascript.jpg",
    id: 1,
    published_date: "May 5, 2021",
    subtitle:
      "10 Javascript String Methods You Should Know:charAt(), concat(), includes(), startsWith(), endsWith(), indexOf(), lastIndexOf(), replace(), slice(), split() charAt(): Amongst two ways to access an individual character in a string, one way is using the charAt() method where the index represents the position of a character and characters are indexed from left to right. The index number starts from 0 and goes to length-1(length property returns the length of a",
  },
  {
    name: "Var Vs Let Vs Const",
    link: "https://silviaplabon.medium.com/js-popular-method-of-string-b15a9c8a9839",
    image: "https://i.ibb.co/2nDX5nf/javascript1or.jpg",
    id: 2,
    published_date: "May 5, 2021",
    subtitle:
      "As a result of the release of ES6, two new methods of creating variables have been introduced: let and const. Preceding a discussion of the let and const keywords, we will look at how to create a variable in javascript in the most basic method possible, by utilizing the var keyword.",
  },
  {
    name: "React LifeCycle",
    link: "https://silviaplabon.medium.com/react-10-things-you-should-know-99d1eeac4cec",
    image: BlogReactImage,
    id: 3,
    published_date: "May 5, 2021",
    subtitle:
      "Components are created (mounted on the DOM), modified, and then die (unmount on DOM). A component lifecycle is a term used to describe this process. Mounting, Updating, and Unmounting are the three main phases of the lifecycle 1.1.1. Mounting:",
  },
  {
    name: "Javascript Interview important topics",
    link: "https://medium.com/@silviaplabon/javascript-interview-important-topics-7a29ea4ac8e7",
    image: jsImage,
    id: 4,
    published_date: "May 8, 2021",
    subtitle:
      "Truthy and Falsy Value:A truthy value in JavaScript is one that is considered valid when used in a Boolean context. Unless they are described as false, all values are true (i.e., except for false , 0 , -0 , 0n , “” , null , undefined , and NaN ).\nNull and Undefined:Both primitives and false values are null and unknown. However, null is an entity as well. Null refers to an empty or non-",
  },
  {
    name: "Javascript Exception Handling and Block Binding",
    link: "https://medium.com/@silviaplabon/var-declarations-and-hoisting-49cc68b3e605",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsX-HTjawbxClMtVU7Lja4QJQVpgOncSOGxA&usqp=CAU",
    id: 5,
    published_date: "May 6, 2021",
    subtitle:
      "try-catch-finally: The try/catch/finally statement is the exception-handling mechanism for javascript. The aim of the exception handling mechanism is to provide means of recognizing and reporting an ‘exceptional circumstance’ in order to take appropriate action.\nA try/catch block is used mainly in JavaScript to handle errors. You use this when you don’t want an error in your script to break your code.",
  },
];
// eslint-disable-next-line react-refresh/only-export-components
export const skillsArea: SkillArea[] = [
  {
    name: "React JS",
    image: ReactExperienceImage,
    subtitle:
      "Dedicated to React JS, I utilize this cutting-edge framework not just as a tool but as a vision for my work. I specialize in managing and crafting extensive React JS applications, driven by my passion for excellence.",
  },
  {
    name: "Node JS",
    image: NodeExperienceImage,
    subtitle:
      "I've harnessed the power of Node.js to create robust APIs. These APIs serve as the backbone for feature-rich, versatile, and scalable applications, empowering developers of all levels. Explore the limitless potential of API development with my expertise.",
  },
  {
    name: "Golang",
    image: GolangExperienceImage,
    subtitle:
      "I've harnessed the power of Golang to create robust APIs. These APIs serve as the backbone for feature-rich, versatile, and scalable applications, empowering developers of all levels. Explore the limitless potential of API development with my expertise.",
  },
  {
    name: "Software Engineer",
    image: SoftwareExperienceImage,
    subtitle:
      "I began my career as a Software Engineer, where I took on the responsibility of designing, maintaining, and constructing scalable applications using a variety of tools and technologies.",
  },
];

// eslint-disable-next-line react-refresh/only-export-components
export const contacts: Contact[] = [
  {
    name: "Email",
    imageLink: "https://i.ibb.co/1nZTBZ7/stripe.jpg",
    title: "silviaPlabon@gmail.com",
    color: "#02c1ff",
    icon: <HiOutlineMailOpen size="21"></HiOutlineMailOpen>,
  },
  {
    name: "Address",
    imageLink: "https://i.ibb.co/1nZTBZ7/stripe.jpg",
    title: "Akborshah,Chittagong",
    color: "#ff014f",
    icon: <FiMapPin size="21"></FiMapPin>,
  },
  {
    name: "Phone",
    imageLink: "https://i.ibb.co/1nZTBZ7/stripe.jpg",
    title: "+8801743202786",
    color: "#fec447",
    icon: <GiHeadphones size="21"></GiHeadphones>,
  },
];
// eslint-disable-next-line react-refresh/only-export-components
export const experiences: Experience[] = [
  {
    company: "Profecia Links Consulting Private LTD",
    employmentTime: "Aug 2021- Present",
    description:
      "Building websites with React, and Redux.Implementing APIs with secure techniques using Node.js and Golang. Working independently with minimal supervision, analyzing and troubleshooting issues, and interacting with the team. Standardized all output with a new, responsive, and mobile-first approach, and enhanced the quality of code and improved application performance, leading to a reduction in bugs. ",
    skills: [
      "React",
      "Typescript",
      "Nodejs",
      "Golang",
      "React-Native",
      "Firestore",
      "Javascript",
      "Tailwind",
      "Bootstrap",
      "SCSS",
    ],
    position: "Software Engineer",
  },
  {
    company: "International Islamic University Chittagong",
    employmentTime: "Jan 2021 - Jun 2021",
    description:
      "Guiding students, supporting exams, success in every class.Enriching learning, fostering growth, excellence in OS.",
    skills: [],
    position: "Teaching Assistant",
  },
];

export const Skills: Skill[] = [
  {
    title: "Front-end Development",
    logo: FrontendDevelopmentImage,
    skills: [
      {
        name: "React",
        logo: <BiLogoReact size="30"></BiLogoReact>,
      },
      {
        name: "Redux",
        logo: <BiLogoRedux size="30"></BiLogoRedux>,
      },
      {
        name: "Typescript",
        logo: <TbBrandTypescript size="30"></TbBrandTypescript>,
      },
      {
        name: "Javascript",
        logo: <RiJavascriptLine size="30"></RiJavascriptLine>,
      },
      {
        name: "Html",
        logo: <AiFillHtml5 size="30"></AiFillHtml5>,
      },
      {
        name: "Css",
        logo: <DiCss3 size="30"></DiCss3>,
      },
      {
        name: "Bootstrap",
        logo: <FaBootstrap size="30"></FaBootstrap>,
      },
      {
        name: "Tailwind",
        logo: <SiTailwindcss size="30"></SiTailwindcss>,
      },
      {
        name: "MaterialUI",
        logo: <GiMaterialsScience size="30"></GiMaterialsScience>,
      },
    ],
  },
  {
    title: "Back-end Development",
    logo: BackendDevelopmentImage,
    skills: [
      {
        name: "Node JS",
        logo: <FaNodeJs size="30"></FaNodeJs>,
      },
      {
        name: "Golang",
        logo: <TbBrandGolang size="30"></TbBrandGolang>,
      },
      {
        name: "Mongodb",
        logo: <TbBrandMongodb size="30"></TbBrandMongodb>,
      },
      {
        name: "Firestore",
        logo: <DiFirebase size="30"></DiFirebase>,
      },
    ],
  },
  {
    title: "Android-app Development",
    logo: AppDevelopmentImage,
    skills: [
      {
        name: "React Native",
        logo: <TbBrandReactNative size="30"></TbBrandReactNative>,
      },
    ],
  },
];

export const Biography = {
  name: "Silvia Satoar Plabon",
  age: "26",
  birthday: "10 jan, 1998",
  email: "silviaplabon@gmail.com",
  phone: "+8801743202786",
  address: "Akbarshah, Chittagong",
};

export const DegreeList: Education[] = [
  {
    title: "BSC in Computer Science & Engineering",
    institution: "International Islamic University Chittagong",
    duration: "2017-2021",
    description:
      "The mission of the Department of Computer Science and Engineering is to offer the strong academic program needed to produce well-educated students who can become productive members of the Computer Science and Engineering profession. ",
    result: "CGPA 3.739 Out Of 4.00",
  },
  {
    title: "HSC",
    institution: "Chittagong Cantonment Public College",
    duration: "2013-2015",
    description:
      "The Higher Secondary Certificate (HSC) is a secondary education qualification in Bangladesh",
    result: "",
  },
  {
    title: "SSC",
    institution: "Chittagong Government Muslim High School",
    duration: "2011-2013",
    description:
      "The Secondary School Certificate (SSC), Matriculation examination, is a public examination in Bangladesh.",
    result: "",
  },
];
// eslint-disable-next-line react-refresh/only-export-components
export const projectsList: Project[] = [
  {
    typeOfContent: "all_website_frontend",
    projectName: "RETROKIT",
    clientName: "RETROKIT",
    clientAddress: "IRELAND",
    projectYear: "2023",
    projectType: "APARTMENT BILLING",
    clientWebsite: "",
    description:
      "As the lead developer for RetroKit's Ireland-based energy upgrade software platform, I designed and implemented a user-friendly interface using React, utilized Storybook to improve design consistency and enable faster iteration, wrote comprehensive unit and integration tests with Jest, and led a team of developers in achieving project objectives and exceeding client expectations.",
    performedTasks: [
      {
        technologies: "React—Redux-MaterialUI",
        tasks: [
          "Designed and implemented a user-friendly interface for retrokit.",
          "Utilized Storybook to document and showcase UI components, improving design consistency and enabling faster iteration.",
          "Wrote comprehensive unit and integration tests with Jest, achieving 100% test coverage and enhancing code reliability.",
          "Led a team of developers in the design, development, and maintenance of web applications using React.js, achieving project objectives and exceeding client expectations.",
          "I've crafted a sleek HTML template for the RetroKit process, seamlessly blending HTML and CSS. The design features a clean layout, intuitive navigation, and visually appealing process steps, providing a user-friendly experience.",
        ],
      },
    ],
    imageUrl: "https://i.ibb.co/W3ZtTvJ/retrokit.png",

    projectImages: [
      {
        img: "https://i.ibb.co/MSNJ8tR/Screenshot-from-2023-11-05-10-44-21.png",
        title: "Hea Modal 1",
        rows: 2,
        cols: 2,
      },
      {
        img: "https://i.ibb.co/kQ7kxvB/hea-Model2.png",
        title: "Hea Modal2",
      },
      {
        img: "https://i.ibb.co/9ZYKbWW/hea-Model3.png",
        title: "Hea Modal3",
      },
      {
        img: "https://i.ibb.co/kB3CcT5/hea-Model4.png",
        title: "Hea Modal 4",
        cols: 2,
      },
    ],
    themeColor: "#353450",
    projectOverview:
      "RetroKit (RK) is a software platform that enables housing professionals to make evidence-based investment decisions for their energy upgrade projects.",
  },
  {
    typeOfContent: "all_website_frontend",
    projectName: "AraSASS",
    clientName: "PROFECIA",
    clientAddress: "INDIA,DUBAI",
    projectYear: "2023",
    projectType: "APARTMENT BILLING",
    clientWebsite: "",
    performedTasks: [
      {
        technologies: "REACT—BOOTSTRAP",
        tasks: [
          "Implemented calendar scheduler for efficient booking system management, streamlining appointment scheduling processes.",
          "Added an addon feature that enables users to access both free and paid services, with effective organization and user-friendly filters for easy navigation.",
          "Ensured responsiveness across all table types, headers, and content, providing a seamless experience on various screen sizes and devices.",
          "Addressed and resolved bug-related issues to deliver a smoother and error-free user experience.",
        ],
      },
    ],
    projectImages: [
      {
        img: "https://i.ibb.co/B45fmSg/Screenshot-from-2023-11-05-09-01-07.png",
        title: "Arasass 1",
        rows: 2,
        cols: 2,
      },
      {
        img: "https://i.ibb.co/KW7Nbfn/Screenshot-from-2023-11-05-09-00-34.png",
        title: "Arasass 2",
      },
      {
        img: "https://i.ibb.co/hXW0Wkt/Screenshot-from-2023-11-05-08-58-39.png",
        title: "Arasass 3",
      },
      {
        img: "https://i.ibb.co/dBjkj5n/Screenshot-from-2023-11-05-08-58-13.png",
        title: "Arasass 4",
        cols: 2,
      },
    ],

    description:
      "Implemented a calendar scheduler for efficient booking system management, added an addon feature for accessing free and paid services, ensured responsiveness across all screen sizes and devices, and addressed and resolved bug-related issues.",

    imageUrl:
      "https://i.ibb.co/xjjQc9M/Screenshot-from-2023-11-04-16-40-02.png",
    themeColor: "#00805d",
    projectOverview:
      "The Ara SAAS Framework is a software-as-a-service solution that can be hosted in the cloud or on-premises. With the primary premise of 'Building by configuration, not by code' many functionalities can be developed by an administrator or business user without the need for a developer until absolutely necessary. Building a new business component such as workflow management, CRM, or asset tracking can be completed in a few days by a single individual, rather than months of team effort.",
  },
  {
    typeOfContent: "all_website_backend",
    projectName: "2waay",
    clientName: "MOBYLOGIC",
    clientAddress: "UNITED STATES",
    projectYear: "2023",
    projectType: "APARTMENT BILLING",
    clientWebsite: "",
    projectImages: [
      {
        img: "https://i.ibb.co/CM7MWvt/2waay.jpg",
        title: "mobylogic",
        rows: 2,
        cols: 2,
      },
      {
        img: "https://i.ibb.co/9qmBxvk/Screenshot-from-2023-11-21-10-10-07.png",
        title: "2waay",
      },
      {
        img: "https://i.ibb.co/8j3MbDQ/campaigns.png",
        title: "campaigns",
      },
      {
        img: "https://i.ibb.co/GQqNLcv/collections.png",
        title: "mobylogic",
        cols: 2,
      },
      {
        img: " https://i.ibb.co/h1zv9SK/cancel-Requests.png",
        title: "2waay",
        rows: 2,
        cols: 2,
      },
      {
        img: "https://i.ibb.co/GW2bzvt/report.png",
        title: "stripe",
      },
      {
        img: "https://i.ibb.co/CH5DcFZ/billing.png",
        title: "mobylogic",
      },
      {
        img: "https://i.ibb.co/MZ5DwqN/users.png",
        title: "2waay",
        cols: 2,
      },
      {
        img: "https://i.ibb.co/BNsgMnD/2waay-App-jpg.jpg",
        title: "stripe",
        rows: 2,
        cols: 2,
      },
      {
        img: "https://i.ibb.co/MC384HJ/campaign-Conversion-Report.png",
        title: "stripe",
        cols: 2,
        rows: 2,
      },
    ],

    performedTasks: [
      {
        technologies: "NODEJS—FIRESTORE",
        tasks: [
          "Implemented chat functionality for both private and group interactions.",
          "Integrated payment functionality using the Sila platform, offering secure money transfers with anti-fraud tools and supporting different types of wallets for purchasers. ",
          "Utilized the Stripe platform to handle payment transactions with coins for both Stripe and Sila payments.",
          "Enabled shipping capabilities through the Sendle platform",
          "Added features for retrieving products, categories, deals, collections, and orders.",
        ],
      },
      {
        technologies: "GOLANG—FIRESTORE",
        tasks: [
          "Managed merchants and merchant users with various roles.",
          "Handled campaigns, various types of deals, and product collection.",
          "All kinds of reports were integrated, including sales, campaign conversion, campaign performance, deal sales, deal performance, low inventory, and billing.",
          "I developed business functionality for merchants and administrators in Sila with Stripe.",
          "All types of functionality are incorporated for company control.",
        ],
      },
    ],

    description:
      "As the main backend developer for Mobylogic's Two Waay project, which targets the US market, I implemented core features using Node.js and Golang, including chat functionality, payment integration, merchant management, campaign management, and reporting. ",

    imageUrl: "https://i.ibb.co/CM7MWvt/2waay.jpg",
    themeColor: "#ffe8e0",
    projectOverview:
      "2Waay is a Social Commerce App that combines Socializing, Entertainment and Shopping all into one platform. By bringing these features together we can create great experiences in ways that the older generation platforms cannot do.",
  },
  {
    typeOfContent: "all_website_backend",
    projectName: "DAMAC ONBOARDING",
    clientName: "RETROKIT",
    clientAddress: "IRELAND",
    projectYear: "2023",
    projectType: "APARTMENT BILLING",
    projectImages: [
      {
        img: "https://i.ibb.co/89wzrPY/onboarding.png",
        title: "damac",
        rows: 1,
        cols: 4,
      },
    ],
    clientWebsite: "",
    performedTasks: [
      {
        technologies: "REACT—REDUX—MATERIALUI",
        tasks: [
          "Added capabilities for looking up requests and tasks.",
          "After finishing a task, create a new one and lead the user to a new form.",
          "Document uploading depends on the form.",
          "Capabilities for rejecting, resetting, saving, and submitting each form processed.",
        ],
      },
    ],
    description:
      "implemented features for Damac's Dubai-based employee onboarding project, including request and task lookup, task creation, document uploading, and form processing.",
    imageUrl: "https://i.ibb.co/89wzrPY/onboarding.png",
    themeColor: "#73a3bd",
    projectOverview:
      "This project involves bringing together the right people, resources, and processes to effectively plan, manage, and deliver the project's objectives. ",
  },

  {
    typeOfContent: "app_backend_frontend",
    projectName: "Mawaqif",
    clientName: "RETROKIT",
    clientAddress: "IRELAND",
    projectYear: "2023",
    projectType: "APARTMENT BILLING",
    projectImages: [
      {
        img: "https://i.ibb.co/Vw6Myvg/Screenshot-from-2023-11-04-17-38-23.png",
        title: "mawaqif",
        rows: 2,
        cols: 4,
      },
    ],
    clientWebsite: "",
    performedTasks: [
      {
        technologies: "REACT-NATIVE",
        tasks: [
          "Using the Redux Toolkit, Estylesheet, and the Emotion component, I developed the chat and video interfaces for connecting one officer with another.",
          "I applied detox to test parking permit instances that interact like actual users.",
        ],
      },
      {
        technologies: "NODEJS—SOCKET",
        tasks: [
          "A chat function, developed via socket io, was provided for conversing with officers and emergency broadcasting messages to all users.",
        ],
      },
    ],
    description:
      "Developed the chat and video interfaces for connecting officers with each other using React Native, Redux Toolkit, Emotion, and Socket.io. I also tested parking permit instances that interact like actual users using Detox.",
    imageUrl:
      "https://i.ibb.co/Vw6Myvg/Screenshot-from-2023-11-04-17-38-23.png",
    themeColor: "#cfdfdf",
    projectOverview:
      "MAWAQiF offers the Rechargeable Card as a payment method for parking fees in the Emirate of Abu Dhabi.",
  },
];
export const aboutText: string =
  "I have over 2 years of experience as a software developer, with a focus on frontend and backend development. I am proficient in React, JavaScript, ES6, HTML, CSS, Bootstrap, Material-UI, Redux, SASS, Typescript, and React-Native. I also have sharpen experience with backend development using Node.js and Golang. I am looking forward to contributing to an exciting and fast-moving company, and I feel I can do so with my skill, extensive knowledge, and creativity.";

// eslint-disable-next-line react-refresh/only-export-components
export const socialLinks: SocialLink[] = [
  {
    name: "Github",
    link: "https://github.com/silviaplabon",
    logo: (
      <FaGithubSquare
        color="#ad5c51"
        size="40"
        backgroundColor="white"
        padding="0px!important"
      />
    ),
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/silviaplabon",
    logo: (
      <FaLinkedin color="#0072b1" size="40" href="" padding="0px!important" />
    ),
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100012297911476",
    logo: (
      <FaFacebookSquare
        color="#3b5998"
        size="40"
        href=""
        padding="0px!important"
      />
    ),
  },
];

// eslint-disable-next-line react-refresh/only-export-components
export const certificatesAndAcheivements: CertificateOrAcheivement[] = [
  {
    link: ScicRecommendation,
    name: "Letter of Recommendation (Programming Hero)",
    type: "Certificate",
    credentialId: "",
    credentialLink: "",
    subtitle: `During my participation in the Endgame Programme for the two months, I actively contributed to the "Doctors Chaai" project with the SparrowDevs team. Under pressure, I honed my technical and communication skills, showcasing dedication and an inquisitive approach. The endorsement highlights my successful exposure to various activities in the web development domain and recommends me for opportunities in this field, acknowledging my talent and hard work. I am grateful for the valuable experience gained and look forward to applying my skills in future endeavors.`,
  },
  {
    link: FullStackJsCourse,
    name: "The Complete Full Stack Javascript Course",
    type: "Certificate",
    credentialId: "UC-b9b9c07f-b0d1-4adc-a98a-4c47e686467d",
    credentialLink:
      "https://www.udemy.com/certificate/UC-b9b9c07f-b0d1-4adc-a98a-4c47e686467d/",
    subtitle:
      "Enrolling in this course has been a game-changer, enabling me to master JavaScript and embark on a fulfilling journey as a full-stack web developer. Through hands-on coding projects, I've acquired proficiency in essential technologies like ReactJS, NodeJS, Redux, Material-UI, and socket programming, gaining practical skills that have significantly accelerated my development expertise.",
  },
  {
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-418fe5f4-996f-47e7-ac93-c9e582c45d30.jpg",
    name: " The Web Developer Bootcamp 2021",
    type: "Certificate",
    credentialId: "UC-418fe5f4-996f-47e7-ac93-c9e582c45d30",
    credentialLink:
      "https://www.udemy.com/certificate/UC-418fe5f4-996f-47e7-ac93-c9e582c45d30",
    subtitle:
      " I've acquired a diverse skill set encompassing front-end technologies like HTML, CSS, Bootstrap, Javascript, jQuery, Google Fonts, and Font Awesome. On the backend, I've gained a moderate proficiency in Node.js and MongoDB, complemented by a solid understanding of crucial concepts such as REST API, offering me a well-rounded foundation in web development.",
  },
  {
    link: ScicImage,
    name: "Complete Web Development Course with Jhanakar Mahbub",
    type: "Certificate",
    credentialId: "",
    credentialLink: "",
    subtitle:
      "Through web development courses, I've acquired a thorough knowledge of creating websites and web applications, delving into crucial topics such as Internet Basics, HTML, CSS, and JavaScript. This learning journey has equipped me with the skills to design and construct functional and visually engaging online platforms.",
  },
];
