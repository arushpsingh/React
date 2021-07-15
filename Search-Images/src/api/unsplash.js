import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: "Client-ID wcHkPrZ7ZeChWjB4YT8NPQoBknPYp7a-A2nNCNmnLxQ",
  },
});