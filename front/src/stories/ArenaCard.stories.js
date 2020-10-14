import { storiesOf } from "@storybook/vue";
import ArenaCard from "../components/ArenaCard";

storiesOf("ArenaCard", module)
  .add("Tekken 7 Card", () => ({
    data: () => ({
      mainTitle: "TEKKEN 7",
      subTitle: "철권 7",
      loadState: "LOADED",
    }),
    components: {
      ArenaCard,
    },
    methods: {
      onClickCard() {
        console.log("HELLO");
      },
    },
    template: `
  <div>
    <ArenaCard :main-title="mainTitle" :sub-title="subTitle" @click="onClickCard" :load-state="loadState"/>
  </div>
  `,
  }))
  .add("Tekken 7 card loading", () => ({
    data: () => ({}),
    components: {
      ArenaCard,
    },
    template: `
  <div>
    <ArenaCard />
  </div>
  `,
  }));
