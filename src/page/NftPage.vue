<template>
  <div class="nftPage">
    <pageHeadVue />
  </div>
</template>

<script>
import pageHeadVue from "@/components/PageHead.vue";
export default {
  name: "nftPage",
  components: {
    pageHeadVue,
  },
};
</script>
<style lang="less" scoped>
@import "@/baseStyle.less";
.nftPage {
  background-color: rgba(244, 244, 244, 1);
  min-height: 100vh;
}
</style>
