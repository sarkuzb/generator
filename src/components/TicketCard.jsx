import React from "react";
import Card from "../assets/images/pattern-ticket.svg";
import logo from "../assets/images/logo-full.svg";

export default function TicketCard({
  fullName,
  email,
  github,
  uploadedImage,
  randomCode,
}) {
  return (
    <div className="text-white max-w-xl w-full flex flex-col items-center gap-6 px-4 sm:px-6 md:px-8">
      <p className="text-2xl sm:text-3xl font-bold text-center">
        Congrats, <span className="text-red-400">{fullName}</span>! Your ticket
        is ready.
      </p>
      <p className="text-sm sm:text-lg text-gray-300 text-center max-w-md">
        We've emailed your ticket to{" "}
        <span className="text-red-400">{email}</span> and will send updates in
        the run-up to the event.
      </p>

      <div className="relative w-full max-w-lg mt-6">
        <img
          src={Card}
          alt="Ticket background pattern"
          className="w-full h-auto object-cover rounded-xl"
        />

        {/* On smaller screens, switch to stacked layout */}
        <div className="absolute inset-0 flex flex-col justify-center items-start gap-10 p-6 sm:p-10 md:p-12 text-white">
          <img src={logo} alt="Company logo" className="w-24 sm:w-32" />

          <div className="flex items-center gap-4">
            <img
              className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl object-cover"
              src={uploadedImage}
              alt={`${fullName}'s uploaded avatar`}
            />
            <div>
              <p className="text-lg sm:text-xl font-semibold">{fullName}</p>
              <p className="text-sm sm:text-md text-gray-300">{github}</p>
            </div>
          </div>
        </div>

        <div className="hidden sm:block rotate-90 absolute top-1/2 right-2 transform -translate-y-1/2 text-right text-neutral-200/30">
          <p className="text-xl sm:text-2xl font-bold">#{randomCode}</p>
        </div>

        {/* Show code below ticket on mobile for better UX */}
        <div className="sm:hidden mt-4 text-center text-neutral-200/70 font-bold text-lg">
          #{randomCode}
        </div>
      </div>
    </div>
  );
}
