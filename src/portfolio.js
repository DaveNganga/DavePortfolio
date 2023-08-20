/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "DaveNganga",
  title: "Hello, I'm Dave,",
  subTitle: (
    "A Full Stack Software Developer. My experience ranges from building applications and websites in HTML/CSS and JS to writting backend solutions in Python and Java"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1EhEH5eCGgo0ZYUrbEqmrxRS_gBOudOuQ/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/DaveNganga",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "davenganga32@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Due to my 3+ years in IT and Software Development I can:",
  skills: [
    emoji(
      "⚡ Design and develop interactive Front end / User Interfaces for websites and web applications "
    ),
    emoji("⚡ Setup and deploy back end solutions in Python and javascript (Flask/Django/node.js)"),
    emoji(
      "⚡ Program and test machine learning models in TensorFlow"
    ),
    emoji(
      "⚡ Write unit tests in JUnit (Java) and excel within the confines of the Agile software development philosophy."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
     {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "MySQL/SQL Server",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Cairn University",
      logo: require("./assets/images/CairnV3.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2018 - May 2023",
      desc: "3.8/4/0",
    },
    {
      schoolName: "Cairn University",
      logo: require("./assets/images/CairnV3.jpg"),
      subHeader: "Bachelor of Arts in Music",
      duration: "August 2018 - May 2023",
      desc: "3.6/4.0",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "HTML/CSS/JavaScript", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python",
      progressPercentage: "60%"
    },
    {
      Stack: "Java",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web/SEO Developer",
      company: "Collimator",
      companylogo: require("./assets/images/Collimator.jpg"),
      date: "May 2022 – Jan 2023",
      desc: "",
      descBullets: [
        "Developed and deployed the company website using Webflow",
        "Created Python tutorials that increased user session time by an average of 5 minutes"
      ]
    },
    {
      role: "Technology Support Specialist",
      company: "Cairn University",
      companylogo: require("./assets/images/CairnV2.jpeg"),
      date: "May 2019 – Jan 2023",
      desc: "",
      descBullets: [
        "Enabled clients over the phone/live chat to resolve technical issues decreasing my supervisor’s workload by 40%",
        "Provided first line of support for desktops, laptops, and printers decreasing lab and workstation downtime by 80%"
      ]    
    },
    {
      role: "Python Developer",
      company: "SEO Tech",
      companylogo: require("./assets/images/SEOV2.png"),
      date: "Jun 2021 – August 2021",
      desc: "a 300+ hour intensive Python software development technical and interview training program",
      descBullets: [
        "Led a team of 3 developers to develop a Python web application (Meet-Me) that enabled users to search for nearby destinations using GeoAPI."      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/MeetMee.gif"),
      projectName: "Meet-Mee",
      projectDesc: "A Python interactive web application that lets you shop for nearby attractions.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://meet-mee.onrender.com/"
        },
        {
          name: "Github Code",
          url: "https://github.com/DaveNganga/SEO-MeetMee"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Game_Test.gif"),
      projectName: "Chicken Invaders",
      projectDesc: "An arcade style reendition of a the popular childhood game Chicken Invaders on Arduino Uno (C++).",
      footerLink: [
        {
          name: "Github Code",
          url: "https://github.com/DaveNganga/PERSONAL-ChickenInvaders"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me "),
  subtitle:"",
  email_address: "davenganga32@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
