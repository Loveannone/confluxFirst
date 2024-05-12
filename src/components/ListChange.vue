<template>
  <div class="menuWrap">
    {{ $t("langName") }}
    <div class="langWrap">
      <button class="langInner" @click="handleCh" v-if="china">切换中文</button>
      <button class="langInner" @click="handleEn" v-if="eng">切换英文</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      china: false,
      eng: true,
    };
  },
  methods: {
    handleCh() {
      this.china = false;
      this.eng = true;
      this.$i18n.locale = "zh-CN";
    },
    handleEn() {
      this.china = true;
      this.eng = false;
      this.$i18n.locale = "en-US";
    },
  },
};
</script>
  
