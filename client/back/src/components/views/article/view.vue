<template>
  <article class="article">
    <h1>{{ article.title }}</h1>
    <p class="time">2017.01.16 22:52</p>
    <el-button
      class="edit"
      @click="$router.push(`/article/post/${ $route.params.id }`)">编辑</el-button>
    <div
      class="article-content"
      v-html="article.content"></div>
  </article>
</template>

<script>
  import { articleApi } from 'api'
  import { Button } from 'element-ui'

  export default {
    data () {
      return {
        article: {
          title: '',
          content: '',
        },
      }
    },

    created () {
      const article_id = this.$route.params.id

      articleApi.get(article_id).then(res => {
        const data = res.data

        this.article.title = data.article.title
        this.article.content = data.article.content
      })
    },

    components: {
      ElButton: Button
    },
  }
</script>

<style lang="css" scoped>
  .article {
    position: relative;
    padding-right: 4rem;
  }

  .time {
    color: #9eabb3;
    font-size: .7rem;
    margin: .4rem 0;
  }

  .article-content {
    margin: 2rem 0;
  }

  .edit {
    position: absolute;
    top: 10px;
    right: 0;
  }
</style>
