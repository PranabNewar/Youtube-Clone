import { useEffect } from "react";
import { closeMenu } from "../utils/redux/appToggleSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY, VIDEO_BY_ID } from "../utils/constant";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

function WatchPage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(
    "🚀 ~ file: WatchPage.js:9 ~ WatchPage ~ params:",
    searchParams.get("v")
  );
  useEffect(() => {
    getVideos();
    dispatch(closeMenu(true));
  }, []);
  async function getVideos() {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&id=${searchParams.get(
        "v"
      )}&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    console.log("🚀 ~ file: WatchPage.js:21 ~ getVideos ~ json:", json);
  }
  return (
    <div className="flex">
      <div className="flex flex-col gap-4">
        <div className=" !w-[55rem] h-fit ">
          <div className=" !aspect-video  relative -z-10">
            <iframe
              className="rounded-3xl  "
              width="100%"
              height="100%"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <CommentContainer />
      </div>
      <div className="  ">
        <LiveChat />
      </div>
    </div>
  );
}
export default WatchPage;
