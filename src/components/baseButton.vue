<template>
  <div class="baseButton">
    <button class="button" :style="buttonStyle" @click="buttonClick">
      <slot />
    </button>
  </div>
</template>
<script>
export default {
  name: "BaseButton",
  props: {
    buttonStyle: Object,
    buttonClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/baseStyle.less";
.baseButton {
  .displayAllCenter();
  .button {
    width: 168px;
    height: 48px;
    border: none;
    background-color: rgba(71, 55, 255, 1);
    cursor: pointer;
    .displayAllCenter();
    padding: 0;
  }
}
</style>