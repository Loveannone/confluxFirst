<template>
  <div class="swichNft">
    <div class="swichNftTop">
      <div class="switchNftInt">
        <slot :name="swich[activeIndex]?.names"></slot>
        <div class="buttonChangeSwitch">
          <div class="imgStart">01</div>
          <div class="switchTwoButton">
            <div
              :class="
                index === activeIndex ? 'switchButton' : 'switchButtonStyle'
              "
              v-for="(_item, index) in swich"
              :key="index"
              @click="imgShowChange(index)"
            ></div>
          </div>
          <div class="imgEnd">{{ `0${swich.length}` }}</div>
        </div>
      </div>
      <div class="switchOne">
        <el-carousel
          :initial-index="activeIndex"
          :interval="5000"
          arrow="never"
          :autoplay="false"
          ref="changeImg"
        >
          <el-carousel-item v-for="(item, index) in swich" :key="index">
            <img :src="item.switchImg" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <div class="swichNftDemerger"></div>
  </div>
</template>
<script>
export default {
  name: "SwichNft",
  data: () => {
    return {
      swich: [],
      activeIndex: 1,
    };
  },
  props: {
    list: Array,
    // parentIndex: Number,
  },
  methods: {
    imgShowChange: function (val) {
      this.$refs.changeImg.setActiveItem(val);
      this.activeIndex = val;
    },
  },
  mounted: function () {
    // this.activeIndex = this.parentIndex; // parentIndex: 1
    this.swich = this.list;
  },
};
</script>
<style lang="less" scoped>
@import "@/baseStyle.less";
.swichNft {
  display: flex;
  justify-content: center;
  flex-direction: column;
  .swichNftTop {
    display: flex;
    justify-content: center;
    .switchNftInt {
      margin-top: 98px;
      margin-left: 150px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .switchInt {
        width: fit-content;
        .bigThing {
          width: fit-content;
          font-size: 60px;
          font-weight: 600;
          line-height: 70px;
        }
      }
      .findButton {
        display: flex;
        justify-content: flex-start;
        margin-top: 84px;
      }
      .swichNftTextInt {
        width: 474px;
        margin-top: 30px;
      }
    }
    .buttonChangeSwitch {
      display: flex;
      margin-top: 194px;
      .switchTwoButton {
        margin-left: 10px;
        width: 278px;
        .displayAllCenter();
        .switchButton {
          flex: 1;
          height: 3px;
          background-color: rgba(34, 34, 34, 0.7);
          pointer-events: none;
        }
        .switchButtonStyle {
          flex: 1;
          height: 3px;
          cursor: pointer;
          background-color: rgba(215, 212, 212, 1);
        }
      }
      .imgEnd {
        margin-left: 10px;
      }
    }
    .switchOne {
      .el-carousel {
        width: 665px;
        height: 758px;
      }
    }
  }
  .swichNftDemerger {
    width: 60%;
    border: 1px solid rgba(222, 220, 220, 1);
    margin: auto;
  }
}
</style>