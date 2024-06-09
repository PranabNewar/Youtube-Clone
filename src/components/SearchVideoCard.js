import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULT } from "../utils/constant";

function SearchVideoCard() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams] = useSearchParams();

  console.log(
    "🚀 ~ file: SearchVideoCard.js:7 ~ SearchVideoCard ~ param:",
    searchParams.get("search_query")
  );

  useEffect(() => {
    getResultBySearchKey();
  }, [searchParams]);
  async function getResultBySearchKey(keyword) {
    console.log(
      "🚀 ~ file: Head.js:53 ~ getResultBySearchKey ~ keyword:",
      keyword
    );
    const res = await fetch(
      YOUTUBE_SEARCH_RESULT + searchParams.get("search_query")
    );
    const json = await res.json();
    setSearchResult(json.items);
    console.log("🚀 ~ file: Head.js:51 ~ getResultBySearchKey ~ json:", json);
  }
  console.log(
    "🚀 ~ file: SearchVideoCard.js:7 ~ SearchVideoCard ~ searchResult:",
    searchResult
  );

  return (
    <div className="flex flex-col">
      {searchResult?.length > 0 ? (
        searchResult?.map((item) => (
          <div className="flex">
            <div>
              <img src={item.snippet.thumbnails.medium.url} alt="thhumnail" />
            </div>
            <div>
              <h1>{item.snippet.title}</h1>
              <p>views</p>
              <div>
                {" "}
                <img alt="" /> {item.snippet.channelTitle}
              </div>
              <p>{item.snippet.description}</p>
            </div>
          </div>
        ))
      ) : (
        <h1>No Result</h1>
      )}
    </div>
  );
}

export default SearchVideoCard;
