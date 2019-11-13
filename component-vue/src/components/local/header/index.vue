<template>
  <div class="header">
    <section class='fix'>
      <el-header class="protal-header">
        <section class="clearfix">
          <el-row :gutter="20">
            <el-col :span="16" class='tl'>
              <a
                href='/'
                class="logo"
              >巨人SRE公用组件管理</a>
              <vertical-menu />
            </el-col>
          </el-row>
        </section>
      </el-header>
    </section>
  </div>
</template>

<script>
import VerticalMenu from '@/components/local/verticalmenu'
export default {
  name: 'protal-header',
  components: {
    VerticalMenu
  },
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
