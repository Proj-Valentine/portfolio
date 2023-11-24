
// import { Button } from "@/components/ui/button";
// import { Menubar } from "@/components/ui/menubar";
// import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport,} from "@/components/ui/navigation-menu";
import Navbar from './../../components/shared/Navbar';
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";




// import { AspectRatio } from "@/components/ui/aspect-ratio";


import { dashboardData, skillsData } from "./../../data/mydata";

import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
      <div className="flex items-center flex-col w-full mb-4 bg-wallp-2 px-20">
        <div className="flex justify-center mb-20 text-center text-3xl w-auto h-5/6 mx-8 p-20 shadow-2xl backdrop-contrast-10 backdrop-blur-xl bg-white/30 ">
          <h1 className="brightness-200 text-4xl font-bold ">
            WELCOME TO MY PORTFOLIO PAGE
          </h1>
        </div>
        <div className="mt-20 justify-center w-auto shadow-2xl backdrop-contrast-10 backdrop-blur-xl bg-white/30">
          <nav className="flex justify-center w-full jusfity-end gap-10 p-2 text-2xl font-bold">
            <Link to="/home">Home</Link>
            <Link to={"/dashboard"}>Projects</Link>
            <Link to={""}>Contacts</Link>
          </nav>
        </div>
      </div>
      <div className="flex lg:flex-nowrap md:flex-nowrap sm:flex-wrap xs:flex-wrap justify-center items-center m-2 mt-4 w-full">
        <div className="flex ml-2 mr-2 justify-center items-center brightness-125">
          <img
            src="/images/profile1.jpg"
            className="h-80 w-80 rounded-full shadow-2xl
            "
            // style={{width:'400px',height:'400px'}}
          />
        </div>
        <div className="flex m-4 flex-col justify-center items-center bg-wallp-1  rounded-3xl">
          <div className="bg-opacity-30 border m-10 border-white/40 backdrop-brightness-50 backdrop-contrast-50 backdrop-blur-xl bg-cyan-300 shadow-2xl rounded-3xl ">
            <div className="">
              <section className="flex flex-col brightness-125 p-2 m-1">
                <h2 className="flex text-xl font-bold justify-center items-center">
                  {" "}
                  Professional summary
                </h2>
                <div className="p-2 text-sm bg-slate-900 rounded-lg">
                  <p>
                    I am Valentine Kwame Ampah, a dedicated and passionate
                    professional based in St. Johns, NL. With years of
                    experience in modern data infrastructure, I excel in
                    developing business strategies and maximizing efficiency.
                  </p>
                  <p>
                    My expertise spans software development, data engineering,
                    and automation, showcased through impactful projects. As a
                    lifelong learner and team player, I thrive in collaborative
                    environments.
                  </p>
                  <p>
                    Certified in Google Data Analytics and IT Automation with
                    Python, I hold an MSc. in Applied Psychological Science.
                  </p>
                  <p>
                    Currently pursuing the Microsoft Azure Data Engineering
                    Associate certification, AWS certified Developer, AWS
                    Developer Associate.
                  </p>
                  <p>
                    I bring a diverse skill set and a commitment to data-driven
                    excellence.
                  </p>
                </div>
              </section>
              <section className="p-2 m-1">
                <h2 className="flex text-xl font-bold justify-center items-center">
                  SKILLS
                </h2>
                {/* <div className="flex flex-nowrap justify-center mr-4 items-center md:flex-wrap sm:flex-wrap drop-shadow-2xl p-2">
                  {skillsData.map((category, index) => (
                    <div
                      key={index}
                      className="bg-slate-900 mr-4 rounded-lg p-1"
                    >
                      <HoverCard>
                        <HoverCardTrigger>{category.category}</HoverCardTrigger>
                        <HoverCardContent className="bg-slate-900">
                          {category.items.map((skill, skillIndex) => (
                            <p key={skillIndex}>{skill}</p>
                          ))}
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                  ))}
                </div> */}

                <div className="flex flex-nowrap justify-center mr-4 items-center md:flex-wrap sm:flex-wrap drop-shadow-2xl p-2">
                  {skillsData.map((category, index) => (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="bg-slate-900 mr-4 rounded-lg p-1 m-1">
                          {category.category}
                        </TooltipTrigger>

                        <div key={index} className="m-4">
                          <TooltipContent
                            className="bg-slate-900 w-full"
                            slot="bottom"
                          >
                            {category.items.map((skill, skillIndex) => (
                              <p key={skillIndex}>{skill}</p>
                            ))}
                          </TooltipContent>
                        </div>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="flex m-4 item-center justify-center">
        <h1 className="text-3xl font-bold">PROJECTS</h1>
      </div>
      <div className="flex flex-row basis-1/2 flex-wrap md:flex-nowrap justify-evenly h-auto items-center w-full m-4 mb-20">
        {/* {dashboardData.map((item: dashboard, index: number) => (
          <div key={index} className=" flex flex-col rounded shadow-2xl">
            <div className="flex flex-row justify-evenly w-96 rounded-lg bg-white mr-2">
              <img
                src={`${item.imageUrls.image1}`}
                className="p-1 w-40 h-50 shadow rounded"
              />
              <img
                src={`${item.imageUrls.image2}`}
                className="p-1 w-40 h-50 shadow rounded"
              />
            </div>
            <div className="text-white text-xl w-96 shadow p-2 ">
              <p>Name: {item.name}</p>
              <p>Description: {item.description}</p>
            </div>
          </div>
        ))} */}

        <ScrollArea className="w-4/5 whitespace-nowrap rounded-md border p-4  bg-white">
          <div className="flex w-max space-x-4 p-4 whitespace-nowrap rounded-md border  bg-white">
            {dashboardData.map((item: dashboard, index: number) => (
              <figure key={index} className="shrink-0  bg-slate-900 p-4 rounded-lg">
                <div className="overflow-hidden rounded-md">
                  <img
                    src={`${item.imageUrls.image1}`}
                    className="aspect-[3/4] h-96 w-fit object-cover"
                    width={300}
                    height={400}
                  />
                </div>
                <figcaption className="pt-2 text-lg text-muted-foreground">
                  <p>{item.name}</p>
                  <span className="font-semibold text-foreground">
                    <p>Description: {item.description}</p>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="flex flex-row justify-around">
        <div className="flex flex-col mt-10">
          <h2 className="text-xl font-semibold">HOBBIES</h2>
          <p>Gym</p>
          <p>Soccer</p>
          <p>Coding</p>
        </div>
      </div>
      <div className="flex flex-col justify-center mb-4 mt-4">
        <div className="flex justify-center  mb-2">
          <p>Do you want to connect for work or collaboration? </p>
          <p>You can send me an email</p>
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
