import Vue from "vue";
import Vuex from "vuex";
import addons from "@storybook/addons";
import { addDecorator, addParameters } from "@storybook/vue";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

Vue.use(Vuex);

const channel = addons.getChannel();
channel.on("DARK_MODE", (isDarkMode) => {
  console.log("DARK", isDarkMode);
});
channel.off("DARK_MODE", () => {
  console.log("OFF");
});

const DarkModeWrapper = Vue.component("DarkModeWrapper", {
  created() {
    channel.on("DARK_MODE", (isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  },
  beforeDestroy() {
    channel.off("DARK_MODE", () => {
      console.log("OFF_DARK_MODE");
    });
  },
  data: () => ({
    isDarkMode: false,
  }),
  template: `
    <div>
      <slot :is-dark-mode="isDarkMode"></slot>
    </div>
  `,
});

addParameters({
  viewport: {
    viewport: INITIAL_VIEWPORTS,
  },
});

// const wrapper = (story, a, b) => ({
//   data: () => ({
//     value: "HELLLO",
//   }),
//   created() {
//     console.log(story);
//     console.log(a);
//     console.log(b);
//   },
//   template: `
//   <div>
//     <story value="hi"></story>
//   </div>
//   `,
// });

// addParameters({ greet: "hello" });

// addDecorator(wrapper);
