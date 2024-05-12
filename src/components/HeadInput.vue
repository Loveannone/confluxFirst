<template>
  <div class="BaseInput">
    <el-input
      v-model="value"
      :placeholder="placeholder"
      :style="inputStyle"
      @input="changeInputValue"
      :show-password="showPassword"
    >
      <div class="sendButton" slot="suffix">
        <img :src="headFind" alt="" />
      </div>
    </el-input>
  </div>
</template>
<script>
import headFind from "../assets/headFind.png";
export default {
  name: "BaseInput",
  props: {
    placeholder: String,
    inputValue: String,
    inputStyle: Object,
    changeInputValue: {
      type: Function,
      default: () => {},
    },
    showPassword: Boolean,
  },
  data: function () {
    return {
      value: "",
      headFind: headFind,
    };
  },
  watch: {
    inputValue: function (val) {
      this.value = val;
      // localStorage.setItem("user", {
      //   email: "1",
      //   password: 123,
      // });
      // localStorage.getItem("name");
    },
  },
};
</script>
<style  lang="less" scoped>
@import "@/baseStyle.less";
.sendButton {
  position: absolute;
  right: 16px;
  top: 8px;
  border: 1px dashed rgba(34, 34, 34, 1);
  .displayAllCenter();
  cursor: pointer;
}
</style>