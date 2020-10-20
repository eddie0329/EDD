import Vue from "vue";
import Vuex from "vuex";
import addons from "@storybook/addons";
import { addDecorator } from "@storybook/vue";

Vue.use(Vuex);

const channel = addons.getChannel();

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

const wrapper = (story) => ({
  data: () => ({
    value: "HELLLO",
  }),
  template: `
  <div>
    <story />
  </div>
  `,
});

// addDecorator(wrapper);
