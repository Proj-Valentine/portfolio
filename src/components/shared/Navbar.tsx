// import { Link } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { ModeToggle } from '../mode-toggle.tsx';


const Navbar = () => {
  return (
    <div className="hidden md:flex h-20 flex-row gap- justify-between z-50">
      <div className="flex w-2/6 mr-40">
        <Avatar className="rounded-full h-20 w-20">
          <AvatarImage src="/assets/reactic.svg" />
          <AvatarFallback>VA</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-row rounded-full p-1 m-1 brightness-90">
        <h1 className="font-bold"> Valentine Ampah</h1>
      
        {/* <ModeToggle /> */}
      </div>
    </div>
  );
}

export default Navbar
