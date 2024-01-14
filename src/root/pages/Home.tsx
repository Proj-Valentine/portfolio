
import Navbar from './../../components/shared/Navbar';
// import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";



import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  // DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";


import { certificationNames, 
  // dashboardData, 
  hobbiesData, profileData, projectsData, skillsData } from "./../../data/mydata";

import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

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
      <div className="w-full z-50 relative">
        <Navbar />
      </div>
      <div className="flex items-center flex-col w-full mb-4 bg-bg3 px-20">
        <div className="flex flex-col  justify-center mb-20 text-center text-3xl w-full h-5/6 mx-8 p-20 mt-2 ">
          <br />
          {/* <Card>
            <CardContent className=" w-40 md:w-full h-40 md:h-80">
              <img
                src={"/images/profile1.jpg"}
                className="h-40 w-40 md:w-full rounded-md"
              ></img>
            </CardContent>
          </Card> */}
        </div>
      </div>
      <div className="flex flex-col md:flex-nowrap xs:flex-wrap justify-center items-center m-4 xs:m-2 mt-4 w-full shadow-md">
        <div className="flex flex-col md:basis-1/3 content-start m-2 xs:basis-1/2 ml-2 mr-2 justify-center items-center brightness-125 rounded-md shadow-md"></div>

        {/* PROFILE SECTION   */}
        <div className="flex flex-col xs:w-auto md:basis-2/3 xs:basis-1/2 m-2 justify-center items-center rounded-3xl w-full">
          <div className="md:p-1 shadow-md rounded-3xl w-full">
            <div className="flex flex-col md:flex-row justify-between md:grid-cols-2">
              <section className="hidden md:flex brightness-125 p-2 m-1 max-w-md">
                <Card>
                  <CardHeader>
                    <CardTitle className=" text-2xl md:text-3xl font-bold">
                      Professional summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {profileData.paragraphs.map((paragraph, index) => (
                      <p
                        key={index}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      ></p>
                    ))}
                  </CardContent>
                </Card>
              </section>

              <section className="brightness-125 p-2 m-4 rounded-xl max-w-md">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl md:text-3xl font-bold">
                      Certifications{" "}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    {certificationNames.paragraphs.map((paragraph, index) => (
                      <div className="rounded-xl p-1" key={index}>
                        <p className="justify-items-start">
                          {`- ${paragraph}`}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </section>
              {/* EDUCATION */}
            </div>
          </div>
        </div>
      </div>
      {/* SKILLS */}
      <div className="flex flex-col xs:mx-2 justify-center items-center shadow-md mt-4 mb-2">
        <h1 className="flex text-2xl md:text-4xl font-bold justify-center items-center">
          Skills
        </h1>
        <br />
        <div className="flex flex-col justify-center items-start md:flex-wrap sm:flex-wrap p-1 rounded-xl mx-4 md:mx-40">
          <Carousel>
            <CarouselContent>
              {skillsData.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="flex flex-col justify-center items-center border-2 bg-black text-white w-25 md:w-full"
                >
                  <div className=" item-start p-1 mb-4">
                    {/* {item.category.split(/\s+/)[0]} <br />
                    {item.category.split(/\s+/)[1]} */}
                    <h1 className="mb-4 text-2xl">{item.category}</h1>
                    <div className="flex flex-row">
                      <div className="flex flex-col gap-2 mr-2">
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
                  </div>

                  <div></div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="shadow-md">
        <div className=" flex flex-col justify-center items-center p-10">
          <h1 className=" text-2xl md:text-3xl font-bold mb-4">PROJECTS</h1>
          <div>
            {projectsData.map((project, index) => (
              <Drawer key={index}>
                <DrawerTrigger className="m-1 hover:border-blue-500 border-2 rounded-md p-2 text-2xl hover:bg-blue-500 hover:text-white">
                  <Button variant="outline">{project.name}</Button>
                </DrawerTrigger>

                <DrawerContent className="flex justify-center items-center border-2 overflow-auto w-full p-4">
                  <div className="flex flex-col items-center h-full w-full">
                    {!project.imageUrls && (
                      <div className="mb-4">
                        <DrawerHeader>
                          <DrawerTitle className="text-3xl font-bold">
                            {project.name}
                          </DrawerTitle>
                          <DrawerDescription className="text-lg">
                            {project.name}
                          </DrawerDescription>
                        </DrawerHeader>
                      </div>
                    )}

                    <div className="flex flex-col items-center rounded-md shadow-md p-4  h-full">
                      {project.imageUrls && (
                        <>
                          <div className=" p-2 rounded-md">
                            <img
                              src={`${project.imageUrls}`}
                              className="aspect-square rounded-md max-h-50 w-80"
                            />
                          </div>
                        </>
                      )}
                      <div className="flex flex-col space-y-4 h-full">
                        <div className="font-semibold flex flex-col items-start">
                          <p>Description: {project.description}</p>
                          <p className="font-bold mb-1">Features:</p>
                          <div className="flex flex-col items-start justify-start p-2 text-sm">
                            {project.features?.map(
                              (feature: string, index: number) => (
                                <li key={index}>- {feature}</li>
                              )
                            )}
                          </div>
                        </div>
                        <div className="font-semibold">
                          <p className="font-bold mb-1">Tech Stack:</p>
                          <div className="text-sm flex flex-col">
                            <p>{project.techStack?.join(" | ")}</p>
                            {" | "}
                            <>{project.techStacktwo?.join(" | ")}</>
                          </div>
                        </div>
                        <div className="font-semibold">
                          <a
                            href={project.url}
                            target="_blank"
                            className="text-blue-500 hover:underline font-bold"
                          >
                            click here to view project
                          </a>
                        </div>
                      </div>
                      <DrawerFooter>
                        <DrawerClose>
                          <Button variant="outline" className="">
                            Close
                          </Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            ))}
          </div>
        </div>
      </div>

      {/* <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </> */}

      <div className="flex flex-row justify-center">
        <div className="flex flex-col mt-10 justify-center items-center">
          <h2 className="text-3xl font-bold items-center mb-4">HOBBIES</h2>
          <div className="flex flex-row">
            {hobbiesData.map((hobby, index) => (
              <div className="flex flex-row justify-between p-4 m-2 rounded-md">
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
