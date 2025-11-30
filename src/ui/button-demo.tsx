import type React from "react";

type Props = {
  children: React.ReactNode;
  event: () => void;
};

export default function ButtonDemo({ children, event }: Props) {
  return (
    <button
      className="xl:relative xl:w-fit xl:m-auto xl:mt-10 cursor-pointer flex h-10 p-5 items-center bg-emerald-400 rounded-md shadow shadow-black underline hover:opacity-80 mt-10 mb-10 absolute top-0 left-0 w-full z-10"
      onClick={() => event()}
    >
      {children}
    </button>
  );
}
