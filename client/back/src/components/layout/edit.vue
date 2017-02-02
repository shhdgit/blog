<template>
  <div>
    <my-title level="2">写文章</my-title>
    <el-form
      :model="article">
      <el-form-item prop="title">
        <el-input
          placeholder="标题"
          v-model="article.title"></el-input>
      </el-form-item>
      <el-form-item prop="content">
        <textarea ref="editor"></textarea>
      </el-form-item>
      <el-form-item class="flex-right">
        <el-button
          @click="cancel">返回</el-button>
        <el-button
          type="primary"
          @click="post">发表</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import SimpleMDE from 'SimpleMDE'
  import MyTitle from 'components/UI/title'
  import {
    Input,
    Form,
    FormItem,
    Button
  } from 'element-ui'

  export default {
    data () {
      return {
        mde: null,
        article: {
          title: '',
          content: '',
        },
      }
    },

    props: {
      post: {
        type: Function,
        default () {},
      },
      cancel: {
        type: Function,
        default () {},
      },
    },

    methods: {
      getTitle () {
        return this.article.title
      },
      setTitle (title) {
        this.article.title = title
      },
      getPreview () {
        const mde = this.mde

        return mde.options.previewRender(mde.value())
      },
      getContent () {
        return this.mde.value()
      },
      setContent (content) {
        this.mde.value(content)
      },
    },

    mounted () {
      const mde = this.mde = new SimpleMDE({
        element: this.$refs.editor,
        spellChecker: false,
      })
    },

    destroyed () {
      this.mde = null
    },

    components: {
      MyTitle,
      ElForm: Form,
      ElFormItem: FormItem,
      ElInput: Input,
      ElButton: Button,
    },
  }
</script>

<style lang="css" scoped>
</style>
