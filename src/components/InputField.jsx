import React from "react";
import Info from "../assets/images/icon-info.svg";

export default function InputField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  id,
}) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="w-full flex flex-col mb-4 max-w-full">
      <label
        htmlFor={inputId}
        className="self-start text-neutral-200 my-2 text-base sm:text-lg"
      >
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className="
          bg-neutral-400/10 
          border-[1px] 
          border-neutral-400/40 
          rounded-xl 
          placeholder:text-neutral-300/50 
          text-neutral-200 
          p-2 
          sm:p-3
          text-base 
          sm:text-lg
          focus:outline-none
          focus:ring-2
          focus:ring-red-400
          focus:ring-offset-2
          transition
          duration-200
        "
      />
      {error && (
        <div
          id={`${inputId}-error`}
          role="alert"
          className="flex items-center gap-1 text-white text-sm mt-2"
        >
          <img src={Info} alt="Info Icon" className="w-4 h-4" />
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}
    </div>
  );
}
