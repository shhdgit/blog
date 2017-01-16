<template>
  <div class="main">
    <my-header header-link="/dashboard"></my-header>
    <panel :menu-list="menuList"></panel>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
  import 'assets/icon/iconfont'
  import Panel from 'components/UI/panel'
  import MyHeader from 'components/UI/header'

  export default {
    data () {
      return {
        menuList: [
          { name: '文章管理', route: '/article' },
        ],
      }
    },

    components: {
      Panel,
      MyHeader,
    },
  }
</script>

<style lang="css" scoped>
  .main {
    position: relative;

    max-width: 1200px;
    margin: 0 auto;
  }

  .content {
    margin-left: 320px;
    margin-right: 1rem;
    padding: .4rem;
  }
</style>

<style>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
