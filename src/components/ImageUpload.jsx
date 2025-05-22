import React from "react";
import Upload from "../assets/images/icon-upload.svg";
import Info from "../assets/images/icon-info.svg";

export default function ImageUpload({
  uploadedImage,
  onChange,
  onRemove,
  error,
}) {
  return (
    <div className="w-full max-w-full">
      {!uploadedImage ? (
        <label
          htmlFor="image-upload"
          className="
            w-full 
            flex flex-col items-center justify-center 
            border-[1px] border-dashed border-neutral-400/40 
            bg-neutral-400/10 rounded-xl 
            p-5 sm:p-6 md:p-8 
            cursor-pointer 
            hover:bg-white/10 
            transition-all
            focus-within:outline-none
            focus-within:ring-2
            focus-within:ring-red-400
            focus-within:ring-offset-2
          "
        >
          <img
            src={Upload}
            alt="Upload Icon"
            className="w-10 h-10 sm:w-12 sm:h-12 p-2 bg-neutral-400/10 rounded-xl"
          />
          <p className="text-white text-base sm:text-xl mt-4 sm:mt-5 text-center">
            Drag and drop or click to upload
          </p>
          <input
            id="image-upload"
            type="file"
            accept="image/jpeg, image/png"
            onChange={onChange}
            className="hidden"
            aria-describedby="upload-info"
          />
        </label>
      ) : (
        <div
          className="
            w-full 
            flex flex-col items-center justify-center 
            border-[1px] border-dashed border-neutral-400/40 
            bg-neutral-400/10 rounded-xl 
            p-5 sm:p-6 md:p-8
          "
        >
          <img
            src={uploadedImage}
            alt="Uploaded Avatar"
            className="w-20 h-20 sm:w-28 sm:h-28 object-cover rounded-xl mb-4"
          />
          <div className="flex gap-4 flex-wrap justify-center">
            <button
              onClick={onRemove}
              className="
                bg-neutral-400/10 
                underline 
                text-neutral-200 
                px-3 py-1
                rounded 
                cursor-pointer
                focus:outline-none
                focus:ring-2
                focus:ring-red-400
                focus:ring-offset-2
              "
              aria-label="Remove uploaded image"
            >
              Remove Image
            </button>
            <label
              htmlFor="image-upload"
              className="
                bg-neutral-400/10 
                text-neutral-200 
                px-3 py-1
                rounded 
                cursor-pointer
                focus:outline-none
                focus:ring-2
                focus:ring-red-400
                focus:ring-offset-2
              "
            >
              Change Image
              <input
                id="image-upload"
                type="file"
                accept="image/jpeg, image/png"
                onChange={onChange}
                className="hidden"
                aria-describedby="upload-info"
              />
            </label>
          </div>
        </div>
      )}

      <div
        id="upload-info"
        className="flex items-center gap-1 text-white text-sm mt-2"
        role={error ? "alert" : undefined}
      >
        <img src={Info} alt="Info Icon" className="w-4 h-4" />
        <p className={error ? "text-red-400" : ""}>
          {error ? error : "Upload your photo (JPG or PNG, max size: 500KB)"}
        </p>
      </div>
    </div>
  );
}
