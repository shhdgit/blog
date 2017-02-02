<template>
  <div class="article">
    <my-title level="2">文章列表</my-title>
    <router-link
      :to="{ name: 'post_article' }">
      <el-button
        class="btn"
        type="primary"
        icon="plus">写文章</el-button>
    </router-link>
    <router-link
      class="article-item"
      v-for="article in articles"
      tag="a"
      :to="{ name: 'view_article', params: { id: article.id } }">
      <div class="article-item-top">
        <h3 class="article-item-title">{{ article.article.title }}</h3>
        <span class="article-item-time">2017.01.13 18:42</span>
      </div>
      <p class="article-item-brief">{{ article.article.content }}</p>
      <div class="article-item-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-kanguos"></use>
        </svg>
        <span>&nbsp;17</span>
        <svg
          class="icon icon-shanchu"
          aria-hidden="true"
          @click.prevent="del(article.id)">
          <use xlink:href="#icon-shanchu"></use>
        </svg>
      </div>
    </router-link>
  </div>
</template>

<script>
  import MyTitle from 'components/UI/title'
  import { Button } from 'element-ui'
  import { articleApi } from 'api'

  export default {
    data () {
      return {
        articles: [],
      }
    },

    methods: {
      del (id) {
        if (confirm('确认删除吗')) {
          articleApi.del(id).then(res => {
            this.articles = res.data
          })
        }
      }
    },

    created () {
      articleApi.get_list().then(res => {
        this.articles = res.data
      })
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
    position: relative;

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

  .icon-shanchu {
    position: absolute;
    right: .6rem;
    bottom: .4rem;

    padding: 5px;
  }
</style>
