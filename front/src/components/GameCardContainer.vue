<template>
  <div>
    <div class="text-container">
      <span class="title">GAME&nbsp;</span>
      <span class="number">{{ gameList.length }}</span>
    </div>
    <div v-for="game in gameList" :key="game.id" class="container">
      <GameCard
        :main-title="game.mainTitle"
        :sub-title="game.subTitle"
        :load-state="loadState"
        @click="onClickGameCard(game.mainTitle)"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import GameCard from "../components/GameCard";

export default {
  components: {
    GameCard
  },
  computed: {
    ...mapState("arena", ["gameList", "loadState"])
  },
  methods: {
    onClickGameCard(gameTitle) {
      console.log(`Hello, ${gameTitle}`);
    }
  }
};
</script>

<style scoped>
.text-container {
  position: relative;
}
.title {
  font-size: 35px;
  font-weight: bold;
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  margin-left: 9px;
}
.number {
  color: #000000;
  opacity: 0.3;
  font-weight: bold;
  margin-left: 3px;
  font-size: 20px;
}
.container {
  display: inline-flex;
  margin-left: 10px;
  margin-bottom: 10px;
}
</style>