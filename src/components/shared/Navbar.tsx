// import { Link } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from '../mode-toggle.tsx';
import { iconsData } from '@/data/mydata.ts';


const Navbar = () => {
  return (
    <div className="flex h-20 flex-row gap-5 justify-between w-full z-50 fixed bg-slate-800">
      <div className="flex w-2/6 mr-40">
        <Avatar className="rounded-full h-20 w-20">
          <AvatarImage src="/assets/reactic.svg" />
          <AvatarFallback>VA</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-row rounded-full p-1 m-1 brightness-90">
        {iconsData.progIcons.map((item, index) => (
          <div
            className="flex flex-row  p-1 m-1 brightness-90"
            key={index}
          >
            <img
              src={item}
              width={30}
              height={30}
              className="brightness-90 rounded-full bg-slate-200"
            />
          </div>
        ))}
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar
