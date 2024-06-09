export const GOOGLE_API_KEY = "AIzaSyB9pRzmrwbN45f7eDJ0GlKhOIxpSMDoljw";

export const YOUTUBE_VIDEO_API =
  " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
export const VIDEO_BY_ID =
  "https://youtube.googleapis.com/youtube/v3/videos?part=id&key=" +
  GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_SUGGESTION =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULT = `https://youtube.googleapis.com/youtube/v3/search?key=${GOOGLE_API_KEY}&part=snippet&maxResults=25&q=`;

// `https://youtube.googleapis.com/youtube/v3/search?key= +${GOOGLE_API_KEY}+&type=video&part=snippet&q=`;
