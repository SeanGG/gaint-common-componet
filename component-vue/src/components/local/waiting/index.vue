<template>
  <div class="waiting">
    <el-row
      :gutter="20"
      type="flex"
      align="middle"
      justify='center'
    >
      <el-col
        :span="12"
        class="tr"
      >
        <div class="imgEle">
        </div>
      </el-col>
      <el-col :span="12">
        <div class="content">
          <h1 v-if='title'>{{title}}</h1>
          <div class="desc">{{desc}}</div>
          <div class="actions">
            <el-button
              type="primary"
              icon="el-icon-search"
              @click="backHome"
            >{{backText}}</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'waiting',
  data () {
    return {
      title: '',
      desc: '抱歉，你访问的页面还在建设中～',
      backText: '返回首页',
    };
  },
  methods: {
    backHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
