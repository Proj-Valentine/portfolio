import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex justify-between bg-slate-900">
      <div className="flex">
        <img
          src=""
          alt="profile photo"
          className="rounded-full border-2 h-20 w-20"
        />
      </div>
      <div className="flex justify-end">
        <nav className="flex jusfity-center gap-3">
          <Link to={""}>Home</Link>
          <Link to={""}>Project</Link>
          <Link to={""}>Contacts</Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar

