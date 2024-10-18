import axios from 'axios';

const API_URL = '/api/';

export const getLeaderBoard = async () => {
  const { status, data } = await axios.get(API_URL + `leaderboard/`);
  return { status, data };
};
