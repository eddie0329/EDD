import { storiesOf } from "@storybook/vue";
import GameCardContainer from "../components/GameCardContainer";
import { createMockStore } from "./utils";

const getGameList = () => [
  { id: "1", mainTitle: "APEX", subTitle: "에이팩스" },
  { id: "2", mainTitle: "Audition", subTitle: "오디션" },
  { id: "3", mainTitle: "Brawl Stars", subTitle: "브롤 스타즈" },
  { id: "4", mainTitle: "CS:GO", subTitle: "카운터 스트라이크" },
  { id: "5", mainTitle: "Cyphers", subTitle: "사이퍼즈" },
  { id: "6", mainTitle: "DUNGEON & FIGHTER", subTitle: "던전 앤 파이터" },
  { id: "7", mainTitle: "For Honors", subTitle: "포 아너" },
  { id: "8", mainTitle: "Hearth Stone", subTitle: "하스스톤" },
];

const mockArenaStateLoaded = {
  gameList: getGameList(),
  loadState: "LOADED",
};

const mockArenaStateLoading = {
  gameList: getGameList(),
  loadState: "LOADING",
};

storiesOf("GameCardContainer", module)
  .add("loaded sample", () => ({
    components: {
      GameCardContainer,
    },
    template: `
    <GameCardContainer />
  `,
    store: createMockStore(["arena"], [mockArenaStateLoaded]),
  }))
  .add("loading sample", () => ({
    components: {
      GameCardContainer,
    },
    template: `
    <GameCardContainer />
    `,
    store: createMockStore(["arena"], [mockArenaStateLoading]),
  }));
