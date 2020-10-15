<template>
  <div id="app">
    <GameCardContainer />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { GET_GAME_LIST } from "./store/modules/arena-create";
import GameCardContainer from "./components/GameCardContainer";

export default {
  name: "App",
  async created() {
    await this.getGameList();
  },
  components: {
    GameCardContainer
  },
  methods: {
    ...mapActions("arena", {
      getGameList: GET_GAME_LIST
    })
  }
};
</script>

<style>
</style>
