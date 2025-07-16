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
// import ScicImage from "../assets/Scic_Silvia_Satoar_Plabon.jpg";
import ScicRecommendation from "../assets/SCICRecommendation.jpg";
import BlogReactImage from "../assets/blogReact.jpg";
import FullStackJsCourse from "../assets/fullStackJsCourse.jpg";
import { AiOutlineConsoleSql } from "react-icons/ai";
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
import ToraniWebsite from "../assets/torani_website.jpg";

import retrokit_image_1 from "../assets/retrokit_image_1.png";
import retrokit_image_2 from "../assets/retrokit_image_2.png";
import retrokit_image_3 from "../assets/retrokit_image_3.png";
import retrokit_image_4 from "../assets/retrokit_image_4.png";
import retrokit_image_5 from "../assets/retrokit_image_5.png";
import Ara_image_1 from "../assets/Ara_1.png";
import Ara_image_2 from "../assets/Ara_2.png";
import Ara_image_3 from "../assets/Ara_3.png";
import Ara_image_4 from "../assets/Ara_4.png";
import Ara_image_0 from "../assets/Ara_0.png";
import waay_1 from "../assets/2waay_1.jpg";
import waay_2 from "../assets/2waay_2.png";
import waay_3 from "../assets/2waay_3.png";
import waay_4 from "../assets/2waay_4.png";
import waay_5 from "../assets/2waay_5.png";
import waay_6 from "../assets/2waay_6.png";
import waay_7 from "../assets/2waay_7.png";
import waay_8 from "../assets/2waay_8.png";
import waay_9 from "../assets/2waay_9.jpg";
import waay_10 from "../assets/2waay_10.png";
import onboarding from "../assets/onboarding.png";
import onboarding1 from "../assets/onboarding-1.png";
import torani_1 from "../assets/torani_1.png";
import torani_2 from "../assets/torani_2.jpeg";
import torani_3 from "../assets/torani_3.jpeg";
import torani_4 from "../assets/torani_4.jpeg";
import mawaqif_1 from "../assets/mawaqif_1.png";
import stripe from "../assets/stripe.jpg";
import javascriptImage from "../assets/javascript.jpg";
import javascript1Image from "../assets/javascript1or.jpg";
import tryCatchImage from "../assets/tryCatch.png";
import Resignation_home from "../assets/Resignation_1.png";
import Resignation_emp_dashboard from "../assets/Resignation_emp_dashboard.png";
import Resignation_action from "../assets/Resignation_employee_view.png";
import Resignation_request_view from "../assets/Resignation_request_view.png";

import HRPolicies1 from "../assets/HR_policies_1.png";

import HRPolicies2 from "../assets/HR_policies_2.png";

import HRPolicies3 from "../assets/Hr_policies_3.png";

import HRPoliciesPublicHolidays from "../assets/Hr_policies_Public_holidays.png";

import HRPoliciesLegalEntityByCountries from "../assets/Hr_Policies_4_Legal_entity_by_countries.png";
import RGS_1 from "../assets/RGS_1.png";

import RGS_2 from "../assets/RGS_2.png";
import RGS_3 from "../assets/RGS_3.png";
import RGS_4 from "../assets/RGS_4.png";
import RGS_5 from "../assets/RGS_5.png";
import onboarding_report from '../assets/onboarding_report.png'
import onboarding_mytasks from '../assets/onboarding_mytasks.png'
import onboarding_projectAllocation from '../assets/onboarding_project_allocation.png'

