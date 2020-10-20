import { storiesOf } from "@storybook/vue";
import GameCard from "../components/GameCard";
import DarkModeWrapper from "./DarkModeWrapper";

storiesOf("GameCard", module)
  .add("Tekken 7 Card", () => ({
    data: () => ({
      mainTitle: "TEKKEN 7",
      subTitle: "철권 7",
      loadState: "LOADED",
    }),
    components: {
      GameCard,
      DarkModeWrapper,
    },
    methods: {
      onClickCard() {
        console.log("HELLO");
      },
    },
    template: `
  <div>
    <DarkModeWrapper v-slot="{isDarkMode}">
      <GameCard :main-title="mainTitle" :sub-title="subTitle" @click="onClickCard" :load-state="loadState" :is-dark-mode="isDarkMode"/>
    </DarkModeWrapper>
  </div>
  `,
  }))
  .add("Tekken 7 card loading", () => ({
    data: () => ({}),
    components: {
      GameCard,
    },
    template: `
  <div>
    <GameCard />
  </div>
  `,
  }));
