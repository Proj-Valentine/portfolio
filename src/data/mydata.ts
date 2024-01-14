type ImageUrls = {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
};

type DashboardItem = {
  name: string;
  description: string;
  imageUrls: ImageUrls;
};

export const dashboardData:DashboardItem[]= [{
    name:"Dashboard Application",
    description:"React dasboard ",
    imageUrls:{image1:"/images/dash1.jpg", image2:"/images/dash2.jpg",image3:"/images/dash3.jpg", image4:"/images/dash4.jpg",image5
    :"/images/dash5.jpg"},
    
},
{
    name:"Social Media App",
    description:"",
    imageUrls:{image1:"/images/social1.jpg", image2:"/images/social2.jpg",image3:"/images/social3.jpg", image4:"/images/social4.jpg",image5:"/images/social4.jpg"}

},
{
    name:"Automation",
    description:"Python Automation",
    imageUrls:{image1:"/images/pythonProj.png", image2:"/images/dash2.jpg",image3:"/images/dash3.jpg", image4:"/images/dash4.jpg",image5
    :"/images/dash5.jpg"}

},
{
    name:"Data Engineering",
    description:"Python ETL with Apache Airflo",
    imageUrls:{image1:"/images/dataEng.png", image2:"/images/dash2.jpg",image3:"/images/dash3.jpg", image4:"/images/dash4.jpg",image5
    :"/images/dash5.jpg"}

}]

export const Image = "/images/profile1.jpg"


type SkillItem = string;
type icon= string;

type SkillCategory = {
  category: string;
  items: SkillItem[];
  icons: icon[];
};
export const skillsData: SkillCategory[] = [
  {
    category: 'Cloud Computing',
    items: ['AWS', 'GCP', 'Azure'],
    icons:['assets/aws.svg','assets/gcp.svg','assets/azure1.svg']
  },
  {
    category: 'Data Analytics',
    items: ['PowerBI', 'Tableau', 'Excel', 'Sql'],
        icons:['assets/powerbi.svg','assets/tableau.svg','assets/excel.svg','assets/sql.svg']

  },
  {
    category: 'Programming/ Scripting',
    items: ['Python', 'JavaScript', 'TypeScript','Bash', 'Linux', 'PowerShell'],
        icons:['assets/python.svg','assets/javascript.svg','assets/typescript.svg','assets/bash.svg', 'assets/linux.svg','assets/powershell.svg']

  },
  {
    category: 'Data Engineering',
    items: ['Azure Databricks', 'Apache Airflow', 'Azure ADF'],
        icons:['assets/Databricks.svg','assets/airflow.svg','assets/ADF.svg']

  }
];


type ProfileContent = {
  paragraphs: string[];
};

export const profileData: ProfileContent = {
  paragraphs: [
"I am Valentine Kwame Ampah, a dedicated professional with extensive </br> experience in data infrastructure and business strategy.<br /> Specializing in software development, data engineering, and automation. </br> I excel in team environments and committed to data-driven excellence for growth and productivity."  ],
};

type Certificates = {
  paragraphs: string[];
};

export const certificationNames: Certificates = {
  paragraphs:[
  "Google Data Analytics",
  "Google IT Automation with Python",
  "Microsoft Azure Data Engineering Associate",
  "AWS Certified Cloud Practitioner",
  "AWS Developer Associate",
  // Add more certification names as needed
]}

type Hobby = {
  name: string;
  icon: string;
};

export const hobbiesData: Hobby[] = [
  {
    name: "Gym",
    icon: "assets/gym.svg", 
  },
  {
    name: "Soccer",
    icon: "assets/soccer.svg",
  },
  {
    name: "Coding",
    icon: "assets/coding.svg", 
  },

];



type iconTypes={
progIcons:string[];


}
export const iconsData: iconTypes = {
  progIcons:
  ['assets/javascript.svg',
'assets/typescript.svg',
'assets/vite.svg','assets/reactic.svg','assets/nodejs.svg']
}

interface Project {
  id: string;
  name: string;
  url?: string;
  techStack: string[];
  tasks?: string[];
  features?: string[];
  challenges?: string[];
  imageUrls?: string;
  description?: string;
  techStacktwo?: string[];
}

