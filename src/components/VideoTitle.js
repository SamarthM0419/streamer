import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white hover:bg-opacity-50 ">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white p-4 px-12 text-xl text-black font-bold rounded-lg hover:bg-opacity-70 ">
          ▶️Play
        </button>
        <button className="mx-2 bg-gray-500 p-4 px-12 text-xl text-white rounded-lg hover:bg-opacity-70">
          ℹ️More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
