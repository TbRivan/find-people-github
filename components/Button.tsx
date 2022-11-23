import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Button({ type, isLoading }: Props) {
  const Loading = () => {
    return (
      <div className="flex justify-center">
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
      </div>
    );
  };

  return (
    <button
      type={type}
      className="bg-black text-white hover:bg-zinc-800 p-[20px] aspect-square rounded-[8px] dark:bg-white dark:text-black dark:hover:bg-zinc-200"
    >
      {isLoading ? <Loading /> : <MagnifyingGlassIcon className="w-5 h-5" />}
    </button>
  );
}

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  isLoading?: boolean;
}
