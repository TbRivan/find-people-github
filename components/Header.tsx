import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="flex flex-row items-center space-x-5 justify-center">
      <Image alt="logo" src={"/logo.png"} width={80} height={80} />
      <div>
        <p className="text-xl md:text-4xl">Find People</p>
        <p className="text-xl md:text-3xl font-bold">Github</p>
      </div>
    </div>
  );
}
