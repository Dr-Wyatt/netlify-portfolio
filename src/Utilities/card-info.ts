import { ProjectCardInterface } from "../Interfaces/projectCard";

const cardInfo: Array<ProjectCardInterface> = [
  {
    title: "Jersey Sponsor",
    iconURL: "JerseySponsor",
    appDescription:
      "Jersey Sponsor is a Web and Mobile app for Athletes of all levels to receive sponsorships on the Athlete's terms. Their goal is to give the power back to the Athletes.",
    homePage: "https://www.jerseysponsor.com/",
    appLink: "https://jerseysponsor.app/signup",
    explored: [
      "Contributed to creating the Database Schema surrounding Notifications, Athlete Lineups, Social Media Accounts and Community Activity",
      "Developed the API endpoint service for capturing Athlete's Social Media followers",
      "Developed the API endpoint service for Notifications",
      "Developed the Database service for Community Activity",
      "Built out the view for the Proposals feature in the Mobile App",
    ],
    appInfo: "I worked on the Jersey Sponsor application as a contractor. The front end, back end and mobile app were all built in 2 months, so the pace was extremely fast. Working on this project gave me exposure to Typescript, better styling tools and techniques, and implementing better backend structures.",
  },
  {
    title: "Pups and Cups",
    iconURL: "PawPrint",
    appDescription: "Find your local coffee shop and nearby dog parks!",
    appLink: "https://compassionate-swirles-7b34e8.netlify.app/",
    explored: [
      "Built with Typescript and React!",
      "Created simple, easy to use front end view using Material-UI",
      "Utilized multiple Google Maps API's to display, and search on the map",
      "Employed React-Redux to create a global store for the entire application to use for seeing reviews and favoriting coffee shops",
    ],
    appInfo:
      "Pups and Cups was a fun project I worked on with a colleague. The concept is, a user would search for a dog park close to them, and then the app would automatically show them coffee shops close to that dog park to visit afterwards. You can grab a cup of joe for yourself, and a puppy-chino for your best friend.\nWorking on this project allowed me to explore and gain more experience with different technologies. I dove deep into using Typescript with React, structuring the site using Material-UI, navigating the intricacies of the Google Maps API, and utilizing Redux to create a centralized store for the coffee shop reviews and streamline saving favorites in Local Storage.",
  },
  {
    title: "Likely",
    iconURL: "Likely",
    appDescription: "Likely is an app that gives small groups the opportunity to plan events, chat, post photos, and assign hilarious superlatives to one another on the go. It's all the best parts of Facebook with the added benefit of not having to actually be on Facebook!",
    appLink: "https://likely-b2m.herokuapp.com/",
    explored: ["Contributed to Database architecture and schema", "Implemented Login flow", "Structured Backend API's for proper data flow throughout application", "Implemented Error handling on forms"],
    appInfo: "Likely is the final group project from the Northwestern Full Stack Bootcamp I attended. It provided great exposure to working in a team setting and collaborating with my peers. It was a joy working on a few key aspects of the app and then seeing everyone's contributions come together to create a fully functioning app.\nTo experience the app, please create your own login (dummy emails work just fine), then create a group to add other stock users to fully experience this app. If you don't feel like creating an account, please login as (email: kramer@email.com, password: kramer), to enjoy this app!",
  },
];

/*

Unorthodox background offers fresh perspective

I'm a goal oriented web developer. That means when I'm given a project, I want to fully understand the end result, and then go above and beyond those basic requests. I offer a fresh perspective

Help people achieve their goals but also provide alternative options/perspective on reaching the desired outcome

problem solving

like challenges
*/

export default cardInfo;
