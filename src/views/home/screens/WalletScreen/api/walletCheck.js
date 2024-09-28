import axios from 'axios';

const API_URL = '/api/';

export const WALLET_STATES = {
  GTD_ACCEPTED: 'gtd-accepted',
  GTD_FOUND: 'gtd-found',
  FCFS_FOUND: 'fcfs-found',
  NOT_REGISTERED: 'not-registered',
};

export const checkWalletFromApi = async (id) => {
  const { status, data } = await axios.get(API_URL + `wallet/info/${id}`);
  return { status, data };
};
