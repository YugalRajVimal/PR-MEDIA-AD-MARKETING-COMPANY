import React from "react";

const VideoCard1 = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 w-[48%] max-w-4xl text-white">
        {/* First Video Card */}
        <div className="bg-[#3B2E22] py-2 px-2 rounded-xl shadow-lg border border-yellow-500 hover:shadow-yellow-400 transition-all flex flex-col justify-center items-center">
          <video controls className="w-full rounded-lg" src="/video00001.mp4">
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Second Video Card */}
        <div className="bg-[#3B2E22] py-2 px-2 rounded-xl shadow-lg border border-yellow-500 hover:shadow-yellow-400 transition-all flex flex-col justify-center items-center">
          <video controls className="w-full rounded-lg" src="/video00002.mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoCard1;
