import React from "react";
import Switcher from "./Switcher";

export default function Footer() {
  return (
    <div className="text-center p-10 border-t text-sm md:text-md">
      Search GIT Username using <span className="font-bold">Next.JS</span>
      <Switcher />
    </div>
  );
}
