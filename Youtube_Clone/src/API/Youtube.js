import axios from 'axios';


const KEY = "AIzaSyDEpXyQe4L1jShiHv3EuCUKa5utpJ4phdg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});

