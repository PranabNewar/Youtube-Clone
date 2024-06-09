import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

function Body() {
  return (
    <div className="flex   ">
      {/* <div className="w-4/12"> */}
      <SideBar />
      {/* </div> */}
      {/* <div className="w-10/12"> */}
      <div className="flex  w-full px-4">
        <Outlet />
      </div>
      {/* </div> */}
    </div>
  );
}
export default Body;
