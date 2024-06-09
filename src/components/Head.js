import Hamburger from "../assets/svg/hamburger.svg";
import Youtube from "../assets/svg/youtube.svg";
import Search from "../assets/svg/search.svg";
import User from "../assets/png/user.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/redux/appToggleSlice";
import { useEffect, useState } from "react";
import {
  SEARCH_KEY,
  YOUTUBE_SEARCH_RESULT,
  YOUTUBE_SEARCH_SUGGESTION,
} from "../utils/constant";
import { searchCached } from "../utils/redux/searchSlice";
import { click } from "@testing-library/user-event/dist/click";
import { Link } from "react-router-dom";

function Head() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isCachedSearch, setIsCachedSearch] = useState(false);
  const dispatch = useDispatch();

  // console.log("🚀 ~ file: Head.js:11 ~ Head ~ searchQuery:", searchQuery);
  const cachedSeach = useSelector((store) => store.search);
  // console.log("🚀 ~ file: Head.js:20 ~ Head ~ cachedSeach:", cachedSeach);

  useEffect(() => {
    try {
      const timer = setTimeout(async () => {
        if (cachedSeach[searchQuery]) {
          // console.log(
          //   "🚀 ~ file: Head.js:32 ~ timer ~ cachedSeach[searchQuery]:",
          //   cachedSeach[searchQuery]
          // );

          setsuggestions(cachedSeach[searchQuery]);

          setIsCachedSearch(true);
        } else {
          getSuggestion();
          setIsCachedSearch(false);
        }
      }, 200);

      return () => {
        clearTimeout(timer);
      };
    } catch (e) {
      console.log(e);
    }
  }, [searchQuery]);

  // console.log("🚀 ~ file: Head.js:13 ~ Head ~ searchResult:", suggestions);
  async function getSuggestion() {
    const data = await fetch(`${YOUTUBE_SEARCH_SUGGESTION}${searchQuery}`);
    const json = await data.json();

    setsuggestions(json[1]);
    dispatch(
      searchCached({
        [searchQuery]: json[1],
      })
    );

    // console.log("🚀 ~ file: Head.js:19 ~ setTimeout ~ json:", json);
  }

  function toggleMenuHandler() {
    dispatch(toggleMenu());
  }
  return (
    <div className="sticky top-0 w-full  grid grid-flow-col bg-white   p-2 py-3 border shadow-md">
      <div className="flex items-center col-span-1">
        <img
          alt="hamburger"
          src={Hamburger}
          className="w-5 mx-1 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <img src={Youtube} className="w-6 mx-1" alt="Logo"></img>
        <h2 className="text-xl  font-bold">YouTube</h2>
      </div>
      <div className="flex   col-span-10  justify-center px-10 ">
        <input
          className="outline-none w-1/2  border  border-gray-400 rounded-l-full  p-1 px-2"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          onFocus={() => {
            setShowSuggestions(true);
          }}
          onBlur={() => {
            setShowSuggestions(false);
          }}
        ></input>
        <button className="p-1 px-2 border border-gray-400 rounded-r-full">
          <img src={Search} alt="Search" className="w-6" />
        </button>
      </div>
      <div className="flex col-span-1 justify-end">
        <img className="w-10 " src={User} alt="profile"></img>
      </div>

      {showSuggestions && (
        <ul className="absolute top-14 flex flex-col gap-2 bg-white w-[29rem] rounded-lg left-[35%] p-4">
          {suggestions?.map((res, index) => (
            <Link to={"/results?search_query=" + res}>
              <li
                className="flex p-2 gap-2 hover:bg-slate-50 hover:rounded-lg cursor-pointer  items-center "
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  setShowSuggestions(false);
                }}
                key={index}
              >
                <span>
                  <svg
                    fill="#000000"
                    height="16px"
                    width="16px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 488.4 488.4"
                    xmlSpace="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>{" "}
                </span>
                {/* // )} */}
                <span>{res}</span>

                {/* {console.log("🚀 ~ file: Head.js:181 ~ Head ~ res:", res)} */}
                {/* {isCachedSearch && <span className="text-blue-600">remove</span>} */}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Head;
