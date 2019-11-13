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
          <template v-for="(item, index) in leftRoute">
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
          <template v-for="item in rightRoute">
            <router-link
              v-if="item.target === 'self'"
              :key="item.name"
              :to="item.path"
            >
              <el-dropdown-item>{{item.name}}</el-dropdown-item>
            </router-link>
            <a
              v-else
              :key="item.name"
              :href="item.path"
            >
              <el-dropdown-item>{{item.name}}</el-dropdown-item>
            </a>
          </template>
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
import SvgIcon from '../SvgIcon'

export default {
  components: {
    // Hamburger
    SvgIcon
  },
  props: {
    showHamburger: {
      type: Boolean,
      default: false
    },
    currentMenu: {
      type: String,
      default: ''
    },
    token: {
      type: String,
      default: ''
    },
    projectName: {
      type: String,
      default: ''
    },
    nodeEnv: {
      type: String,
      default: 'development'
    },
    username: {
      type: String,
      default: '登录人'
    },
    leftRoute: {
      type: Array,
      default: () => {
        return []
      }
    },
    rightRoute: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      searchMenu: null,
      routes: [],
    }
  },
  computed: {
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
  },
  methods: {
    logout () {
      const firstHost = this.nodeEnv === 'development' ? 'cas-dev' : 'cas'
      const publicPath = `//${firstHost}.ztgame.com.cn`
      this.$emit('logout', publicPath)
    },
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

