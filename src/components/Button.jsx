import React from "react";

export default function Button({ onClick, children, ariaLabel }) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="
        flex 
        w-full 
        justify-center 
        bg-red-400 
        hover:bg-red-500 
        cursor-pointer 
        rounded-xl 
        text-slate-900 
        font-semibold 
        p-2 
        sm:p-3 
        md:p-4 
        mt-4 
        text-base 
        sm:text-lg 
        md:text-xl 
        transition-all 
        duration-200 
        focus:outline-none 
        focus:ring-4 
        focus:ring-red-300
        focus:ring-offset-2
      "
    >
      {children}
    </button>
  );
}
