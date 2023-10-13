const projectSections = [
  {
    title: "Education",
    data: [
      {
        tags: ["computer engineering", "electrical engineering", "computer science", "college"],
        bgImage: "/img/uiucquad.jpg",
        description: `I study Computer Engineering at UIUC with an emphasis in Artificial Intelligence and Machine Learning. My favorite classes on campus are Data Structures, Computational Linear Algebra, and Numerical Methods! I also love exploring new boba spots across campus and playing tennis in my freetime :)`,
        title: "University of Illinois Urbana-Champaign",
        subtext: "Bachelors of Science in Computer Engineering, August 2022 - Present",
        buttons: [{ href: "https://illinois.edu", type: "link", text: "Illinois Homepage" }],
      },
      {
        tags: ["computer science", "statistics", "high school"],
        bgImage: "/img/planowest.jpg",
        description: `I went to high school in Plano, TX, where I took 15 AP Classes and 4 Dual Enrollment classes at a local community college. My interests in high school circled around computer science fundamentals and hackathons!`,
        title: "Plano West Senior High School",
        subtext: "High School Diploma: 4.51/4.00 GPA, August 2019 - May 2022",
        buttons: [{ href: "https://www.pisd.edu/pwsh", type: "link", text: "Plano West Homepage" }],
      },
    ],
  },
  {
    title: "Work Experience",
    data: [
      {
        tags: ["nextjs", "react", "mongodb", "nodejs", "material-ui", "flutter"],
        bgImage: "/img/peacockkk.jpg",
        description: `At NBC, I work on the PeacockTV UI and dashboard that millions of users use monthly. I primarily work with React and NodeJS, with additional tickets cleared with specific backend technologies like MongoDB and cloud services like AWS and the Comcast network distribution system.`,
        title: "NBC Universal",
        subtext: "Software Engineer Intern - PeacockTV, August 2023 - Present",
        buttons: [{ href: "https://www.peacocktv.com/", type: "link", text: "PeacockTV Homepage" }],
      },
      {
        tags: ["python", "machine learning", "artificial intelligence", "tensorflow", "keras"],
        bgImage: "/img/ibmres.jpg",
        description: `At the Discovery Accelerator Institute, I work on a project aimed at reducing the workflow scheduling problem by tackling it with a machine learning approach to approximate solutions and target specific cloud computing clusters based on the ML output.`,
        title: "IBM Research",
        subtext: "Artificial Intelligence Researcher, August 2023 - Present",
        buttons: [{ href: "https://isur.engineering.illinois.edu/ibm-il-discovery-accelerator-institute-iidai/", type: "link", text: "IBM Research Homepage" }],
      },
      {
        tags: ["python", "typescript", "tensorflow", "bash", "linux"],
        bgImage: "/img/forcepoint.jpg",
        description: `At Forcepoint, I primarily worked on a project to convert user-desktop window classifications to keyboard/peripheral colors on RGB devices in order to prevent the entering of sensitive information in unclassified areas/text fields on the TTC-3.2 Linux Client,`,
        title: "Forcepoint",
        subtext: "Software Engineer Intern - Cross Domain TTC Enginering, May 2023 - August 2023",
        buttons: [{ href: "https://www.forcepoint.com/", type: "link", text: "Forcepoint Homepage" }],
      },
      {
        tags: ["machine learning", "pytorch", "python", "tensorflow", "scikit-learn"],
        bgImage: "/img/amd.jpg",
        description: `Working at AMD for almost an entire academic year, I surely enjoyed the team project experience offered by the hybrid team. Together, we worked on a k-nearest-neighbor approach to a ML Reinforcement model for temperature sensing and battery degradation on pre-production AMD Ryzen Computer Chips.`,
        title: "AMD",
        subtext: "Machine Learning Engineer, August 2022 - May 2023",
        buttons: [{ href: "https://www.amd.com/en.html", type: "link", text: "AMD Homepage" }],
      },
    ],
  },
  {
    title: "Undergraduate Teaching Experience",
    data: [
      {
        tags: ["python", "data science", "stat"],
        bgImage: "/img/datascidisc.png",
        description: "On DISCOVERY Staff, I worked on ideating, writing, and publishing new microprojects bi-weekly in a team of 3, primarily working on VS-Code. I additionally helped lead office hours once a week, and at least one lab section every week as well!",
        title: "STAT 107: Data Science Discovery",
        subtext: "Course Assistant - MicroProject Development, January 2023 - June 2023",
        buttons: [{ href: "https://datasciencediscovery.com/", type: "link", text: "STAT 107 Homepage" }],
      },
      {
        tags: ["python", "prairielearn", "math"],
        bgImage: "/img/math257.png",
        description: `On MATH257 Staff, I worked on ideating and writing new midterm problems over the summer, primarily on PrairieLearn's (prairielearn.com) HTML formatted database of questions, answered and tested by over 300 students taking the course. In the fall, I work on lab sections, office hours, and Python development.`,
        title: "MATH 257: Linear Algebra w/ Computational Applications",
        subtext: "Course Assistant - PrairieLearn Development, May 2023 - Present",
        buttons: [{ href: "https://netmath.illinois.edu/summer/math-257", type: "link", text: "MATH 257 Homepage" }],
      },
      {
        tags: ["Java", "Kotlin", "Android Studio", "cs"],
        bgImage: "/img/cs124uiuc.png",
        description: `I'm a Kotlin and Java tutor on the CS124 Staff, with my main responsibilites lying around scheduling online helpsite hours, mentoring my assistants, and leading in-person help sessions once a week!`,
        title: "CS 124: Introduction to Computer Science I",
        subtext: "Course Associate, August 2023 - Present; Course Assistant, January 2023 - July 2023",
        buttons: [{ href: "https://www.cs124.org/", type: "link", text: "CS 124 Homepage" }],
      },
      {
        tags: ["electronics", "circuits", "algebra", "ece"],
        bgImage: "/img/ece110uiuc.jpeg",
        description: `I am one of nine graders on ECE 110 Staff, working every week to provide meaningful feedback on GradeScope assessments to over 50 students!`,
        title: "ECE 110: Introduction to Electronics",
        subtext: "Course Grader, January 2023 - Present",
        buttons: [{ href: "https://courses.engr.illinois.edu/ece110/fa2023/", type: "link", text: "ECE 110 Homepage" }],
      },
    ],
  },
//   {
//     title: "Cool Projects",
//     details: "My favorite projects that are here because they're cool 😎",
//     data: [
//       {
//         tags: ["css", "socket.io", "react", "express", "hackathon"],
//         bgImage: "https://raw.githubusercontent.com/samyok/cine.stream/main/gallery.jpg",
//         description: `For a hackathon, my sister and I created a 3D watch together space without three.js or the like -- just pure CSS transforms. This was intentional; we wanted to give ourselves the challenge of creating a pure-css 3D environment.  
            
//             We ended up winning first place and $600 at SonomaHacks. Lots of info is on our DevPost; check it out!`,
//         title: "cine.stream",
//         subtext: "Apr 2021",
//         buttons: [
//           {
//             href: "https://cine.stream",
//             type: "link",
//             text: "cine.stream",
//           },
//           {
//             href: "https://github.com/samyok/cine.stream",
//             type: "github",
//           },
//           {
//             href: "https://devpost.com/software/cine-stream-7x3gtj",
//             type: "devpost",
//           },
//         ],
//       },
//       {
//         tags: ["react-native", "express", "firebase"],
//         bgImage: "https://notify.samyok.us/img/phone1.png",
//         description: `Designed, programmed, and published iOS and Android app for Brookings High School students for fast and reliable emergency alerts. 2000+ downloads over the last year (BHS has ~800 students). The Brookings School District was in talks to purchase the app for every school in the district, but those talks got cancelled due to COVID. 
                
//                 Coded in React Native with Node/Express/MongoDB/Firestore backend.`,
//         title: "Bobcat Notify",
//         subtext: "Nov 2019 - Jan 2021",
//         buttons: [
//           {
//             href: "https://notify.samyok.us",
//             type: "link",
//             text: "notify.samyok.us",
//           },
//         ],
//       },
//       {
//         tags: ["tensorflow", "react", "socket.io", "express", "three.js", "hackathon"],
//         title: "SongSmash",
//         subtext: "Apr 2021",
//         bgImage:
//           "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/493/648/datas/gallery.jpg",
//         description: `Use your webcam to smash your favorite songs! Play any beat saber map with a webcam, powered by Tensorflow and ThreeJS!
                
//                 All of the 3D animations in-game were done with three.js. The UI was built with React and node.js. Models of the boxes and hands were made in Blender. ParticlesJS was used to make the particle effects in the background, and PoseNet was used to track the player's pose on the webcam.
                
//                 We made this for a Los Altos Hacks 2021 and didn't win anything, although it was a super fun project :)`,
//         buttons: [
//           {
//             href: "https://devpost.com/software/songsma-sh-tagline",
//             type: "devpost",
//           },
//           {
//             href: "https://github.com/samyok/songsma.sh",
//             type: "github",
//           },
//         ],
//       },
//       {
//         tags: ["hackathon", "react-native", "nodejs"],
//         title: "devJS",
//         subtext: "Jul 2021",
//         bgImage:
//           "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/610/222/datas/gallery.jpg",
//         description: `devJS provides a internet-free code editor and interpreter to developers with a bundled NodeJS binary.

// devJS runs a compiled version of NodeJS ChakraCore on iOS and uses Termux on Android. We used React Native to build the "front-end" of our application, which includes defining transitions between screens using the StackNavigator.`,
//         buttons: [
//           {
//             type: "devpost",
//             href: "https://devpost.com/software/devjs-4v5okm",
//           },
//           {
//             type: "github",
//             href: "https://github.com/samyok/devjs",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: "Projects",
//     collapsible: true,
//     data: [
//       {
//         tags: ["nextjs", "chakra-ui", "LaTeX"],
//         bgImage: "/og_image_index.png",
//         description: `I designed and developed this website over the past couple months as a general index to all the various projects I work on. My resume is written in LaTeX using a template I wrote. 
                
//                 Recently, I've added automatic open graph image generation and caching so that the preview is always the most updated version of the website! Feel free to check out the portfolio, though.`,
//         title: "Portfolio",
//         subtext: "Jul 2021 - Present",
//         buttons: [
//           {
//             href: "https://github.com/samyok/portfolio",
//             type: "github",
//           },
//         ],
//       },

//       {
//         tags: ["open-source"],
//         title: "Google Code In",
//         subtext: "Winter 2019-2020",
//         description: `
//                 Google Code In is an initiative that allowed students to complete tasks for open source organizations. I participated with SugarLabs, an organization that maintains the Sugar OS on the >3 million One Laptop Per Child laptops in underdeveloped areas. 

//                 First year: worked on MusicBlocks and SugarLabs website, fixing bugs.
                
//                 Second year: worked on MusicBlocks; expanded export and import functionality to more file types; proposed and created a Git-based version history system for blocky-code; tested and experimented with the viability of refactoring entire codebase into a Model-View-Controller design. 
// `,
//         buttons: [
//           {
//             href: "https://github.com/sugarlabs/musicblocks",
//             type: "github",
//           },
//         ],
//       },
//       // {
//       //     tags: ["js", "express"],
//       //     title: "SnowMap",
//       //     subtext: "Feb 2020",
//       //     description: `During a snowstorm, many people look at this website to "figure out" the chances that school closes the next day. It scrapes KSFY News for current cancellations and plots them on the website using the Google Maps API, so it only works for the eastern South Dakota region.
//       //
//       //     The demo only works during inclement weather, as it is just a Google Map if no schools have cancelled school for tomorrow.`,
//       //     buttons: [
//       //         {
//       //             href: 'https://map.samyok.us/',
//       //             type: "link",
//       //             text: "map.samyok.us"
//       //         },
//       //         {
//       //             href: "https://github.com/samyok/snowmap",
//       //             type: "github"
//       //         },
//       //     ]
//       // },

//       {
//         tags: ["open-source", "nodejs"],
//         title: "typpo/textbelt",
//         subtext: "Mar 2019",
//         description: `Contributing to this was one of my first forays into open source, I refactored the transporter from mutt to nodemailer.`,
//         buttons: [
//           {
//             href: "https://github.com/typpo/textbelt",
//             type: "github",
//           },
//         ],
//       },

//       {
//         tags: ["react", "material-ui"],
//         title: "BHS Science Olympiad",
//         subtext: "2019-2020",
//         description: `Simple create-react-app with Material UI to create a 'dashboard' for the BHS SciOly team I captained for 3 years.`,
//         buttons: [
//           {
//             href: "https://www.scienceolympiad.club",
//             type: "link",
//             text: "www.scienceolympiad.club",
//           },
//           {
//             href: "https://github.com/samyok/sci-oly-2020",
//             type: "github",
//           },
//         ],
//       },

//       {
//         tags: ["firebase", "nodejs", "hackathon"],
//         title: "slideforthe.world",
//         subtext: "Feb 2019",
//         description: `I made most of this in a 12 hour sprint to win first place at SDSU's Programming Design Contest!
                
//                 It was a competitive multiplayer version of the picture puzzle gadget from Windows 7, but most of the files corrupted and the source is no longer available 😔`,
//         buttons: [
//           {
//             type: "github",
//             href: "https://github.com/samyok/slideforthe.world",
//           },
//         ],
//       },

//       {
//         tags: ["js", "express"],
//         title: "Scioly Chrome Extension",
//         subtext: "Sep 2019",
//         description: `My first chrome extension and my first project for Scioly.org. 
                
//                 I've since added (or helped add) all of the features, except for infinite scrolling, to the main scioly.org website.`,
//         buttons: [
//           {
//             href: "https://chrome.google.com/webstore/detail/better-scioly-forums/imlehajmaemolcpgbkjcenmphfbljiei?hl=en",
//             type: "link",
//             text: "Chrome Extension",
//           },
//           {
//             href: "https://github.com/samyok/scioly-chrome",
//             type: "github",
//           },
//         ],
//       },
//       {
//         tags: ["chakra-ui", "nextjs"],
//         title: "Superfight",
//         subtext: "Aug 2021",
//         description: `I made this as a small playtest for NextJS and Chakra UI. 
                
//                 It was used as an activity for Dakota Debate Institute. The rules are simple: the players pick a card each and then argue over who would win in a battle to the death.`,
//         buttons: [
//           {
//             href: "https://superfight.samyok.us",
//             text: "superfight.samyok.us",
//             type: "link",
//           },
//           {
//             href: "https://github.com/samyok/dakotadebate",
//             type: "github",
//           },
//         ],
//       },
//       {
//         tags: ["js", "webrtc"],
//         title: "Webshare",
//         subtext: "Apr 2020",
//         description: `A bare-bones screensharing application that I made to test out WebRTC during our first two week quarentine.`,
//         buttons: [
//           {
//             href: "https://github.com/samyok/webshare",
//             type: "github",
//           },
//         ],
//       },

//       {
//         tags: ["react", "sass", "mongodb", "express"],
//         title: "BHS Prom Tickets",
//         subtext: "Mar - Apr 2021",
//         description: `A MERN-stack application that was the sole ticket and meal management platform for Brookings High School's 2021 Prom.
                
//                 Used to great success managing tickets, meals, and seating. Managed authenticatication so students could verify their eligibility to purchase tickets.`,
//         buttons: [],
//       },
//     ],
//   },
];

export default projectSections;
