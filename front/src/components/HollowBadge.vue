<template>
  <div class="badge-container" :class="getHollowBadgeType">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    badgeType: {
      type: String,
      default: "default"
    }
  },
  computed: {
    getHollowBadgeType() {
      return this.badge[this.badgeType];
    },
    badge() {
      return {
        default: "default-hollow-badge",
        gray: "gray-hollow-badge",
        purple: "purple-hollow-badge"
      };
    }
  }
};
</script>

<style scoped>
.badge-container {
  display: inline-block;
  width: auto;
  text-align: center;
  line-height: 24px;
  height: 24px;
  border-radius: 12px;
  font-size: 13px;
  padding-left: 2px;
  padding-right: 2px;
}
.default-hollow-badge {
  color: #2c81ff;
  border: solid 1.5px #2c81ff;
}
.gray-hollow-badge {
  color: #a4a3ae;
  border: solid 1.5px #a4a3ae;
}
.purple-hollow-badge {
  color: #8300ff;
  border: solid 1.5px #8300ff;
}
</style>