// eslint-disable-next-line react-refresh/only-export-components
export const blogs: Blog[] = [
  {
    name: "Stripe Multipartner platform for the express or custom-connected account",
    link: "https://medium.com/@silviaplabon/stripe-multipartner-platform-for-the-express-or-custom-connected-account-2f8da15d3dca",
    image: stripe,
    id: 0,
    published_date: "Feb 26, 2023",
    subtitle:
      "If you wish to run a business with a number of merchants, you must use a multi-partner platform service from Stripe. There are three sorts of accounts that may be used for a multi-partner platform. A standard linked account can only accept direct charges, but a custom or express connected account can accept destination charges as well as separate costs/transfers. You can select an account based on your charge type.",
  },
  {
    name: "JS Popular Method Of String",
    link: "https://silviaplabon.medium.com/js-popular-method-of-string-b15a9c8a9839",
    image: javascriptImage,
    id: 1,
    published_date: "May 5, 2021",
    subtitle:
      "10 Javascript String Methods You Should Know:charAt(), concat(), includes(), startsWith(), endsWith(), indexOf(), lastIndexOf(), replace(), slice(), split() charAt(): Amongst two ways to access an individual character in a string, one way is using the charAt() method where the index represents the position of a character and characters are indexed from left to right. The index number starts from 0 and goes to length-1(length property returns the length of a",
  },
  {
    name: "Var Vs Let Vs Const",
    link: "https://silviaplabon.medium.com/js-popular-method-of-string-b15a9c8a9839",
    image: javascript1Image,
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
    link: tryCatchImage,
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
    title: "Tecom, Barsha Heights",
    color: "#ff014f",
    icon: <FiMapPin size="21"></FiMapPin>,
  },
  {
    name: "Phone",
    imageLink: "https://i.ibb.co/1nZTBZ7/stripe.jpg",
    title: "+971582614341",
    color: "#fec447",
    icon: <GiHeadphones size="21"></GiHeadphones>,
  },
];
// eslint-disable-next-line react-refresh/only-export-components
export const experiences: Experience[] = [
  {
    company: "Damac Properties, Dubai",
    employmentTime: "May 15,2024 - Present",
    description:
      "Create responsive webpages with React. I have experience writing with TypeScript and JavaScript, as well as designing using Tailwind, Bootstrap, and Material UI to create intuitive and visually attractive user interfaces. I am committed to producing high-quality code and smooth user experiences through efficient front-end development. I help to create cutting-edge online applications by using my knowledge of React and current design frameworks.",
    skills: [
      "React",
      "Typescript",
      "Javascript",
      "Tailwind",
      "Bootstrap",
      "Material",
      "Redux",
      "Nodejs",
    ],
    position: "Senior Software Engineer",
  },
  {
    company: "Profecia Links Consulting Private LTD, Dubai",
    employmentTime: "Aug 2021- May 2024",
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
      "SQL",
    ],
    position: "Software Engineer",
  },
  {
    company: "Programming Hero",
    employmentTime: "Jan 2021 - July 2021",
    description:
      "Collaborated closely with a cross-functional team to deliver real-world project solutions.Enhanced problem-solving abilities through hands-on web development challenges.",
    skills: [],
    position: "Internship",
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
      {
        name: "SQL",
        logo: <AiOutlineConsoleSql size="30"></AiOutlineConsoleSql>,
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
  phone: "+971582614341",
  address: "Tecom, Barsha Heights",
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
    typeOfContent: "all_website_backend",
    projectName: "Resignation",
    clientName: "Damac",
    clientAddress: "South San Francisco, California, United States",
    projectYear: "2024",
    projectType: "SYRUP WEBSITE",
    clientWebsite: "torani.com",
    description:
      "Multi-level resignation process for Damac employees, enabling streamlined approvals from managers, HODs, HR, and CMO, with real-time tracking and HR decision support.",
    performedTasks: [
      {
        technologies: "REACT",
        tasks: [
          "Designed and developed a multi-level employee resignation workflow with approvals from manager, HOD, HR, and CMO.",
          "Built employee-facing UI for resignation request creation and a dashboard showing assigned tasks based on role.",
          "Used React, Redux, TypeScript, RTK Query, and React Hook Form for dynamic UI and real-time updates.",
          "Enabled HR decision support through role-based views and actionable insights.",
        ],
      },
    ],
    imageUrl: Resignation_home,

    projectImages: [
      {
        img: Resignation_home,
        title: "Resignation Dashboard",
        rows: 2,
        cols: 2,
      },
      {
        img: Resignation_emp_dashboard,
        title: "Employee Dashboard",
      },
      {
        img: Resignation_request_view,
        title: "Request View",
      },
      {
        img: Resignation_action,
        title: "HODHRCMOACTION",
        cols: 2,
      },
    ],
    themeColor: "#353450",
    projectOverview: "",
  },
  {
    typeOfContent: "all_website_frontend",
    projectName: "HR Policies",
    clientName: "Damac",
    clientAddress: "South San Francisco, California, United States",
    projectYear: "2024",
    projectType: "SYRUP WEBSITE",
    clientWebsite: "torani.com",
    description:
      "Built a dynamic HR policy module based on country, displaying location and company-specific policies for DAMAC Data Center employees.",
    performedTasks: [
      {
        technologies: "REACT,NODEJS,SQL",
        tasks: [
          "Built Dynamic HR Policy Module – Designed a country-specific HR policy system for DAMAC Data Center employees.",
          "Location-Based Policy Display – Displayed relevant policies based on employee location and legal entity.",
          "Business Unit Filtering – Enabled filtering of policies by employee's business unit for quick access.",
          "Country-Specific Frameworks – Defined unique frameworks per country including legal entities and holidays.",
          "Legal Entity Management – Created components to manage legal entities linked with locations and policies.",
          "Location Mapping – Mapped office locations to countries and legal entities.",
          "Integrated Public Holidays – Added region-wise public holidays into the policy module.",
          "Policy Versioning – Implemented version control for tracking policy updates.",
          "Role-Based Access – Set access permissions for employees and HR teams.",
          "Intuitive UI – Designed a clean UI for easy policy navigation and filtering.",
        ],
      },
    ],
    imageUrl: HRPolicies1,
    projectImages: [
      {
        img: HRPolicies1,
        title: "Hr Policies Dashboard",
        rows: 2,
        cols: 2,
      },
      {
        img: HRPolicies2,
        title: "Hr policy Dashboard",
      },
      {
        img: HRPolicies3,
        title: "HR Policies 3 ",
      },
      {
        img: HRPoliciesPublicHolidays,
        title: "public holidays hr policies",
        cols: 2,
      },
      {
        img: HRPoliciesLegalEntityByCountries,
        title: "Hr policies legal entity by countries",
        cols: 2,
      },
    ],
    themeColor: "rgb(20, 160, 152)",
    projectOverview: "",
  },

  {
    typeOfContent: "all_website_frontend",
    projectName: "Rental Guarantee & Claims",
    clientName: "Damac",
    clientAddress: "South San Francisco, California, United States",
    projectYear: "2024",
    projectType: "SYRUP WEBSITE",
    clientWebsite: "torani.com",
    description:
      "Designed and automated the rental guarantee and claims processes for DAMAC. Ensured timely landlord payments upon tenant default, implemented discount policies, and streamlined payout workflows with a clean UI and tracking system.",
    performedTasks: [
      {
        technologies: "REACT",
        tasks: [
          "Rental Guarantee Process Design – Designed registration and claims flow including qualification logic based on policies.",
          "Automated Landlord Payouts – Automated timely payments in case of tenant defaults with offline/manual interface.",
          "Intuitive Guarantee Management UI – Built a dashboard for tracking units, offers, payout status, and registration details.",
          "Discount Policy Engine – Implemented dynamic discount logic based on policy rules and value ranges.",
          "Booking Offers Display – Integrated unit-level data: Unit Type, Reg Date, Status, Qualified, Payable, Paid, Balance, and Customer Info.",
          "Payout Processing – Displayed payable, paid, and balance amounts with transaction reference support and hold flags.",
          "Policy-Based Qualification – Evaluated unit eligibility and payment terms using defined business rules and offer IDs.",
          "Manual Payout Interface – Enabled offline/manual transaction entry with references for audit and tracking.",
        ],
      },
    ],
    imageUrl: RGS_1,
    projectImages: [
      {
        img: RGS_1,
        title: "Hr Policies Dashboard",
        rows: 2,
        cols: 2,
      },
      {
        img: RGS_2,
        title: "Hr policy Dashboard",
      },
      {
        img: RGS_3,
        title: "HR Policies 3 ",
      },
      {
        img: RGS_4,
        title: "public holidays hr policies",
   
      },
      {
        img: RGS_5,
        title: "Hr policies legal entity by countries",
        // cols: 2,
      },
    ],
    themeColor: "rgb(51, 113, 158)",
    projectOverview: "",
  },

  {
    typeOfContent: "all_website_backend",
    projectName: "TORANI",
    clientName: "TORANI",
    clientAddress: "South San Francisco, California, United States",
    projectYear: "2024",
    projectType: "SYRUP WEBSITE",
    clientWebsite: "torani.com",
    description:
      "For business growth, particularly within the flavored syrup and beverage industry at Torani in the USA, utilized SQL queries in Google BigQuery and Snowflake to analyze website performance, track conversion metrics, and optimize advertising efforts, driving actionable insights.",
    performedTasks: [
      {
        technologies: "SQL-NODEJS",
        tasks: [
          "Spearheaded the analysis and optimization of key performance metrics essential to business operations.",
          "Utilized expertise in SQL queries within Google BigQuery and Snowflake for efficient data processing.",
          "Extracted and analyzed website performance metrics like unique visitors, repeat visitors, sessions, and engagement duration to understand user behavior.",
          "Tracked conversion-related metrics such as cart abandonment rate and average time to conversion to enhance user experience and increase conversion rates.",
          "Conducted detailed analysis of revenue and sales metrics, including revenue per customer, customer lifetime value, and average order value, guiding strategic marketing decisions.",
          "Managed advertising performance metrics across various channels including Amazon, Google, and Bing, optimizing advertising campaigns for maximum ROI.",
          "Leveraged BigQuery, Snowflake, and SQL to generate actionable insights into marketing effectiveness, website performance, and overall business health.Enabled data-driven decision-making, identification of optimization opportunities, and sustained business growth through data analysis.",
        ],
      },
    ],
    imageUrl: ToraniWebsite,

    projectImages: [
      {
        img: torani_1,
        title: "Torani Website Image 1",
        rows: 2,
        cols: 2,
      },
      {
        img: torani_2,
        title: "Torani Website Image 2",
      },
      {
        img: torani_3,
        title: "Torani Website Image 3",
      },
      {
        img: torani_4,
        title: "Torani Website Image 4",
        cols: 2,
      },
    ],
    themeColor: "#d8392f",
    projectOverview:
      "Utilized SQL queries in Google BigQuery and Snowflake to analyze website performance, track conversion metrics, and optimize advertising efforts, driving actionable insights for business growth, particularly within the flavored syrup and beverage industry. Specifically tailored strategies and insights to align with the operations, market dynamics, and product offerings of Torani, a distinguished manufacturer with a legacy of crafting high-quality flavored syrups, sauces, and beverage bases since 1925, catering to cafes, restaurants, and households globally.",
  },
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
    imageUrl: retrokit_image_1,

    projectImages: [
      {
        img: retrokit_image_1,
        title: "Hea Modal 1",
        rows: 2,
        cols: 2,
      },
      {
        img: retrokit_image_2,
        title: "Hea Modal2",
      },
      {
        img: retrokit_image_3,
        title: "Hea Modal3",
      },
      {
        img: retrokit_image_4,
        title: "Hea Modal 4",
      },
      {
        img: retrokit_image_5,
        title: "Hea Modal 5",
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
        img: Ara_image_1,
        title: "Arasass 1",
        rows: 2,
        cols: 2,
      },
      {
        img: Ara_image_2,
        title: "Arasass 2",
      },
      {
        img: Ara_image_3,
        title: "Arasass 3",
      },
      {
        img: Ara_image_4,
        title: "Arasass 4",
        cols: 2,
      },
    ],

    description:
      "Implemented a calendar scheduler for efficient booking system management, added an addon feature for accessing free and paid services, ensured responsiveness across all screen sizes and devices, and addressed and resolved bug-related issues.",

    imageUrl: Ara_image_0,
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
        img: waay_1,
        title: "mobylogic",
        rows: 2,
        cols: 2,
      },
      {
        img: waay_2,
        title: "2waay",
      },
      {
        img: waay_3,
        title: "campaigns",
      },
      {
        img: waay_4,
        title: "mobylogic",
        cols: 2,
      },
      {
        img: waay_5,
        title: "2waay",
        rows: 2,
        cols: 2,
      },
      {
        img: waay_6,
        title: "stripe",
      },
      {
        img: waay_7,
        title: "mobylogic",
      },
      {
        img: waay_8,
        title: "2waay",
        cols: 2,
      },
      {
        img: waay_9,
        title: "stripe",
        rows: 2,
        cols: 2,
      },
      {
        img: waay_10,
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
      {
        technologies: "REACT",
        tasks: [
          "Collaborated with the frontend team to ensure a visually engaging platform.",
          "Optimized the interface for consistency and performance across devices.",
          "Identified and fixed bugs in React components to enhance stability.",
          "Implemented new features and improvements based on client's feedback.",
        ],
      },
    ],

    description:
      "As the main backend developer for Mobylogic's Two Waay project, which targets the US market, I implemented core features using Node.js and Golang, including chat functionality, payment integration, merchant management, campaign management, and reporting. But my involvement didn’t stop at the backend. As the backend tasks were mostly done, I began contributing to the frontend, leveraging React to create seamless user experiences. By collaborating closely with the frontend team, I ensured that the platform was intuitive and visually engaging, providing users with a fluid interaction with the Two Waay platform.",

    imageUrl: waay_1,
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
        img: onboarding,
        title: "damac",
        rows: 2,
        cols: 2,
      },
      {
        img: onboarding1,
        title: "damac",
     
      },
       {
        img: onboarding_report,
        title: "damac",
     
      },
       {
        img: onboarding_mytasks,
        title: "damac",
      },  {
        img: onboarding_projectAllocation,
        title: "damac",
    
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
    imageUrl: onboarding,
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
        img: mawaqif_1,
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
    imageUrl: mawaqif_1,
    themeColor: "#cfdfdf",
    projectOverview:
      "MAWAQIF offers the Rechargeable Card as a payment method for parking fees in United Arab Emirates.",
  },
];

