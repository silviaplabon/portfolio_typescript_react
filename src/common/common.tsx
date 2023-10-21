import { Blog, Contact, SkillArea } from "./types";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";
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
    name: "Var Vs Let Vs Const",
    link: "https://silviaplabon.medium.com/js-popular-method-of-string-b15a9c8a9839",
    image: "https://i.ibb.co/2nDX5nf/javascript1or.jpg",
    id: 2,
    published_date: "May 5, 2021",
    subtitle:
      "As a result of the release of ES6, two new methods of creating variables have been introduced: let and const. Preceding a discussion of the let and const keywords, we will look at how to create a variable in javascript in the most basic method possible, by utilizing the var keyword.",
  },
];
export const skillsArea: SkillArea[] = [
  {
    name: "React JS",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnMAnnb6Ikf_8-edCnBFrTIVK__lAhwXBF-yr-JMQa9Zc2o6JJe5LnQHE23tlOICUxtIM&usqp=CAU",
    subtitle:
      "If you wish to run a business with a number of merchants, you must use a multi-partner platform service from Stripe. There are three sorts of accounts that may be used for a multi-partner platform. A standard linked account can only accept direct charges, but a custom or express connected account can accept destination charges as well as separate costs/transfers. You can select an account based on your charge type.",
  },
  {
    name:"Node JS",
    image: "https://blog.logrocket.com/wp-content/uploads/2020/11/context-aware-logging-node-js.png?w=730",
    subtitle:
      "10 Javascript String Methods You Should Know:charAt(), concat(), includes(), startsWith(), endsWith(), indexOf(), lastIndexOf(), replace(), slice(), split() charAt(): Amongst two ways to access an individual character in a string, one way is using the charAt() method where the index represents the position of a character and characters are indexed from left to right. The index number starts from 0 and goes to length-1(length property returns the length of a",
  },
  {
    name: "Golang",
  
    image: "https://www.contrastsecurity.com/hubfs/Blog_05062021_Secure%20Coding%20with%20Go.png",
    subtitle:
      "As a result of the release of ES6, two new methods of creating variables have been introduced: let and const. Preceding a discussion of the let and const keywords, we will look at how to create a variable in javascript in the most basic method possible, by utilizing the var keyword.",
  },
  {
    name: "Software Engineer",
  
    image: "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2022/01/What%20Aspiring%20Software%20Engineers%20Need%20To%20Know%20When%20Starting%20Their%20Career%20(2)_1642083611.jpg",
    subtitle:
      "As a result of the release of ES6, two new methods of creating variables have been introduced: let and const. Preceding a discussion of the let and const keywords, we will look at how to create a variable in javascript in the most basic method possible, by utilizing the var keyword.",
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
