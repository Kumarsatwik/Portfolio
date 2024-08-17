import project1 from "../../public/project1.jpeg";
import project2 from "../../public/project2.jpeg";
import project3 from "../../public/project3.jpeg";
import project4 from "../../public/project4.jpeg";

export const PROFILE = {
  name: "Kumar Satwik",
  city: "Odisha, India",
  greet: "Nice to Meet you!",
  email: "kumarsatwik6@gmail.com",
};

export const PROJECTS = [
  {
    name: "Project 1",
    image: project1,
    url: "https://github.com",
  },
  {
    name: "Project 2",
    image: project2,
    url: "https://github.com",
  },
  {
    name: "Project 3",
    image: project3,
    url: "https://github.com",
  },
  {
    name: "Project 4",
    image: project4,
    url: "https://github.com",
  },
];

export const SKILLS = [
  "Javascript, React/Next, Redux, Tailwind",
  "Node.js, Express, Django, FastAPI ",
  "PostgreSQL, MongoDB, Redis ",
  "RESTful and GraphQL APIs",
  "PostMan , Jest and Playwright ",
  "Jenkin , Docker , Kubernetes",
  "AWS EC2, S3, Cloudfront, Lambda, DynamoDB",
];

export const EXPERIENCES = [
  {
    year: "Mar 2024 - Present",
    role: "Software Developer Engineer 1",
    company: "OneLab Ventures",
    description: `<p> • Architected and maintained a robust backend using Node.js and MongoDB, achieving a 99.9% uptime and facilitating a smooth development process.</p>
    <p> • Developed wallet features for P2P and bank-to-wallet transactions, projecting a 25% increase in transaction volume upon launch.</p>
    <p> • Engineered an end-to-end merchant dashboard and loan features, expected to facilitate over 100k Angolan Currency in loan disbursements within the first quarter post-launch.</p>
    <p> • Integrated payment processing with Angola's appypay, aiming to reduce payment processing time by 40% and improve user satisfaction by 30%.</p>
    <p> • Created an Admin Dashboard for KYC document verification and loan approvals, anticipated to accelerate user onboarding by 50% and increase user approval rate by 20%.</p>
    `,
    technologies: [
      "Javascript",
      "MERN Stack",
      "Next.js",
      "React Native",
      "AWS",
    ],
  },
  {
    year: "Apr 2023 - Nov 2023",
    role: "Software Developer",
    company: "Freelancer",
    description: `<p>Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.</p>`,
    technologies: ["HTML", "CSS", "Django", "SQL", "AWS"],
  },
  {
    year: "July 2022 - Mar 2023",
    role: "Software Developer L1",
    company: "Accubits Technologies",
    description: `<p> • Developed 5+ responsive pages for an employee management system using JavaScript , React JS and Tailwind-CSS, improving user interface .</p>
    <p> • Enhanced API efficiency by 25% and improved security by integrating FastAPI and PostgreSQL backend with JWT authentication.</p>
    <p> • Migrated database from PostgreSQL to MongoDB, increasing data processing efficiency by 30% and reducing query response times by 40%.</p>
    <p> • Optimized AWS services utilization, including S3 with boto3 client, resulting in a 20% reduction in cloud operational costs and a 35% increase in deployment efficiency.</p>
    <p> • Followed  industry standard best practices and collaborate with QA and UI/UX Teams completing project milestones 2 weeks ahead of schedule.</p>
    `,
    technologies: [
      "Python",
      "FastAPI",
      "React.js",
      "Node.js",
      "Redux",
      "Postgresql",
      "AWS",
    ],
  },
  {
    year: "Oct 2021 - Dec 2021",
    role: "Software Developer Intern",
    company: "GAOTek",
    description: `<p> • Developed custom mobile applications using Kotlin technologies to enhance user experience and meet all requirements. </p>
    <p> • Managed the entire software life cycle from design to implementation and testing. </p>
    <p> • Expertise in developing and managing background services, including Bluetooth services and related technologies.</p>

    `,
    technologies: ["Kotlin"],
  },
];
