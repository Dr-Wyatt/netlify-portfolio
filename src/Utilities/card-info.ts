import { ProjectCardInterface } from "../Interfaces/projectCard";

const cardInfo: Array<ProjectCardInterface> = [
  {
    title: "Jersey Sponsor",
    iconURL: "",
    appDescription:
      "Jersey Sponsor is a Web and Mobile app for Athletes of all levels to receive sponsorships on their terms. Their goal is to give the power back to the Athletes.",
    homePage: "https://www.jerseysponsor.com/",
    appLink: "https://jerseysponsor.app/signup",
    explored: [
      "Contributed to creating the Database Schema surrounding key features",
      "Developed the API endpoint service for capturing Athlete's Social Media followers",
      "Developed the API endpoint service for Notifications",
      "Built out the view for the a key feature in the Mobile App",
    ],
    appInfo: "",
  },
  {
    title: "Pups and Cups",
    iconURL: "",
    appDescription: "Find your local coffee shop and nearby dog parks!",
    appLink: "https://compassionate-swirles-7b34e8.netlify.app/",
    explored: [
      "Built with Typescript and React!",
      "Created simple, easy to use front end view using Material-UI",
      "Utilized multiple Google Maps API's to display, and search on the map",
      "Employed React-Redux to create a global store for the entire application to use for seeing reviews and favoriting coffee shops",
    ],
    appInfo:
      "Pups and Cups was a fun project I worked on with a colleague. The concept is, a user would search for a dog park close to them, and then the app would automatically show them coffee shops close to that dog park to visit afterwards. You can grab a cup of joe for yourself, and a puppy-chino for your best friend. Working on this project allowed me to explore more on technologies I've only touched on a few times in other projects. I dove deep into using Typescript with React, structuring the site using Material-UI, navigating the intricacies of the Google Maps API, and utilizing Redux to create a centralized store for the coffee shop reviews and streamline saving favorites in Local Storage.",
  },
  {
    title: "To Be Determined",
    iconURL: "",
    appDescription: "New Project Goes Here",
    appLink: "",
    explored: ["one", "two", "three"],
    appInfo: "What will this project be?",
  },
];

export default cardInfo;
