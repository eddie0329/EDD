export const getDefaultState = () => ({
  gameList: [],
});

const SET_GAME_LIST = "SET_GAME_LIST";

const createArenaStore = () => ({
  state: getDefaultState(),
  getters: {},
  mutations: {
    [SET_GAME_LIST](state, newGameList) {
      state.gameList = newGameList;
    },
  },
  actions: {},
});

export default createArenaStore;
