<template>
  <div
    v-if="loadState === 'LOADING'"
    class="arena-loading-card-container"
  ></div>
  <div v-else class="arena-card-container" @click="onClickCard">
    <div class="main-title">{{ mainTitle }}</div>
    <div class="sub-title">{{ subTitle }}</div>
  </div>
</template>

<script>
export default {
  props: {
    mainTitle: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    loadState: {
      type: String,
      default: "LOADING"
    }
  },
  methods: {
    onClickCard() {
      this.$emit("click");
    }
  }
};
</script>

<style scoped>
.arena-loading-card-container {
  background: #000000;
  opacity: 0.1;
  width: 305px;
  height: 421px;
  border-radius: 8px;
}
.arena-card-container {
  background: #181919;
  width: 305px;
  height: 421px;
  border-radius: 8px;
}
.sub-title {
  color: #ffffff;
  font-size: 14px;
}
.main-title {
  top: 305px;
  left: 14px;
  font-size: 28px;
  letter-spacing: 0.54px;
  color: #eb1302;
}
</style>