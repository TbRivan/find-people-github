import React from "react";

export default function Form({ value, onChange }: Props) {
  return (
    <input
      placeholder="Find User on github"
      className="border border-zinc-100 p-[20px] rounded-[8px] w-[400px]"
      value={value}
      onChange={onChange}
    />
  );
}

interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
