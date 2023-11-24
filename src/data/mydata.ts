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
    imageUrls:{image1:"/images/dash1.jpg", image2:"/images/dash2.jpg",image3:"/images/dash3.jpg", image4:"/images/dash4.jpg",image5
    :"/images/dash5.jpg"}

},
{
    name:"Data Engineering",
    description:"Python ETL with Apache Airflo",
    imageUrls:{image1:"/images/dash1.jpg", image2:"/images/dash2.jpg",image3:"/images/dash3.jpg", image4:"/images/dash4.jpg",image5
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
    icons:['','','']
  },
  {
    category: 'Data Analytics',
    items: ['PowerBI/SSRS', 'Tableau', 'Excel'],
        icons:['','','']

  },
  {
    category: 'Programming',
    items: ['Python', 'JavaScript', 'TypeScript'],
        icons:['','','']

  },
  {
    category: 'Data Engineering',
    items: ['Azure Databricks', 'Apache Airflow', 'Azure ADF'],
        icons:['','','']

  },
  {
    category: 'Scripting',
    items: ['Bash', 'Linux', 'PowerShell','unix'],
        icons:['','','']
  },
];


