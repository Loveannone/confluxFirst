<template>
  <div class="homePage">
    <div class="headStyle">
      <div class="logoImg">
        <img :src="nftLogo" alt="" />
      </div>
      <headInput />
      <div class="headButtonFive">
        <baseButton
          :buttonStyle="{
            backgroundColor: 'rgba(244, 244, 244, 1)',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '24px',
          }"
          >商城</baseButton
        >
        <baseButton
          :buttonStyle="{
            width: '122px',
            borderRadius: '20px',
            backgroundColor: 'rgba(244, 244, 244, 1)',
            border: '1px',
            borderStyle: 'solid',
            borderColor: 'black',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '24px',
            marginLeft: '16px',
          }"
          >创作</baseButton
        >
        <baseButton
          :buttonStyle="{
            width: '142px',
            borderRadius: '20px',
            backgroundColor: 'rgba(244, 244, 244, 1)',
            border: '1px',
            borderStyle: 'solid',
            borderColor: 'black',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '24px',
            marginLeft: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }"
        >
          <div class="loginStyle">
            <img :src="loginSuccess" alt="" style="margin-right: 8px" />
          </div>
          0x9E59…7Acc2
        </baseButton>
        <baseButton
          :buttonStyle="{
            width: '33px',
            height: '33px',
            backgroundColor: 'rgba(244, 244, 244, 1)',
            border: '1px',
            borderStyle: 'dashed',
            borderColor: 'black',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '24px',
            marginLeft: '16px',
          }"
        >
          <img :src="changeLan" alt="" />
        </baseButton>
        <baseButton
          :buttonStyle="{
            width: '33px',
            height: '33px',
            backgroundColor: 'rgba(244, 244, 244, 1)',
            border: '1px',
            borderStyle: 'dashed',
            borderColor: 'black',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '24px',
            marginLeft: '16px',
          }"
        >
          <img :src="headUser" alt="" />
        </baseButton>
      </div>
    </div>
    <div class="outHead"></div>
  </div>
</template>
<script>
import changeLan from "../assets/changeLan.png";
import headFind from "../assets/headFind.png";
import headUser from "../assets/headUser.svg";
import nftLogo from "../assets/nftLogo.svg";
import headInput from "@/components/HeadInput.vue";
import baseButton from "@/components/baseButton.vue";
import loginSuccess from "../assets/loginSuccess.svg";
export default {
  name: "HomeHead",
  data: () => {
    return {
      changeLan: changeLan,
      headFind: headFind,
      headUser: headUser,
      nftLogo: nftLogo,
      loginSuccess: loginSuccess,
    };
  },
  components: {
    headInput,
    baseButton,
  },
};
</script>
<style lang="less" scoped>
@import "@/baseStyle.less";
.homePage {
  .displayAllCenter();
  .headStyle {
    width: 85%;
    margin-top: 48px;
    .displayAllCenter();
    justify-content: space-between;
    .headButtonFive {
      width: 50%;
      padding-left: 200px;
      box-sizing: border-box;
      .displayCenter();
    }
  }
  .outHead {
    width: 100%;
    height: 1px;
    background-color: rgba(222, 220, 220, 1);
    margin-top: 24px;
    margin-left: 24px;
    margin-right: 24px;
  }
}
</style>