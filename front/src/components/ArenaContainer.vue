<template>
  <div>
    <div v-for="game of gameLists" :key="game.id">
      <ArenaCard
        :main-title="game.mainTitle"
        :sub-title="game.subTitle"
        :load-state="loadState"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ArenaCard from "../components/ArenaCard";

export default {
  components: {
    ArenaCard
  },
  computed: {
    ...mapState("arena", ["gameList", "loadState"])
  }
};
</script>

<style>
</style>