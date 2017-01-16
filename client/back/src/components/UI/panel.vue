<template>
  <div class="panel">
    <ul>
      <li
        v-for="(menu, i) of menuList"
        class="menu-list">
        <router-link
          tag="a"
          class="menu"
          active-class="menu-active"
          :to="menu.route"
          :key="i"><i class="el-icon-document"></i>{{ ' ' + menu.name }}</router-link>
      </li>

    </ul>
  </div>
</template>

<script>
  export default {
    routerFlag: false,

    props: {
      menuList: Array
    },

    components: {
    },
  }
</script>

<style lang="less" scoped>
  .panel {
    position: fixed;

    box-sizing: border-box;
    height: 100%;
    width: 300px;
    padding: 0 2rem;
  }

  .menu {
    display: inline-block;
    min-width: 5rem;
    padding: .5rem 0;

    cursor: pointer;
    color: #5e6d82;
    text-decoration: none;

    transition: color .3s;

    &:hover {
      .menu-active();
    }
  }
  .menu-active {
    color: #20a0ff;
  }
  .menu-list {
    margin-bottom: .5rem;
  }
</style>
