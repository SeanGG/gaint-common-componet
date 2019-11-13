<template>
  <div class="navbar">
    <a
      class="logo"
      href="/"
    >巨人云管平台</a>
    <!-- <hamburger
      v-if="showHamburger"
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    /> -->
    <el-dropdown
      class="menu-dropdown"
      trigger="hover"
    >
      <div class="avatar-wrapper productList">
        <!-- {{ currentMenu ? currentMenu : '' }} -->
        产品列表
        <i class="el-icon-caret-bottom" />
      </div>
      <el-dropdown-menu
        slot="dropdown"
        class="dropdown-container control-guide"
      >
        <!-- <div class="dropdown-search">
          <el-select
            v-model="searchMenu"
            filterable
            placeholder="通过名称/关键字查找产品（例如：云服务器、数据库等）"
            class="search-item"
            @change="changeSearch"
            style="border-radus:0px;"
          >
            <el-option
              v-for="(item, index) in menuOptions"
              :key="`${item.name}-${index}`"
              :label="item.name"
              :value="`${item.path}-${index}`"
            />
          </el-select>
        </div> -->
        <div class="dropdown-grid">
          <template v-for="(item, index) in route">
            <div
              :key="index"
              class="menu-cell"
            >
              <div class="menu-title">
                <svg-icon
                  :icon-class="item.meta.icon"
                  style="font-size:16px;font-weight:600; margin-right:6px"
                />
                {{ item.name }}
              </div>
              <el-dropdown-item
                v-for="(childItem, childIndex) in item.children"
                :key="childIndex"
              >
                <div class="menu-li">
                  <router-link
                    v-if="childItem.projectName === projectName"
                    :to="childItem.path"
                  > {{ childItem.name }}</router-link>
                  <a
                    v-else
                    :target="childItem.target"
                    :href="childItem.host + childItem.path"
                  > {{ childItem.name }}</a>
                </div>
              </el-dropdown-item>
            </div>
          </template>
        </div>
      </el-dropdown-menu>
    </el-dropdown>

    <div class="right-menu">
      <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="hover"
      >
        <div class="avatar-wrapper avatar-user">
          <i class="user-icon"></i>
          <span
            class="user-name"
            data-hot="header.user.center"
            title=""
            style="font-size:12px;"
          >{{username}}</span>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu
          class="header-user"
          slot="dropdown"
          style="width:180px"
        >
          <router-link to="/dashboard">
            <el-dropdown-item>Dashboard</el-dropdown-item>
          </router-link>
          <span class="user-info-line"></span>
          <el-dropdown-item
            divided
            v-if="!token"
          >
            <router-link to="/login">
              <el-dropdown-item>登录</el-dropdown-item>
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item
            divided
            v-else
          >
            <span
              style="display:block;"
              @click="logout"
            >退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
// import Hamburger from '@/components/Hamburger'
import SvgIcon from '@/components/server/SvgIcon'
import { queryNavMenu } from '@/api/common'

export default {
  components: {
    // Hamburger
    SvgIcon
  },
  props: {
    showHamburger: {
      type: Boolean,
      default: true
    },
    token: {
      type: String,
      default: ''
    },
    projectName: {
      type: String,
      default: ''
    },
    username: {
      type: String,
      default: '登录人'
    }
  },
  data () {
    return {
      searchMenu: null,
      routes: [],
    }
  },
  computed: {
    currentMenu () {
      let result = ''

      let { path: actPath } = this.$route
      actPath = '/' + actPath.split('/')[1]

      const mapRoute = (children, name) => {
        children.map(childItem => {
          const { path: childPath, children = [] } = childItem
          if (actPath === childPath) {
            result = name
          } else {
            children.length > 0 && mapRoute(children, name)
          }
        })
      }

      this.routes.map(item => {
        const { children = [], path = '', name } = item
        let actStatus = false
        if (actPath === path) {
          result = name
        }
        mapRoute(children, name)
      })

      if (!result) {
        result = '控制台'
      }

      return result
    },
    route () {
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
    menuOptions () {
      let result = []
      this.routes.map(item => {
        result = result.concat(item.children)
      })
      return result
    }
  },
  created () {
  },
  mounted () {
    // console.log(process.env.VUE_APP_PROJCECT_NAME)
    this.queryNavMenu()
  },
  methods: {
    // toggleSideBar () {
    //   this.$store.dispatch('app/toggleSideBar')
    // },
    // async logout () {
    //   const path = `/login?redirect=${this.$route.fullPath}`
    //   console.log(path)
    //   // this.$router.push(path)
    //   await this.$store.dispatch('user/logout').then(res => {
    //     console.log('logout')
    //     this.$router.push(path)
    //   })
    // },
    // changeMenu (data) {
    //   const { path, target = 'self' } = data
    //   if (target === 'self') {
    //     this.$router.push(path)
    //   } else {
    //     window.open(path)
    //   }
    // },
    // changeSearch (data) {
    //   console.log(data)
    // },
    queryNavMenu () {
      queryNavMenu().then(res => {
        const { routes = [] } = res
        this.routes = routes
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
<style lang="scss">
.dropdown-container {
  .popper__arrow {
    border-color: #262626 !important;
    &:after {
      border-color: #262626 !important;
    }
  }
  .el-dropdown-menu__item:hover {
    background-color: transparent !important;
  }
  .search-item {
    width: 100%;
    input {
      // background:#262626 !important;
      border: 1px solid #484848;
      background-color: #1a1a1a;
      height: 30px;
      line-height: 30px;
      font-size: 12px;
    }
    .el-input__suffix {
      top: 3px;
    }
  }
}
</style>

