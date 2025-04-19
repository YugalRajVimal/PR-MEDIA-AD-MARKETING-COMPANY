import React from "react";

const VideoCard1 = () => {
  return (
    <div className="flex justify-center items-center px-6  text-center">
      <div className="grid grid-cols-1 gap-6 mt-6 w-full max-w-2xl text-white">
        {/* First Video Card */}
        <div className="  rounded-xl transition-all flex flex-col justify-center items-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-[70%] h-full rounded-lg object-cover"
            src="/video00001.mp4"
            poster="/video1Thumbnail.jpg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoCard1;
