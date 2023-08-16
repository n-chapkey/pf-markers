import React from "react";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import Link from "next/link";

const NavBar = () => {
  return (
      <nav className="sticky w-full h-24 shadow-xl bg-">
       <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href='/'>
          <Image
          src={Logo}
          alt="PF Markers Logo"

          height={75}
          className="cursor-pointer"
          priority
          ></Image>
        </Link>
        <div>
          <ul className="hidden sm:flex">
          <Link href="/"><li className="ml-10 uppercase hover:border-b text-xl">Home</li></Link>
            <Link href="/Extreme"><li className="ml-10 uppercase hover:border-b text-xl">Extreme</li></Link>
            <Link href="/Savage"><li className="ml-10 uppercase hover:border-b text-xl">Savage</li></Link>
            <Link href="/Ultimate"><li className="ml-10 uppercase hover:border-b text-xl">Ultimate</li></Link>

          </ul>
        </div>
       </div>
      </nav>

  );
};

export default NavBar;
