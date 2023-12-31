import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Ijaz",
  lastName: "Liaqat",
  initials: "React JS", // the example uses first and last, but feel free to use three or more if you like.
  position: "React Js Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in the Lahore",
    },
    {
      emoji: "💼",
      text: "React Developer at Orcalo Holdings",
    },
    {
      emoji: "📧",
      text: "ijazierpu@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/Ijazliaqat",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/ijaz-liaqat/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Ijaz. I'm a React Developer at Orcalo Holding. Experienced MERN stack developer with a passion for building modern and scalable web applications. Proficient in MongoDB, Express, React, and Node.js. Strong understanding of front-end technologies such as HTML, CSS, and JavaScript. Adept at implementing responsive design and delivering a seamless user experience. Committed to delivering high-quality code and finding creative solutions to complex problems.",
  skills: {
    proficientWith: [
      "TypeScript",
      "React",
      "MUI",
      "Tailwind",
      "Git",
      "Github",
      "Bootstrap",
      "HTML5",
      "CSS3",
      "Figma",
    ],
    exposedTo: ["node js", "express js", "mongodb"],
  },
  portfolio: [

    {
      title: "Share My Dine",
      live: "https://app-dev.sharemydine.co.uk/authentication/signin", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    
  ],
};
