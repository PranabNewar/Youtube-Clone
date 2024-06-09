import { useSelector } from "react-redux";

function SideBar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) {
    return null;
  }
  return (
    <div className="w-48 p-5 shadow-lg">
      <ul>
        <li>Home </li>
        <li> Shorts</li>
        <li> Subscriptions</li>
        <li></li>
      </ul>
      <h1 className="font-bold pt-5">You</h1>
      <ul>
        <li>Your channel</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li>hey There</li>
        <li>Code </li>
        <li> Mern </li>
        <li>Namaste</li>
      </ul>
    </div>
  );
}
export default SideBar;
