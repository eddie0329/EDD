export const getDefaultState = () => ({
  gameList: [],
  loadState: "",
});

const SET_GAME_LIST = "SET_GAME_LIST";
const SET_LOAD_STATE = "SET_LOAD_STATE";

const createArenaStore = () => ({
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
  actions: {},
});

export default createArenaStore;
