export const getDefaultState = () => ({
  gameList: [],
  loadState: "",
});

// loadState types
const LOADING = "LOADING";
const LOADED = "LOADED";

// mutation types
export const SET_GAME_LIST = "SET_GAME_LIST";
export const SET_LOAD_STATE = "SET_LOAD_STATE";

// actions types
export const GET_GAME_LIST = "GET_GAME_LIST";

const createArenaStore = ({ arenaService }) => {
  const { getGameList } = arenaService;

  return {
    state: getDefaultState(),
    getters: {},
    mutations: {
      [SET_GAME_LIST](state, newGameList) {
        state.gameList = newGameList;
      },
      [SET_LOAD_STATE](state, newLoadState) {
        state.loadState = newLoadState;
      },
    },
    actions: {
      async [GET_GAME_LIST]({ commit }) {
        commit(SET_LOAD_STATE, LOADING);
        const response = await getGameList();
        commit(SET_GAME_LIST, response.data.gameList);
        commit(SET_LOAD_STATE, LOADED);
      },
    },
  };
};

export default createArenaStore;
