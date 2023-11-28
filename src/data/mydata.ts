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
    :"/images/dash5.jpg"}
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

  },

    {
    category: 'Perfomance Measurement',
    items: ['Logic Models', 'Survey', 'Evaluation Framework'],
        icons:[]
  },
];


type ProfileContent = {
  paragraphs: string[];
};

export const profileData: ProfileContent = {
  paragraphs: [
    "I am Valentine Kwame Ampah, a dedicated and passionate professional based in St. Johns, NL. With years of experience in modern data infrastructure, I excel in developing business strategies and maximizing efficiency. My expertise spans software development, data engineering, and automation, showcased through impactful projects. As a lifelong learner and team player, I thrive in collaborative environments. I bring a diverse skill set and a commitment to data-driven excellence to drive growth and maximize productivity.",
  ],
};

type Certificates = {
  paragraphs: string[];
};

export const certificationNames: Certificates = {
  paragraphs:[
  "Google Data Analytics",
  "Google IT Automation with Python",
  "Microsoft Azure Data Engineering Associate (Pending)",
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
'assets/typescript.svg','assets/schadcn.svg',
'assets/vite.svg','assets/reactic.svg','assets/nodejs.svg']
}

