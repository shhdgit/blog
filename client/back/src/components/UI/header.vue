<template>
  <div class="header flex-middle">
    <router-link
      tag="h1"
      :to="headerLink">Blog</router-link>
  </div>
</template>

<script>
  export default {
    props: {
      headerLink: String
    }
  }
</script>

<style lang="less" scoped>
  .header {
    position: relative;
    height: 4rem;
    margin-bottom: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;

    h1 {
      color: #20a0f2;
      cursor: pointer;
    }
  }
</style>
