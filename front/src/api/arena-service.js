import axios from 'axios';

const getGameList = () => {
  return axios.get('http://localhost:3000/');
};

export default {
  getGameList
};
