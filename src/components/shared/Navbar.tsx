import { Link } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const Navbar = () => {
  return (
    <div className="flex h-20 flex-row gap-5 justify-between w-full">
      <div className="flex w-2/6 mr-40">
        <Avatar className="rounded-full h-20 w-20">
          <AvatarImage src="/assets/reactic.svg" />
          <AvatarFallback>VA</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <nav className="flex w-4/6 jusfity-end items-end gap-10 p-2 mr-10">
          <Link to="/home">Home</Link>
          <Link to={""}>Project</Link>
          <Link to={""}>Contacts</Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar
