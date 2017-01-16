<script>
  export default {
    render (createElement) {
      return createElement(
        'h' + this.level,
        {
          class: {
            title: true
          },
        },
        this.$slots.default
      )
    },

    props: {
      level: {
        required: true,
      },
    },
  }
</script>

<style lang="css" scoped>
  .title {
    margin-bottom: 1.5rem;

    color: #1f2f3d;
  }
</style>
