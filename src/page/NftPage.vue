<template>
  <div class="nftPage">
    <pageHeadVue />
    <swichNft :list="list">
      <div slot="page1">
        <div class="switchInt">
          <div class="bigThing">大事件1</div>
          <div class="bigThing">ConFi即将推出</div>
        </div>
        <div class="swichNftTextInt">
          艺术家发行认证的唯一版数字艺术品，在以太坊区块链上进行认证以防止伪造，并提供历史来源。
        </div>
        <div class="findButton">
          <baseButton :buttonStyle="{ color: '#fff' }">发现</baseButton>
        </div>
      </div>
      <div slot="page2">
        <div class="switchInt">
          <div class="bigThing">大事件2</div>
          <div class="bigThing">ConFi即将推出</div>
        </div>
        <div class="swichNftTextInt">
          艺术家发行认证的唯一版数字艺术品，在以太坊区块链上进行认证以防止伪造，并提供历史来源。
        </div>
        <div class="findButton">
          <baseButton :buttonStyle="{ color: '#fff' }">发现</baseButton>
        </div>
      </div>
      <div slot="page3">
        <div class="switchInt">
          <div class="bigThing">大事件3</div>
          <div class="bigThing">ConFi即将推出</div>
        </div>
        <div class="swichNftTextInt">
          艺术家发行认证的唯一版数字艺术品，在以太坊区块链上进行认证以防止伪造，并提供历史来源。
        </div>
        <div class="findButton">
          <baseButton :buttonStyle="{ color: '#fff' }">发现</baseButton>
        </div>
      </div>
    </swichNft>
  </div>
</template>

<script>
import pageHeadVue from "@/components/PageHead.vue";
import swichNft from "@/components/NFTPage/swichNft.vue";
import bannerImg1 from "@/assets/bannerImg1.png";
import bannerImg2 from "@/assets/bannerImg2.png";
import bannerImg3 from "@/assets/bannerImg3.png";
import baseButton from "@/components/baseButton.vue";
import nftShowArray from "@/mock/index";
export default {
  name: "nftPage",
  components: {
    pageHeadVue,
    swichNft,
    baseButton,
  },
  data: () => {
    return {
      list: [
        {
          id: 10,
          switchImg: bannerImg1, // swiper图片
          names: "page1", // 插槽名
        },
        {
          id: 11,
          switchImg: bannerImg2,
          names: "page2",
        },
        {
          id: 12,
          switchImg: bannerImg3,
          names: "page3",
        },
      ],
      listTest: [],
    };
  },
  mounted: function () {
    this.listTest = nftShowArray;
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
