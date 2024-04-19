import React from "react";
import { Link } from "react-router-dom";
import { LuPhoneCall } from "react-icons/lu";
import { IoMailOpenOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <header className="pt-8">
      <nav className="flex justify-between items-end">
        <Link to="/">
          <img src="../images/logo.webp" alt="logo" className="w-36 2xl:w-40" />
        </Link>
        <div className="flex flex-col">
          <div className="flex items-center justify-end gap-x-2">
            <LuPhoneCall className="text-themePurpleDark text-xl" />
            <a className="text-lg font-semibold" href="tel:+(480)555-0103">
              (480)555-0103
            </a>
          </div>
          <div className="flex items-center justify-end gap-x-2">
            <IoMailOpenOutline className="text-themePurpleDark text-xl" />
            <a className="text-lg font-semibold"  href="mailto:mark@honeyhomeoffers.com">mark@honeyhomeoffers.com</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
