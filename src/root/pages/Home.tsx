
// import { Button } from "@/components/ui/button";
// import { Menubar } from "@/components/ui/menubar";
// import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport,} from "@/components/ui/navigation-menu";
import Navbar from './../../components/shared/Navbar';
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";




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

// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



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
      <div className="w-full z-50 relative">
        <Navbar />
      </div>
      <div className="flex items-center flex-col w-full mb-4  bg-wallp-2 px-20">
        {/*  backdrop-contrast-10 backdrop-blur-xl bg-white/30 */}
        <div className="flex flex-col justify-center mb-20 text-center text-3xl w-auto h-5/6 mx-8 p-20 shadow-2xl bg-indigo-950 mt-2 backdrop-contrast-10 backdrop-blur-xl ">
          <h1 className="brightness-200 text-4xl font-bold">
            VALENTINE'S PORTFOLIO PAGE
          </h1>
          <br />
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
                  className="brightness-90 rounded-xl bg-white"
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
        {/* backdrop-contrast-10 backdrop-blur-xl bg-white/30 */}
        <div className="mt-20 justify-center w-auto shadow-2xl bg-indigo-950 mb-1 backdrop-contrast-50 backdrop-blur-xl">
          <nav className="flex justify-center w-full jusfity-end gap-10 p-2 text-2xl font-bold">
            <Link to="/home">Home</Link>
            <Link to={"/dashboard"}>Projects</Link>
            <Link to={""}>Contacts</Link>
          </nav>
        </div>
      </div>
      <div className="flex md:flex-nowrap xs:flex-wrap justify-center items-center m-4 xs:m-2 mt-4 w-full shadow-md">
        <div className="flex flex-col md:basis-1/3 content-start m-2 xs:basis-1/2 ml-2 mr-2 justify-center items-center brightness-125 rounded-md shadow-md">
          <div className=" flex justify-center w-full items-center">
            <img
              src="/images/profile1.jpg"
              className="w-max rounded-full sm:rounded-lg xs:rounded-lg sm:w-96 xs:w-full shadow-md"
            />
          </div>
          <section className="rounded-md">
            <div className="flex flex-col flex-nowrap mr-2 md:flex-wrap sm:flex-wrap p-2 rounded-xl">
              <div className="flex text-center justify-center">
                <h2 className="font-bold text-xl">Education</h2>
              </div>
              <div className="m-1 items-start rounded-xl p-1 w-full">
                <p>- Msc Applied Pyshological Science</p>
                <p>- Software Development Diploma</p>
              </div>
            </div>
          </section>
        </div>

        {/* PROFILE SECTION   */}
        <div className="flex flex-col xs:w-auto border md:basis-2/3 xs:basis-1/2 m-2 justify-center items-center rounded-3xl w-full">
          <div className="md:p-1 shadow-md rounded-3xl w-full">
            <div className="flex flex-col xs:pl-1">
              <section className="flex flex-col brightness-125 p-2 m-1">
                <h2 className="flex text-xl font-bold justify-center items-center">
                  Professional summary
                </h2>
                <div className="p-2 flex justify-center w-full text-start text-sm rounded-lg">
                  {profileData.paragraphs.map((paragraph, index) => (
                    <p key={index}> {paragraph}</p>
                  ))}
                </div>
              </section>

              <section className="grid grid-cols-2 xs:flex xs:flex-col brightness-125 p-2 m-4 rounded-xl">
                <div className="flex flex-col xs:m-0 m-2">
                  <h2 className="flex text-xl items-start font-bold justify-center">
                    Certifications
                  </h2>

                  <div className="flex flex-col flex-nowrap items-start mr-2 md:flex-wrap sm:flex-wrap p-2 xs:p-1 rounded-xl">
                    {certificationNames.paragraphs.map((paragraph, index) => (
                      <div className="rounded-xl p-1">
                        <p className="justify-items-start" key={index}>
                          {`- ${paragraph}`}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              {/* EDUCATION */}
            </div>
          </div>
        </div>
      </div>
      {/* SKILLS */}
      <div className="flex flex-col xs:mx-4 justify-center items-center shadow-md mt-4 m-20">
        <h2 className="flex text-xl font-bold justify-center items-center">
          Skills {`(Click Tab to view)`}
        </h2>
        <br />
        <div className="flex flex-col flex-nowrap justify-center items-start md:flex-wrap sm:flex-wrap p-1 rounded-xl mx-40">
          <Tabs defaultValue="Cloud Computing" className="w-auto mx-1">
            <div className="">
              <TabsList className="">
                {skillsData.map((item, index) => (
                  <TabsTrigger key={index} value={item.category}>
                    <div className=" item-start p-1">
                      {item.category.split(/\s+/)[0]} <br />
                      {item.category.split(/\s+/)[1]}
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            {skillsData.map((item, index) => (
              <TabsContent key={index} value={item.category}>
                <div className="flex flex-row gap-2 justify-center w-2/4 items-center mr-20 ml-20  bg-indigo-600 p-2 rounded-md">
                  <div className="flex flex-col gap-2">
                    {item.items.map((skill, index) => (
                      <div key={index} className="flex">
                        {skill}
                      </div>
                    ))}{" "}
                  </div>
                  <div className="flex flex-col gap-2">
                    {item.icons.map((icon, index) => (
                      <div
                        key={index}
                        className="flex flex-row rounded-md bg-white"
                      >
                        <img src={icon} width={25} height={25} />
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
      <div className="flex m-4 item-center justify-center">
        <h1 className="text-3xl font-bold">PROJECTS</h1>
      </div>
      <div className="shadow-md">
        <div className=" flex justify-center items-center">
          <Tabs defaultValue="Dashboard Application" className="">
            <TabsList className="flex w-full items-center justify-center p-4">
              {dashboardData.map((item: dashboard, index: number) => (
                <div className="flex justify-center items-center">
                  <TabsTrigger
                    value={item.name}
                    key={index}
                    className=" mr-1 flex-justify-center items-center"
                  >
                    {item.name}
                  </TabsTrigger>
                </div>
              ))}
            </TabsList>
            {dashboardData.map((item: dashboard, index: number) => (
              <div className=" m-1 flex justify-center items-center bg-blue w-full">
                <TabsContent
                  className="flex items-center justify-center"
                  value={item.name}
                >
                  <div className="flex justify-center items-center ml-10">
                    <figure key={index} className=" ml-10 p-2 rounded-lg w-4/4">
                      <div className=" flex flex-col overflow-hidden w-3/4 items-center whitespace-nowrap rounded-md shadow-md p-2">
                        <div className="bg-white p-2 ">
                          <img
                            src={`${item.imageUrls.image1}`}
                            // className="aspect-[3/4] h-96 w-fit object-cover"
                            className="w-full aspect-square rounded-md"
                            // width={400}
                            // height={400}
                          />
                        </div>
                        <div>
                          <figcaption className="pt-2 text-lg text-muted-foreground m-1">
                            <p>{item.name}</p>
                            <span className="font-semibold text-foreground">
                              <p>Description: {item.description}</p>
                            </span>
                          </figcaption>
                        </div>
                      </div>
                    </figure>
                  </div>
                </TabsContent>
              </div>
            ))}
          </Tabs>
        </div>
      </div>
      {/* <div className="flex flex-row basis-1/2 flex-wrap md:flex-nowrap justify-evenly h-auto items-center w-full m-4 mb-20">
        {dashboardData.map((item: dashboard, index: number) => (
          <div key={index} className=" flex flex-col rounded shadow-md">
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
        ))}

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
      </div> */}
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
        <div className="flex flex-col justify-center text-center shadow-md p-2 mb-10">
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
          <p className="px-8 m-1 shadow-md rounded-md">
            @ 2023 Mr Valentine Ampah
          </p>
          <p className="px-8 m-1 shadow-md rounded-md">{getTodaysDate()}</p>
        </div>
      </div>
    </div>
  );
}

export default Home
