import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

function MainContainer() {
  return (
    <div className=" w-full">
      {/* <div className="overflow-x-scroll"> */}
      <ButtonList />
      {/* </div> */}
      <VideoContainer />
    </div>
  );
}
export default MainContainer;
