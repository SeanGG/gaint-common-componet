<template>
  <div class="index">
    <el-collapse
      v-model="activeName"
      accordion
    >
      <el-collapse-item
        v-for="(item, index) in cpList"
        :key="index"
        :title="item.name"
        :name="index"
      >
        <div>
          <Block>
            <component
              :is="item.component"
              v-if="item.name === 'Navbar'"
              :left-route="leftRoute"
            />
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

import { queryNavMenu } from '@/api/common'

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
  computed: {
    leftRoute () {
      // const route = this.$store.getters.permission_routes
      const result = this.routes.map(item => {
        const { children = [] } = item
        let show = false
        children.map(childItem => {
          const { showInHeader = false } = childItem
          if (showInHeader) {
            show = true
          }
        })
        return {
          ...item,
          showInHeader: show
        }
      })

      return result
    },
  },
  methods: {
    queryNavMenu () {
      queryNavMenu().then(res => {
        const { routes = [] } = res
        this.routes = routes
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
