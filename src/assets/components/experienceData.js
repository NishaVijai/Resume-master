import gitHubImage from "../images/github.svg";
import gitHubHostedImage from "../images/github-hosted.svg";
import netlifyImage from "../images/netlify.svg";
import herokuImage from "../images/heroku.svg";
import filarkivLinkImage from "../images/links-line.svg";

const expData = [
  {
    id: 1,
    date: "October 2021 - Present",
    title: "Front-end web developer",
    project: "JO Informatik - Helsingør",
    compLink: "https://www.jo-informatik.dk/om-jo-informatik/",
    description: [
      {
        id: 1,
        des: "Public FilArkiv - CSS, WCAG - Web Accessibility",
      },
      {
        id: 2,
        des: "Blazor components, SCSS, C#",
      },
    ],
    links: [
      {
        id: 1,
        projLink: "https://public.filarkiv.dk/",
        projImgLink: filarkivLinkImage,
        altText: "Public FilArkiv Link",
        imgTitle: "Image for Public FilArkiv Link",
        linkName: "Public FilArkiv",
      },
    ],
  },
  {
    id: 2,
    date: "September 2020 - October 2021",
    title: "Front-end web developer",
    project: "JO Informatik - Helsingør",
    compLink: "https://www.jo-informatik.dk/om-jo-informatik/",
    description: [
      {
        id: 1,
        des: "QGIS Python plugin using QT Designer and Python",
      },
      {
        id: 2,
        des: "Kortkomponent using HTML, CSS, Javascript",
      },
      {
        id: 3,
        des: "Vue Kortkomponent using Vue, Typescript",
      },
    ],
    links: [
      {
        id: 1,
        projLink: "https://github.com/JO-Informatik-ApS/FlyFotosDK4QGIS",
        projImgLink: gitHubImage,
        altText: "GitHub repository link of FlyFotos Project",
        imgTitle: "GitHub Image for FlyFotos Project",
        linkName: "GitHub Repo Link",
      },
    ],
  },
  {
    id: 3,
    date: "October 2019 - November 2019",
    title: "front-end web developer",
    project: "chingu-voyage 12",
    compLink: "https://chingu.io/",
    description: [
      {
        id: 1,
        des: "Built a cloned vaersgo single page website using HTML,CSS and React",
      },
      {
        id: 2,
        des: "It is a ecommerce website, which can be used to purchase home appliances",
      },
      {
        id: 3,
        des: "Learned to use lazy loading for the image heavy site like this and used Grid layout and practiced to host this site using Netlify",
      },
    ],
    links: [
      {
        id: 1,
        projLink: "https://github.com/chingu-voyages/v12-solo-NishaVijai",
        projImgLink: gitHubImage,
        altText: "GitHub repository link of v12-solo project",
        imgTitle: "GitHub Image for v12-solo project",
        linkName: "GitHub Repo Link",
      },
      {
        id: 2,
        projLink: "https://vaersgo.netlify.com/",
        projImgLink: netlifyImage,
        altText: "Cloned-Værsgo website hosted in Netlify",
        imgTitle: "Netlify Image for Cloned-Værsgo website",
        linkName: "Hosted On",
      },
    ],
  },
  {
    id: 4,
    date: "September 2019 - October 2019",
    title: "front-end web developer",
    project: "chingu-voyage 11",
    compLink: "https://chingu.io/",
    description: [
      {
        id: 1,
        des: "Built a cloned kickstarter single page website using HTML,CSS and React",
      },
      {
        id: 2,
        des: "Applied previous projects React knowledge to finish this solo project and hosted the site using Heroku",
      },
    ],
    links: [
      {
        id: 1,
        projLink: "https://github.com/chingu-voyages/v11-solo-NishaVijai",
        projImgLink: gitHubImage,
        altText: "GitHub repository link of v11-solo project",
        imgTitle: "GitHub Image for v11-solo project",
        linkName: "GitHub Repo Link",
      },
      {
        id: 2,
        projLink: "https://cloned-kickstarter.herokuapp.com/",
        projImgLink: herokuImage,
        altText: "Cloned-Kickstarter website hosted in Heroku",
        imgTitle: "Heroku Image for Cloned-Kickstarter website",
        linkName: "Hosted On",
      },
    ],
  },
  {
    id: 5,
    date: "June 2019 - July 2019",
    title: "front-end web developer",
    project: "chingu-voyage 09 - group project",
    compLink:
      "https://medium.com/chingu/build-hack-learn-230-developer-projects-from-the-chingu-cohorts-43ef6596447e",
    description: [
      { id: 1, des: "Group project with two remote team members" },
      {
        id: 2,
        des: "Built a dynamic web app to showcase shoes using HTML,CSS and React",
      },
      {
        id: 3,
        des: "We divided the app into different components and used Trello for project management",
      },
      {
        id: 4,
        des: "Learned React basic and applied the knowledge to build this shoe app and practiced to use Trello and learned to host the site using Heroku",
      },
    ],
    links: [
      {
        id: 1,
        projLink: "https://github.com/chingu-voyages/v9-toucans-team-14",
        projImgLink: gitHubImage,
        altText: "GitHub repository link of v-09 group project",
        imgTitle: "GitHub Image for v-09 group project",
        linkName: "GitHub Repo Link",
      },
      {
        id: 2,
        projLink: "https://chingu-shoe-project.herokuapp.com/",
        projImgLink: herokuImage,
        altText: "Shoe Web App hosted in Heroku",
        imgTitle: "Heroku Image for Shoe Web App",
        linkName: "Hosted On",
      },
    ],
  },
  {
    id: 6,
    date: "May 2019",
    title: "front-end web developer",
    project: "chingu-voyage 09 - prework-solo-project",
    compLink:
      "https://medium.com/chingu/build-hack-learn-230-developer-projects-from-the-chingu-cohorts-43ef6596447e",
    description: [
      {
        id: 1,
        des: "Built a chrome extension called INITAB using HTML,CSS and JavaScript",
      },
      {
        id: 2,
        des: "First time experience to build and style an extension and used JavaScript to implement a live clock",
      },
    ],
    links: [
      {
        id: 1,
        projLink: "https://github.com/NishaVijai/Chingu-09-prework-project",
        projImgLink: gitHubImage,
        altText: "GitHub repository link of Chingu-09 prework solo project",
        imgTitle: "GitHub Image for Chingu-09 prework solo project",
        linkName: "GitHub Repo Link",
      },
      {
        id: 2,
        projLink: "https://nishavijai.github.io/Chingu-09-prework-project/",
        projImgLink: gitHubHostedImage,
        altText: "INITAB extension hosted in Github pages",
        imgTitle: "GitHub pages Image for INITAB extension",
        linkName: "Hosted On",
      },
    ],
  },
  {
    id: 7,
    date: "March 2019 - April 2019",
    title: "front-end web developer",
    project: "chingu-voyage 08 - group project",
    compLink: "https://chingu.io/",
    description: [
      {
        id: 1,
        des: "First time experience to work with two remote team members from England and Uganda",
      },
      {
        id: 2,
        des: "Built a cloned Chingu single page website using HTML, CSS and JavaScript",
      },
      { id: 3, des: "Used GitHub board to track our tasks" },
      {
        id: 4,
        des: "Learned to use gitHub board, shared the workload and completed the project together with my team members",
      },
    ],
    links: [
      {
        id: 1,
        projLink: "https://github.com/chingu-voyages/v8-toucans-team-09",
        projImgLink: gitHubImage,
        altText: "GitHub repository link of v-08 group project",
        imgTitle: "GitHub Image for v-08 group project",
        linkName: "GitHub Repo Link",
      },
      {
        id: 2,
        projLink: "https://chingu-voyages.github.io/v8-toucans-team-09/",
        projImgLink: gitHubHostedImage,
        altText: "Cloned Chingu website hosted in Github pages",
        imgTitle: "GitHub pages Image for Cloned Chingu website",
        linkName: "Hosted On",
      },
    ],
  },
  {
    id: 8,
    date: "February 2019",
    title: "front-end web developer",
    project: "chingu-voyage 08 - prework-solo-project",
    compLink: "https://chingu.io/",
    description: [
      {
        id: 1,
        des: "Built TickyBot website using HTML, CSS and vanilla JavaScript",
      },
      {
        id: 2,
        des: "Learned to use simple vanilla javaScript and media queries",
      },
    ],
    links: [
      {
        id: 1,
        projLink: "https://github.com/NishaVijai/pre-work-solo-project",
        projImgLink: gitHubImage,
        altText: "GitHub repository link of v-08 prework solo project",
        imgTitle: "GitHub Image for v-08 prework solo project",
        linkName: "GitHub Repo Link",
      },
      {
        id: 2,
        projLink: "https://nishavijai.github.io/pre-work-solo-project/",
        projImgLink: gitHubHostedImage,
        altText: "TickyBot landing page hosted in Github pages",
        imgTitle: "GitHub pages Image for TickyBot landing page",
        linkName: "Hosted On",
      },
    ],
  },
];

export default expData;