const startDate = new Date("2020-12-31"); // Assuming the start date is July 1st, 2019
const currentDate = new Date();

let diffInMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12;
diffInMonths -= currentDate.getMonth();
diffInMonths += currentDate.getMonth();
diffInMonths = diffInMonths <= 0 ? 0 : diffInMonths;
const years = Math.floor(diffInMonths / 12);
const months = diffInMonths % 12;
console.log(months, years, "months", diffInMonths);
const updatedYears = months > 6 ? years + 1 : years;
export const aboutText: string = `I have around ${updatedYears} years of experience as a software developer, with a focus on frontend and backend development. I am proficient in React, JavaScript, ES6, HTML, CSS, Bootstrap, Material-UI, Redux, SASS, Typescript, and React-Native. I also have sharpen experience with backend development using Node.js and Golang. I am looking forward to contributing to an exciting and fast-moving company, and I feel I can do so with my skill, extensive knowledge, and creativity.`;

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
        id="faGithub"
        class="faGithub"
      />
    ),
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/silviaplabon",
    logo: (
      <FaLinkedin
        color="#0072b1"
        size="40"
        href=""
        padding="0px!important"
        id="faLinkedIn"
        class="faLinkedIn"
      />
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
        id="faFacebook"
        class="faFacebook"
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
  // {
  //   link: ScicImage,
  //   name: "Complete Web Development Course with Jhanakar Mahbub",
  //   type: "Certificate",
  //   credentialId: "",
  //   credentialLink: "",
  //   subtitle:
  //     "Through web development courses, I've acquired a thorough knowledge of creating websites and web applications, delving into crucial topics such as Internet Basics, HTML, CSS, and JavaScript. This learning journey has equipped me with the skills to design and construct functional and visually engaging online platforms.",
  // },
];
