// import { Link } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { ModeToggle } from '../mode-toggle.tsx';


const Navbar = () => {
  return (
    <div className="md:flex h-20 flex-row gap- justify-between z-50">
      <div className="hidden md:flex w-2/6 mr-40">
        <Avatar className="rounded-full h-20 w-20">
          <AvatarImage src="/images/profile2.jpg" />
          <AvatarFallback>VA</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-col rounded-full justify-center items-center p-1 m-1 brightness-90">
        <h1 className="font-bold text-4xl"> Valentine Ampah</h1>
        <p> Software Developer | Data Engineer | Data Analyst</p>
      
        {/* <ModeToggle /> */}
      </div>
    </div>
  );
}

export default Navbar
