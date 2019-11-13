<template>
  <div class="index">
    <el-collapse
      v-model="activeName"
      accordion
    >
      <el-collapse-item
        v-for="(item, index) in cpList"
        :title="item.name"
        :name="index"
        :key="index"
      >
        <div>
          <Block>
            <component :is="item.component" />
          </Block>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import Block from '@/components/local/block'
import ServerCp from '@/components/server'

const serverComponent = {}
ServerCp.map(item => {
  serverComponent[item.name] = item.component
})

export default {
  name: 'index',
  components: {
    Block,
    // Navbar: ServerCp[0].component
    ...serverComponent
  },
  data () {
    return {
      cpList: ServerCp,
      activeName: '1',
    };
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
