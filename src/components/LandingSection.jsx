"use client";

export default function HeroSectionWithPreview() {
  return (
    <div className="flex h-screen bg-gradient-to-b from-black via-gray-900 to-blue-950 text-white">
      {/* Left Content */}
      <div className="flex flex-col justify-center w-1/2 px-12">
        <div className="mb-4">
          <span className="bg-indigo-600 text-sm font-medium px-3 py-1 rounded-full">
            What's new
          </span>{" "}
          <span className="text-gray-400 text-sm">Just shipped v1.0</span>
        </div>
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Your Gateway to Fun & Easy Programming
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Jelajahi dunia pemrograman tanpa ribet. Kami hadir untuk membimbingmu
          sejak awal.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="#"
            className="bg-indigo-600 px-5 py-3 text-sm font-medium rounded-md hover:bg-indigo-500"
          >
            Get started
          </a>
        </div>
      </div>

      {/* Right Content (Preview Section) */}
      <div className="relative w-1/2 flex justify-center items-center">
        <div className="relative shadow-lg rounded-xl overflow-hidden border border-gray-800">
          {/* Simulating a preview of the website */}
          <img
            src="../src/assets/projek1.png"
            alt="Website preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
