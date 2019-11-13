<template>
  <div id="app">
    <!-- <el-container>
      <common-header />
      <el-main>
        <router-view />
      </el-main>
    </el-container> -->

    <el-container>
      <el-header class="cp-header">
        <common-header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
    <!-- <el-footer class="reset-footer"><common-footer /></el-footer> -->
  </div>
</template>
<style lang="scss">
.reset-footer {
  // background-color:#000;
  height: auto !important;
}
.cp-header {
  padding: 0 !important;
}
</style>

<script>
import CommonHeader from '@/components/local/header'
// import CommonFooter from '@/components/local/footer'

export default {
  name: 'App',
  components: {
    CommonHeader,
    // CommonFooter,
  }
}
</script>
