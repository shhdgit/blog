<template>
  <div class="article">
    <my-title level="2">文章列表</my-title>
    <router-link
      :to="{name: 'post_article'}">
      <el-button
        class="btn"
        type="primary"
        icon="plus">写文章</el-button>
    </router-link>
    <router-link
      class="article-item"
      v-for="i in [1,2]"
      tag="a"
      :to="{ name: 'view_article' }">
      <div class="article-item-top">
        <h3 class="article-item-title">源码解析系列：测试长度</h3>
        <span class="article-item-time">2017.01.13 18:42</span>
      </div>
      <p class="article-item-brief">这个系列会做一些优秀开源项目的源码解析,这个系列会做一些优秀开源项目的源码解析这个系列会做一些优秀开源项目的源码解析这个系列会做一些优秀开源项目的源码解析，一是为了沉淀和整理自己一年多来所学，二也是希望自己能坚持多做分享，多做开源。文章由初级工程师面向初级工程师，也请大神们多多指点</p>
      <div class="article-item-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-kanguos"></use>
        </svg>
        <span>&nbsp;17</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  import MyTitle from 'components/UI/title'
  import { Button } from 'element-ui'

  export default {
    data () {
      return {

      }
    },

    components: {
      MyTitle,
      ElButton: Button,
    },
  }
</script>

<style lang="less" scoped>
  @grey-color: #969696;

  .article {
    position: relative;
  }

  .btn {
    position: absolute;
    top: .4rem;
    right: 1rem;
  }

  .article-item {
    display: flex;
    flex-direction: column;

    padding: .5rem .8rem;
    margin: 0 0 1rem 0;

    cursor: pointer;
    text-decoration: none;

    transition: background-color .3s;

    &:hover {
      background-color: rgba(248, 249, 250, .5);
    }

    .article-item-top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      margin: .2rem 0 .4rem 0;
    }

    .article-item-title {
      max-width: 15rem;

      color: @grey-color;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .article-item-time {
      color: @grey-color;
      font-size: .75rem;
      white-space: nowrap;
    }

    .article-item-brief {
      height: 3rem;
      margin-bottom: .6rem;

      font-size: .75rem;
      text-align: justify;
      color: #333;
      overflow: hidden;
    }
  }

  .article-item-icon {
    display: flex;
    justify-content: ceneter;

    color: @grey-color;

    span {
      font-size: .65rem;
    }
  }
</style>
