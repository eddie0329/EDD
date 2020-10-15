import createArenaStore, {
  getDefaultState,
  SET_GAME_LIST,
} from "../../src/store/modules/arena-create";
import arenaService from "../../src/api/arena-service";

jest.mock("../../src/api/arena-service", () => ({
  __esModule__: true,
  getGameList: jest.fn(),
}));

const { state, mutations, actions } = createArenaStore({ arenaService });

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

  describe("actions test", () => {
    const { GET_GAME_LIST } = actions;
    let commit;
    beforeEach(() => {
      commit = jest.fn();
    });

    it("GET_GAME_LIST TEST", async () => {
      const mockGameList = [{ id: 1, mainTitle: "HELLO", subTitle: "HI" }];
      arenaService.getGameList.mockResolvedValue({
        data: { gameList: mockGameList },
      });
      await GET_GAME_LIST({ commit });
      expect(commit).toHaveBeenCalledWith(SET_GAME_LIST, mockGameList);
    });
  });
});
