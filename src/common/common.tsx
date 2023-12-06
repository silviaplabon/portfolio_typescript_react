import {
  Blog,
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

import { GiHeadphones } from "react-icons/gi";
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
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*RoyqO3mzBuHTcBPX0GZMEw.jpeg",
    id: 2,
    published_date: "May 5, 2021",
    subtitle:
      "Components are created (mounted on the DOM), modified, and then die (unmount on DOM). A component lifecycle is a term used to describe this process. Mounting, Updating, and Unmounting are the three main phases of the lifecycle 1.1.1. Mounting:",
  },
];
export const skillsArea: SkillArea[] = [
  {
    name: "React JS",
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subtitle:
      "Dedicated to React JS, I utilize this cutting-edge framework not just as a tool but as a vision for my work. I specialize in managing and crafting extensive React JS applications, driven by my passion for excellence.",
  },
  {
    name: "Node JS",
    image:
      "https://blog.logrocket.com/wp-content/uploads/2020/11/context-aware-logging-node-js.png?w=730",
    subtitle:
      "I've harnessed the power of Node.js to create robust APIs. These APIs serve as the backbone for feature-rich, versatile, and scalable applications, empowering developers of all levels. Explore the limitless potential of API development with my expertise.",
  },
  {
    name: "Golang",
    image:
      "https://www.contrastsecurity.com/hubfs/Blog_05062021_Secure%20Coding%20with%20Go.png",
    subtitle:
      "I've harnessed the power of Golang to create robust APIs. These APIs serve as the backbone for feature-rich, versatile, and scalable applications, empowering developers of all levels. Explore the limitless potential of API development with my expertise.",
  },
  {
    name: "Software Engineer",

    image:
      "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2022/01/What%20Aspiring%20Software%20Engineers%20Need%20To%20Know%20When%20Starting%20Their%20Career%20(2)_1642083611.jpg",
    subtitle:
      "I began my career as a Software Engineer, where I took on the responsibility of designing, maintaining, and constructing scalable applications using a variety of tools and technologies.",
  },
];

export const contacts: Contact[] = [
  {
    name: "Email",
    imageLink: "https://i.ibb.co/1nZTBZ7/stripe.jpg",
    title: "silviaPlabon@gmail.com",
    color: "#02c1ff",
    icon: <HiOutlineMailOpen></HiOutlineMailOpen>,
  },
  {
    name: "Address",
    imageLink: "https://i.ibb.co/1nZTBZ7/stripe.jpg",
    title: "Akborshah,Chittagong",
    color: "#ff014f",
    icon: <FiMapPin></FiMapPin>,
  },
  {
    name: "Phone",
    imageLink: "https://i.ibb.co/1nZTBZ7/stripe.jpg",
    title: "+8801743202786",
    color: "#fec447",
    icon: <GiHeadphones></GiHeadphones>,
  },
];
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
    logo: "https://p1.hiclipart.com/preview/751/223/611/digital-marketing-icon-web-design-web-development-frontend-web-development-search-engine-optimization-user-interface-design-web-application-wordpress-png-clipart-thumbnail.jpg",
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
    ],
  },
  {
    title: "Back-end Development",
    logo: "https://static.vecteezy.com/system/resources/previews/009/046/868/non_2x/backend-development-glyph-circle-background-icon-vector.jpg",
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
    logo: "data:image/jpeg;base64,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",
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
        title: "Hea_model_1",
        rows: 2,
        cols: 2,
      },
      {
        img: "https://i.ibb.co/kQ7kxvB/hea-Model2.png",
        title: "Burger",
      },
      {
        img: "https://i.ibb.co/9ZYKbWW/hea-Model3.png",
        title: "Camera",
      },
      {
        img: "https://i.ibb.co/kB3CcT5/hea-Model4.png",
        title: "Coffee",
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
        title: "Breakfast",
        rows: 2,
        cols: 2,
      },
      {
        img: "https://i.ibb.co/KW7Nbfn/Screenshot-from-2023-11-05-09-00-34.png",
        title: "Burger",
      },
      {
        img: "https://i.ibb.co/hXW0Wkt/Screenshot-from-2023-11-05-08-58-39.png",
        title: "Camera",
      },
      {
        img: "https://i.ibb.co/dBjkj5n/Screenshot-from-2023-11-05-08-58-13.png",
        title: "admin_Tasks",
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

export const socialLinks: SocialLink[] = [
  {
    link: "https://github.com/silviaplabon",
    logo: <FaGithubSquare color="#ad5c51" size="40" padding="0px!important" />,
  },
  {
    link: "https://www.linkedin.com/in/silviaplabon",
    logo: (
      <FaLinkedin color="#0072b1" size="40" href="" padding="0px!important" />
    ),
  },
  {
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
