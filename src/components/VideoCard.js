function VideoCard({ videoInfo }) {
  //   console.log("🚀 ~ file: VideoCard.js:2 ~ VideoCard ~ videoInfo:", videoInfo);

  return (
    <div className="w-64 shadow-lg cursor-pointer  rounded-lg  p-2 m-2">
      {/* <div className=" "> */}
      <img
        className="rounded-lg py-1"
        src={videoInfo?.snippet?.thumbnails?.medium?.url}
      ></img>
      {/* </div> */}
      <div>
        {/* <img></img> */}
        <h5 className="text-base">{videoInfo?.snippet?.title}</h5>
      </div>
      <h1> {videoInfo?.snippet?.channelTitle}</h1>
      <div>
        <h1>{videoInfo?.statistics?.viewCount} views</h1>
        {/* <h1> 2 hrs</h1> */}
      </div>
    </div>
  );
}
export default VideoCard;
