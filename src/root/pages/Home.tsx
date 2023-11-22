
// import { Button } from "@/components/ui/button";
// import { Menubar } from "@/components/ui/menubar";
// import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport,} from "@/components/ui/navigation-menu";
import Navbar from './../../components/shared/Navbar';



const Home = () => {
  return (
    <div className=" flex flex-col gap-3">
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
      <div className=" nav flex flex-col">
        <Navbar />
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center text-3xl">
          <h1>PORTFOLIO VERSE</h1>
        </div>
        <div></div>
      </div>
      <div className="flex grid-cols-2"></div>
      <div className="flex flex-row"></div>
      <div className="flex justify-center"></div>
      <div className="flex justify-center"></div>
    </div>
  );
}

export default Home
