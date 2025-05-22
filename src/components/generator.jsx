import React, { useState } from "react";
import imgBack from "../assets/images/background-desktop.png";
import Pattern1 from "../assets/images/pattern-lines.svg";
import Pattern2 from "../assets/images/pattern-squiggly-line-bottom-desktop.svg";
import Pattern3 from "../assets/images/pattern-squiggly-line-top.svg";
import logo from "../assets/images/logo-full.svg";

import ImageUpload from "./ImageUpload";
import InputField from "./InputField";
import Button from "./Button";
import TicketCard from "./TicketCard";

function Generator() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageError, setImageError] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [ticketGenerated, setTicketGenerated] = useState(false);
  const [randomCode, setRandomCode] = useState("");
  const [emailError, setEmailError] = useState("");
  const [githubError, setGithubError] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      if (file.size > 500 * 1024) {
        setImageError("File too large. Please upload a photo under 500KB.");
        return;
      }
      setImageError("");
      setUploadedImage(URL.createObjectURL(file));
    } else {
      setImageError("Please select a valid image file.");
    }
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
    setImageError("");
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleGenerate = () => {
    let isValid = true;

    if (!fullName || !email || !github) {
      if (!email) setEmailError("Email is required.");
      if (!github) setGithubError("GitHub username is required.");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!github.startsWith("@")) {
      setGithubError("GitHub username must start with '@'.");
      isValid = false;
    } else {
      setGithubError("");
    }

    if (!isValid) return;

    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setRandomCode(code);
    setTicketGenerated(true);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background images */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src={imgBack}
        alt="Background"
      />
      <img
        className="hidden sm:block absolute top-0 left-0 w-full opacity-20 pointer-events-none"
        src={Pattern1}
        alt="Pattern 1"
      />
      <img
        className="hidden sm:block absolute bottom-0 left-0 pointer-events-none"
        src={Pattern2}
        alt="Pattern 2"
      />
      <img
        className="hidden sm:block absolute right-0 pointer-events-none"
        src={Pattern3}
        alt="Pattern 3"
      />

      <main className="relative flex flex-col items-center text-center px-4 py-12 max-w-screen-lg mx-auto">
        <img className="mb-8 w-36 sm:w-48" src={logo} alt="Logo" />

        {ticketGenerated ? (
          <section
            aria-live="polite"
            className="w-full flex justify-center items-center"
          >
            <TicketCard
              fullName={fullName}
              email={email}
              github={github}
              uploadedImage={uploadedImage}
              randomCode={randomCode}
            />
          </section>
        ) : (
          <>
            <header className="text-white max-w-xl mx-auto mb-10">
              <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
                Your Journey to Coding Conf 2025 Starts Here
              </h1>
              <p className="text-gray-400 text-base sm:text-lg mt-4">
                Secure your spot at next year's biggest coding conference.
              </p>
            </header>

            <form
              className="w-full max-w-xl mx-auto flex flex-col items-start gap-6"
              onSubmit={(e) => {
                e.preventDefault();
                handleGenerate();
              }}
              noValidate
            >
              <label className="text-white text-lg font-medium">
                Upload Avatar
              </label>

              <ImageUpload
                uploadedImage={uploadedImage}
                onChange={handleImageChange}
                onRemove={handleRemoveImage}
                error={imageError}
              />

              <InputField
                label="Full Name"
                placeholder="Enter Your Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <InputField
                label="Email Address"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
              />
              <InputField
                label="GitHub Username"
                placeholder="@yourusername"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                error={githubError}
              />

              <Button type="submit">Generate My Ticket</Button>
            </form>
          </>
        )}
      </main>
    </div>
  );
}

export default Generator;
