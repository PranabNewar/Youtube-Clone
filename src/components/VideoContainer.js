import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/redux/appToggleSlice";

function VideoContainer() {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const dispatch = useDispatch();

  async function getVideos() {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    const { items } = json;
    setVideoList(items);
    console.log("🚀 ~ file: VideoContainer.js:15 ~ getVideos ~ json:", json);
  }

  return (
    <div className=" flex flex-wrap   ">
      {videoList &&
        videoList.map((item) => (
          <Link to={"/watch?v=" + item.id} key={item.id}>
            {" "}
            <VideoCard videoInfo={item} />
          </Link>
        ))}
    </div>
  );
}
export default VideoContainer;
