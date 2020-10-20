<template>
  <div>
    <slot :isDarkMode="isDarkMode"></slot>
  </div>
</template>

<script>
import addons from "@storybook/addons";

const channel = addons.getChannel();

export default {
  name: "DarkModeWrapper",
  created() {
    channel.on("DARK_MODE", isDarkMode => {
      this.isDarkMode = isDarkMode;
    });
  },
  beforeDestroy() {
    channel.off("DARK_MODE", isDarkMode => {
      this.isDarkMode = isDarkMode;
    });
  },
  data: () => ({
    isDarkMode: false
  })
};
</script>
