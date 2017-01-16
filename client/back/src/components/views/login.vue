<template>
  <div class="abs-center login">
    <div class="login-wrap">
      <h1>Blog</h1>
      <el-form
        ref="form"
        :model="form"
        :rules="rules">
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            :type="type" />
        </el-form-item>
        <span
          class="select-disable changePwd"
          @click="changePwdType">{{isPwdType}}</span>
        <el-form-item class="flex-center">
          <el-button
            type="primary"
            @click="submit">登陆</el-button>
          <el-button
            @click="reset">清空</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {
    Form,
    FormItem,
    Input,
    Button,
  } from 'element-ui'

  export default {
    data () {
      function validate (rule, value, callback) {
        if (value === '') {
          callback(new Error(rule.field === 'password' ? '请输入密码' : '请输入用户名'))
        }
        callback()
      }

      return {
        form: {
          username: '',
          password: '',
        },
        rules: {
          username: [{ validator: validate, trigger: 'blur' }],
          password: [{ validator: validate, trigger: 'blur' }],
        },
        pwdType: true,
      }
    },

    computed: {
      type () {
        return this.pwdType ? 'password' : 'text'
      },
      isPwdType () {
        return this.pwdType ? '显示密码' : '隐藏密码'
      },
    },

    methods: {
      submit () {},
      reset () {
        this.$refs.form.resetFields()
      },
      changePwdType () {
        this.pwdType = !this.pwdType
      },
    },

    components: {
      ElForm: Form,
      ElFormItem: FormItem,
      ElInput: Input,
      ElButton: Button,
    },
  }
</script>

<style lang="less" scoped>
  h1 {
    margin: 1rem 0;

    color: #20a0f2;
    cursor: default;
  }

  .login {
    max-width: 350px;
    max-height: 300px;
  }
  .login-wrap {
    margin-top: -4rem;
    padding: 0 50px;
  }

  .changePwd {
    display: inline-block;
    margin-bottom: 5px;
    padding: 0 5px 5px 3px;

    color: #999;
    cursor: pointer;
    font-size: .7rem;
  }
</style>
