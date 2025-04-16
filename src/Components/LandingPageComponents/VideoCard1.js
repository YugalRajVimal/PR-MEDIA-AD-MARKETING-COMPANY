import React from "react";

const VideoCard1 = () => {
  return (
    <div className="flex  items-center px-6  text-center">
      <div className="grid grid-cols-2 gap-6 mt-6 w-full max-w-2xl text-white">
        {/* First Video Card */}
        <div className="bg-[#3B2E22] py-2 px-2 rounded-xl shadow-lg border border-yellow-500 hover:shadow-yellow-400 transition-all flex flex-col justify-center items-center">
          <video
            controls
            className="w-full rounded-lg"
            src="/video00001.mp4"
            poster="/video1Thumbnail.jpg" // 👈 Add your poster image path
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Second Video Card */}
        <div className="bg-[#3B2E22] py-2 px-2 rounded-xl shadow-lg border border-yellow-500 hover:shadow-yellow-400 transition-all flex flex-col justify-center items-center">
          <video
            controls
            className="w-full rounded-lg"
            src="/video00002.mp4"
            poster="/video2Thumbnail.jpg" // 👈 Add your poster image path
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoCard1;
