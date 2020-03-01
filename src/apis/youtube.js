import axios from 'axios';
const KEY = 'AIzaSyDjP_fCYhpl23Y6iQhMaN2YiyxA5IGEyOI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
  }
});