export const projectsData: Project[] = [
  {
    "id": "1",
    "name": "MERN Next.js 14",
    "description": "A full-stack MERN event hosting application",
    "url": "https://streamfy.vercel.app/",
    "techStack": ["Node.js & Next.js 14", "TypeScript", "TailwindCSS", "Stripe",],
    "techStacktwo": ["Zod & React Hook Form", "Uploadthing", "Clerk", "Shadcn", "MongoDB", "Vercel & Github"],
    "features": ["Authentication (CRUD) with Clerk", "Events (CRUD): Create, Read, Update, Delete Events", "Search & Filter", "Secure Checkout and Pay with Stripe", "Event Orders: Comprehensive order management system, providing a clear overview of all event-related transactions."]
  },
  {
    "id": "2",
    "name": "React",
    "description": "A full-stack social media app",
    "url": "https://swipe.vkampah-app.com/",
    "techStack": ["React", "Typescript", "Node.js", "Tailwind CSS", "Tanstack (React-query)"],
    "techStacktwo": [ "Appwrite Cloud (Back-end)", "AWS Amplify (hosting)", "Zod", "Shadcn", "Git", "Github"],
    "features": ["Authentication with Appwrite Auth API", "Post (CRUD): creating, viewing, exploring, saving, and liking/unliking posts", "Ensured full mobile responsiveness with Tailwind CSS"],
    "challenges": ["Overcame challenges, including using Tanstack Queries for auto-caching and mutations, setting up user authentications for the sign-up page, and managing TypeScript Interface declarations"]
  ,
    "imageUrls": "/images/social1.jpg"},
  {
    "id": "3",
    "name": "React Analytics",
    "description": "A static React Dashboard application", 
    "url": "https://reactanalytics.vkampah-app.com/",
    "techStack": ["React", "JavaScript", "Node.js", "Tailwind CSS"],
    "techStacktwo": ["Sync Fusion Components", "AWS Amplify", "Git", "Github"],
    "features": ["Developed a comprehensive dashboard application for reporting various Key Performance Indicators (KPIs)", "Implemented features such as Dark and Light Mode Toggle, Theme-settings, Dashboard, Kanban Board, Text Editor, and Paginations"],
    "challenges": ["Overcame challenges in effectively utilizing Tailwind CSS classes"]
  },
    {
      "id": "4",
      "name": "AWS Data Eng",
      "description": " A data engineering pipeline using AWS services",
      "url": "",
      "techStack": ["AWS lambda", "S3 buckets", "SNS", "SQS", "Dynamo DB"],
      "techStacktwo": [ "MySQL DB", "API Gateway"],
      "tasks": ["Set up IAM roles and policies for the different services", "Loaded data into S3 and configured SQS to trigger a lambda function to copy data into Dynamo DB", "Defined another lambda function to seamlessly apply transformations to data in Dynamo DB and copied output to a MySQL DB", "Defined a lambda function to compute basic data aggregations and integrated with an API gateway to expose an endpoint to retrieve aggregated data", "Configured SNS topics to send notifications upon completion of different pipeline steps, including copy activities, loading, and aggregations in order to proactively track and monitor pipeline activities"],
      "imageUrls": "/images/dash1.jpg"
  },
  {
    "id": "5",
    "name": "Azure Data Eng",
    "description": "A data engineering pipeline using Azure services",
    "techStack": ["Azure Storage Explorer", "Azure Data Factory (ADF)", "Azure DataLake Gen2 (ADLS)"],
    "techStacktwo": ["Azure SQL Server", "Azure Databricks"],
    "tasks": ["Loaded data to Azure Data Lake Storage (ADLS) using Azure Storage Explorer", "Mounted ADLS on Databricks and created Spark Notebooks to handle data processing logics", "Connected Databricks Notebooks to Data Factory pipeline and scheduled pipeline jobs to load data into Azure SQL Database"]
  ,
    "imageUrls": "/images/dash1.jpg"},
  {
    "id": "6",
    "name": "ETL_Airflow",
    "description": "A data engineering pipeline using Apache Airflow",
    "url": "https://github.com/Proj-Valentine/ETL_AIRFLOW",
    "techStack": ["Duckdb", "Python", "Apache AirFlow"],
    "tasks": ["Constructed a snowflake data model of a ecommerce data from a csv file using Duckbd library with python", "Orchestrated pipeline activities using an Apache Airflow DAG pipeline"]
  },
  {
    "id": "7",
    "name": "Python Automation",
    "description": "A collection of python automation scripts",
    "url": "https://github.com/Proj-Valentine/Python_Projects",
    "techStack": ["Python", "Bash"],
    "features": ["Streamlined processes through automation, including log analysis and reporting, file renaming, email domain replacement, and unit testing"]
  ,
    "imageUrls": "/images/pythonProj.png"},
]


// ...

