import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    // you have to prefex the api key with REACT_APP_ in order for it to work
    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_CLONE_RAPID_API_KEY, 
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};