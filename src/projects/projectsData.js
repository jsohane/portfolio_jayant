import projectOne from "../assets/project1.png";
import projectTwo from "../assets/project2.png";
import projectThree from "../assets/project3.png";

const projects = {
  1: {
    title: "SweatSquad",
    image: projectOne,
    description: (
      <>
        <p>Tech Stack: React, RapidAPI</p>
        <p>
        This project is a comprehensive fitness platform designed to enhance exercise discovery through category-specific browsing and video recommendations. By integrating over 1,000 exercises and optimizing backend processes, the app boosts user engagement and reduces retrieval times by 40%.
        </p>
      </>
    ),
    github: "https://github.com/jsohane/exercise-app",  
    demo: "https://sweatsquad.netlify.app/",
  },
  2: {
    title: "Appoint-Med",
    image: projectTwo,
    description: (
      <>
        <p>Tech Stack: Next.js, Appwrite, Typescript, TailwindCSS, ShadCN, Twilio</p>
        <p>
        This project involved creating a comprehensive healthcare application where patients can register, schedule appointments, and securely upload files. The platform includes robust admin functionalities for managing appointments, confirming schedules, and sending automated SMS notifications. Optimized with Next.js and Appwrite, the application enhanced data retrieval speeds by 40% and reduced backend processing time by 35%, ensuring a seamless and responsive user experience.
        </p>
      </>
    ),
    github: "https://github.com/jsohane/AppointMed",
    demo: "https://appoint-med.vercel.app/",
  },
  3: {
    title: "VerboNet",
    image: projectThree,
    description: (
      <>
        <p>Tech Stack: CPP</p>
        <p>
        This project involved creating a text chat application using a client-server model to enable real-time messaging between multiple clients over TCP connections. The application features client login/logout, message broadcasting, and a blocking mechanism, while efficiently managing multiple connections using the select() system call. Advanced functionalities include shell command integration and statistics tracking, ensuring a robust and responsive messaging experience.
        </p>
      </>
    ),
    github: "https://github.com/jsohane/chat-application-TCP",
    demo: "https://github.com/jsohane/chat-application-TCP",
  },
};

export default projects;