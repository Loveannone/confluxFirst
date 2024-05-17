<template>
  <div class="listProps"></div>
</template>
<script>
export default {
  name: "ListProps",
  data: () => {
    return {
      list: [
        {
          head: 1,
          title: 2,
          body: 3,
        },
      ],
    };
  },
  props: {},
};
</script>