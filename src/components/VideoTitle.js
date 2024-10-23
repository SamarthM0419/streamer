import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-gray-500 p-4 px-12 text-xl text-white rounded-lg bg-opacity-50">▶️Play</button>
        <button className="mx-2 bg-gray-500 p-4 px-12 text-xl text-white rounded-lg bg-opacity-50">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
