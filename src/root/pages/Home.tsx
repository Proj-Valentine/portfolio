
// import { Button } from "@/components/ui/button";
// import { Menubar } from "@/components/ui/menubar";
// import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport,} from "@/components/ui/navigation-menu";
import Navbar from './../../components/shared/Navbar';
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";



// import { AspectRatio } from "@/components/ui/aspect-ratio";


import { dashboardData } from './../../data/mydata';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";


type dashboard = {
  name: string;
  description: string;
  imageUrls: {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
  };
};


const Home = () => {

    const getTodaysDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
      const day = String(today.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
    };


  return (
    <div className=" flex flex-col gap-3 h-screen w-full">
      {/* <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
            <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link2</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}
      <div className="w-full">
        <Navbar />
      </div>
      <div className="flex items-center flex-col w-full mb-4 bg-bgimg shadow-2xl">
        <div className="flex justify-center text-3xl w-full h-5/6 m-20 p-20">
          <h1 className="brightness-200">WELCOME TO MY PORTFOLIO PAGE</h1>
        </div>
        <div className="mt-5 justify-center w-full">
          <nav className="flex justify-center w-full jusfity-end gap-10 p-2">
            <Link to="/home">Home</Link>
            <Link to={""}>Project</Link>
            <Link to={""}>Contacts</Link>
          </nav>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center m-2 mt-4">
        <div className="flex ml-4 justify-center items-center brightness-125">
          <img
            src="/images/profile1.jpg"
            className="w-80 h-80 rounded-full shadow-2xl backdrop-brightness-50"
          />
        </div>
        <div className="flex-1 m-4 justify-center items-center shadow-2xl">
          <h2 className="flex text-xl font-bold justify-center items-center">
            About Me
          </h2>
          <section className="grid grid-cols- shadow-2xl brightness-125">
            <div className="drop-shadow-2xl p-2">
              <p>
                I am Valentine Kwame Ampah, a dedicated and passionate
                professional based in St. Johns, NL.{" "}
              </p>
            </div>
            <div className="drop-shadow-2xl p-2">
              <p>
                With years of experience in modern data infrastructure, I excel
                in developing business strategies and maximizing efficiency.
              </p>{" "}
            </div>
            <div className="drop-shadow-2xl p-2">
              <p>
                My expertise spans software development, data engineering, and
                automation, showcased through impactful projects.
              </p>{" "}
            </div>
            <div className="drop-shadow-2xl p-2">
              <p>
                As a lifelong learner and team player, I thrive in collaborative
                environments.
              </p>
            </div>
            <div className="drop-shadow-2xl p-2">
              <p>
                Certified in Google Data Analytics and IT Automation with
                Python, I hold an MSc. in Applied Psychological Science.
              </p>
            </div>
            <div className="drop-shadow-2xl p-2">
              <p>
                Currently pursuing the Microsoft Azure Data Engineering
                Associate certification, AWS certified Developer, AWS Developer
                Associate.
              </p>
            </div>
            <div className="drop-shadow-2xl p-2">
              I bring a diverse skill set and a commitment to data-driven
              excellence.
            </div>
          </section>
        </div>
      </div>
      <div className="flex m-4 item-center justify-center">
        <h1 className="text-6xl font-bold">PROJECTS</h1>
      </div>
      <div className="flex flex-row justify-evenly items-center h-80 w-full m-4 mb-20">
        {dashboardData.map((item: dashboard, index: number) => (
          <div
            key={index}
            className=" flex flex-col h-60 rounded shadow-2xl"
          >
            <div className="flex flex-row justify-evenly w-96 rounded-lg bg-white mr-2">
              <img
                src={`${item.imageUrls.image1}`}
                className="p-1 w-40 h-50 shadow rounded"
              />
              <img
                src={`${item.imageUrls.image2}`}
                className="p-1 w-40 h-50 shadow rounded"
              />
              {/* <div className="w-[450px]">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src="/images/profile1.jpg"
                    alt="Image"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div> */}
            </div>
            <div className="text-white text-xl w-96 shadow p-2 ">
              <p>Name: {item.name}</p>
              <p>Description: {item.description}</p>
            </div>

            {/* Add more properties as needed */}
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-around">
        <div className="flex flex-col mt-10">
          <h2 className="text-xl font-semibold">HOBBIES</h2>
          <p>Gym</p>
          <p>Soccer</p>
          <p>Coding</p>
        </div>
      </div>
      <div className="flex flex-col justify-center mb-4">
        <div className="flex justify-center shadow-xl mb-2">
          <p> hey do you want to connect</p>
        </div>
        <div className="flex flex-row justify-center">
          <Button type="button" className="shad-button_primary px-8 m-1">
            <Mail className="mr-2 h-4 w-4" /> Send me an email
          </Button>
          <Button type="button" className="shad-button_primary px-8 m-1">
            <ContextMenu>
              <ContextMenuTrigger>
                Right click to show emails
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>
                  <span className="p-2 bg-black">vkampah28@gmail.com</span>
                </ContextMenuItem>
                <ContextMenuItem>valentine.ampah@keyin.com</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row">
          <p>
            <SocialIcon
              label="LindedIn"
              network="linkedin"
              url="https://www.linkedin.com/in/valentine-ampah-b92a0198"
              target="_blank"
            />
            &nbsp;
          </p>
          <p className="text-left">
            <SocialIcon
              network="github"
              url="https://github.com/Proj-Valentine/Python_Projects"
              rel="noreferrer"
              target="_blank"
              bgColor="white"
              fgColor="black"
            />
            &nbsp;
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="bg-slate-900 px-8 m-1 shadow-xl rounded-md">
            @ 2023 Mr Valentine Ampah
          </p>
          <p className="bg-slate-900 px-8 m-1 shadow-xl rounded-md">
            {getTodaysDate()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home
