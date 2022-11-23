import Image from "next/image";
import React from "react";
import { UserDetail } from "../types/UserDetail";

export default function ProfileHeader({ user }: Props) {
  if (!user) return null;

  const StatsItem = ({ value, label }: { value: number; label: string }) => {
    return (
      <div className="flex flex-col items-center ">
        <p className="text-2xl font-bold text-gray-700 dark:text-slate-200">
          {value}
        </p>
        <p className="font-semibold text-gray-500 text-sm md:text-md dark:text-slate-200as">
          {label}
        </p>
      </div>
    );
  };
  return (
    <div className="flex flex-col md:flex-row items-center space-x-5 justify-center">
      <Image
        alt="logo"
        src={user?.avatar_url}
        width={150}
        height={150}
        className="rounded-full border"
      />
      <div className="flex flex-col">
        <p className="text-2xl md:text-4xl mt-5 md:mt-0">
          {user?.name}{" "}
          <span className="bg-zinc-100 px-3 text-lg items-center md:items-start dark:text-black">
            {user.id}
          </span>
        </p>
        <div className="inline-flex items-center space-x-5 mt-5 mx-auto">
          <StatsItem value={user?.followers} label="Followers" />
          <StatsItem value={user?.following} label="Following" />
          <StatsItem value={user?.public_repos} label="Public Repos" />
        </div>
      </div>
    </div>
  );
}

interface Props {
  user?: UserDetail;
}
