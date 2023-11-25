
// import { Button } from "@/components/ui/button";
// import { Menubar } from "@/components/ui/menubar";
// import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport,} from "@/components/ui/navigation-menu";
import Navbar from './../../components/shared/Navbar';
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";




// import { AspectRatio } from "@/components/ui/aspect-ratio";


import { certificationNames, dashboardData, hobbiesData, iconsData, profileData, skillsData } from "./../../data/mydata";

import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

// import {
//   ContextMenu,
//   ContextMenuContent,
//   ContextMenuItem,
//   ContextMenuTrigger,
// } from "@/components/ui/context-menu";
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card";

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
        <div className="flex flex-col justify-center mb-20 text-center text-3xl w-auto h-5/6 mx-8 p-20 shadow-2xl backdrop-contrast-10 backdrop-blur-xl bg-white/30 ">
          <h1 className="brightness-200 text-4xl font-bold ">
            VALENTINE'S PORTFOLIO PAGE
          </h1>
          <br />
          <div className="flex ml-2 mr-2 justify-center items-center brightness-125">
            <img
              src="/images/profile1.jpg"
              className="h-40 w-40 rounded-full shadow-2xl"
            />
          </div>
          <h4 className="font-bold m-4">Powered By </h4>

          <div className="flex justify-center w-full rounded-full">
            {iconsData.progIcons.map((item, index) => (
              <div
                className="flex flex-row rounded-xl p-1 m-1 brightness-90"
                key={index}
              >
                <img
                  src={item}
                  width={30}
                  height={30}
                  className="brightness-150 bg-dark-1 rounded-xl"
                />
              </div>
            ))}
          </div>

          {/* {skillsData.map((category, index) => (
            <div
              className="flex flex-row bg-slate-900 rounded-xl p-1 m-1 "
              key={index}
            >
              {category.category === "Programming" &&
                category.icons.map((icon, skillIndex) => (
                  <div key={skillIndex} className="p-1">
                    <span key={skillIndex}>
                      <img
                        width={20}
                        height={20}
                        src={icon}
                        alt={`Programming Icon ${skillIndex}`}
                      />
                    </span>
                  </div>
                ))}
            </div>
          ))} */}
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
        {/* <div className="flex ml-2 mr-2 justify-center items-center brightness-125">
          <img
            src="/images/profile1.jpg"
            className="h-80 w-80 rounded-full shadow-2xl"
          />
        </div> */}
        {/* PROFILE SECTION */}
        <div className="flex m-4 flex-col justify-center items-center bg-wallp-1  rounded-3xl">
          <div className="bg-opacity-30 border m-10 border-white/40 backdrop-brightness-50 backdrop-contrast-50 backdrop-blur-xl bg-cyan-300 shadow-2xl rounded-3xl ">
            <div className="flex flex-col">
              <section className="flex flex-col brightness-125 p-2 m-1">
                <h2 className="flex text-xl font-bold justify-center items-center">
                  {" "}
                  Professional summary
                </h2>
                <div className="p-2 text-sm bg-slate-900 rounded-lg">
                  {profileData.paragraphs.map((paragraph, index) => (
                    <p key={index}> {paragraph}</p>
                  ))}
                </div>
              </section>
              <section className="grid grid-cols-2 brightness-125 p-2 m-4 rounded-xl">
                <div className="flex flex-col m-2">
                  <h2 className="flex text-xl items-start font-bold justify-center">
                    Certifications
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
                  <div className="flex flex-col flex-nowrap  bg-slate-900 items-start mr-2 md:flex-wrap sm:flex-wrap p-2 rounded-xl">
                    {certificationNames.paragraphs.map((paragraph, index) => (
                      <div className="m-1 bg-slate-900 rounded-xl p-2">
                        <p className="justify-items-start" key={index}>
                          {paragraph}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col m-2">
                  <h2 className="flex text-xl font-bold justify-center items-center">
                    Skills {`(Hover to View)`}
                  </h2>
                  <div className="flex flex-col  bg-slate-900 flex-nowrap justify-center mr-4 items-start md:flex-wrap sm:flex-wrap p-2 rounded-xl">
                    {skillsData.map((category, index) => (
                      <div className="bg-slate-900 rounded-xl p-1 m-1">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="bg-slate-900 mr-2 rounded-lg p-1">
                              {category.category}
                            </TooltipTrigger>

                            <p key={index} className="">
                              <TooltipContent className="bg-slate-900 w-full flex flex-row">
                                {category.items.map((skill, skillIndex) => (
                                  <div
                                    key={skillIndex}
                                    className="flex flex-col p-1"
                                  >
                                    <span key={skillIndex}>
                                      <img
                                        width={20}
                                        height={20}
                                        src={category.icons[skillIndex]}
                                      />
                                    </span>
                                    <span key={skillIndex}> {skill}</span>
                                  </div>
                                ))}
                                {/* <span>
                                {category.icons.map((icon, iconIndex) => (
                                  <img
                                    key={iconIndex}
                                    src={icon}
                                    width={20}
                                    height={20}
                                  />
                                ))}
                              </span> */}
                              </TooltipContent>
                            </p>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <section>
                <div className="flex flex-col flex-nowrap mr-2 md:flex-wrap sm:flex-wrap p-2 rounded-xl">
                  <div className="flex text-center justify-center">
                    <h2 className="font-bold text-xl">Education</h2>
                  </div>
                  <div className="m-1 items-start bg-slate-900 rounded-xl p-2 w-full">
                    <p>- Msc Applied Pyshological Science</p>
                    <p>- Software Development Diploma</p>
                  </div>
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

        <ScrollArea className="w-4/5 whitespace-nowrap rounded-md border p-4">
          <div className="flex w-max space-x-4 p-2 whitespace-nowrap rounded-md border  bg-white">
            {dashboardData.map((item: dashboard, index: number) => (
              <figure
                key={index}
                className="shrink-0  bg-slate-900 p-2 rounded-lg"
              >
                <div className="overflow-hidden rounded-md">
                  <img
                    src={`${item.imageUrls.image1}`}
                    className="aspect-[3/4] h-96 w-fit object-cover"
                    // width={400}
                    // height={400}
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
          <ScrollBar orientation="horizontal" color="black" />
        </ScrollArea>
      </div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col mt-10 justify-center items-center">
          <h2 className="text-xl font-semibold items-center mb-4">HOBBIES</h2>
          <div className="flex flex-row">
            {hobbiesData.map((hobby, index) => (
              <div className="flex flex-row justify-between p-4 m-2 bg-white rounded-md">
                <img
                  key={index}
                  src={hobby.icon}
                  width={80}
                  height={80}
                  className="bg-white"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mb-4 mt-4">
        <div className="flex flex-col justify-center text-center bg-slate-900  mb-10">
          <section>
            <p>
              If you're interested in connecting for professional opportunities
              or collaboration, please feel free to reach out.
            </p>
            <p>I am open to exploring new ventures and partnerships.</p>
            <p>
              You can send me an email at{" "}
              <a href="mailto:vkampah28@example.com">vkampah28@gmail.com</a>,
              and I'll get back to you as soon as possible.
            </p>
          </section>
        </div>
        <div className="flex flex-row justify-center">
          <Button type="button" className="shad-button_primary px-8 m-1">
            <Mail className="mr-2 h-4 w-4" />{" "}
            <a href="mailto:vkampah28@example.com">Send me an email</a>
          </Button>
          {/* <Button type="button" className="shad-button_primary px-8 m-1">
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
          </Button> */}
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
