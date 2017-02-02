<template>
  <edit-layout
    ref="edit"
    :post="post"
    :cancel="cancel"></edit-layout>
</template>

<script>
  import EditLayout from 'components/layout/edit'
  import { articleApi } from 'api'

  export default {
    methods: {
      post () {
        const edit = this.$refs.edit
        const id = this.$route.params.id
        const title = edit.getTitle()
        const content = edit.getPreview()
        const editContent = edit.getContent()

        articleApi.update({ id, title, content, editContent })
          .then(res => {
            console.log('ok')
            this.$router.replace(`/article/view/${ id }`)
          })
      },
      cancel () {
        this.$router.back()
      },
    },

    mounted () {
      const edit = this.$refs.edit

      articleApi.get(this.$route.params.id).then(res => {
        const data = res.data

        edit.setTitle(data.article.title)
        edit.setContent(data.edit.content)
      })
    },

    components: {
      EditLayout
    },
  }
</script>

<style lang="css" scoped>
</style>
