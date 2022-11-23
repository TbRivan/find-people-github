import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Image alt="logo" src={"/logo-white.png"} width={80} height={80} />
      );
    } else {
      return <Image alt="logo" src={"/logo.png"} width={80} height={80} />;
    }
  };
  return (
    <div className="flex flex-row items-center space-x-5 justify-center">
      {logoChanger()}
      <div>
        <p className="text-xl md:text-4xl">Find People</p>
        <p className="text-xl md:text-3xl font-bold">Github</p>
      </div>
    </div>
  );
}
