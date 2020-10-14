import createArenaStore, {
  getDefaultState,
} from "../../src/store/modules/arena-create";

const { state, mutations } = createArenaStore();

describe("arena store test", () => {
  describe("state test", () => {
    it("test1", () => {
      expect(state)
        .toMatchObject(getDefaultState())
        .toBeTyped("object");
    });
  });

  describe("mutations test", () => {
    const { SET_GAME_LIST, SET_LOAD_STATE } = mutations;
    let mockState;
    beforeEach(() => {
      mockState = getDefaultState();
    });
    it("SET_GAME_LIST test", () => {
      const mockGameList = {
        "1": "Hello",
      };
      SET_GAME_LIST(mockState, mockGameList);
      expect(mockState.gameList)
        .toMatchObject(mockGameList)
        .toBeTyped("object");
    });
    it("SET_LOAD_STATE test", () => {
      const mockLoadState = "LOADING";
      SET_LOAD_STATE(mockState, mockLoadState);
      expect(mockState.loadState)
        .toEqual(mockLoadState)
        .toBeTyped("string");
    });
  });
});
