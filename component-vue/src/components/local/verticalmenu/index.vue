<template>
  <div class="vertical-menu">
    <!-- <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#000"
      text-color="#fff"
      active-text-color="#1a90ff"
    >
      <template v-for='(item, index) in menuList'>
        <template v-if="!item.children || item.children.length === 0">
          <el-menu-item :index="item.path" :key='index'>{{item.title}}</el-menu-item>
        </template>
        <template v-else>
          <el-submenu :index="`${item.path}`" :key='index' popper-class='reset-submenu' :popper-append-to-body='false'>
            <template slot="title">{{item.title}}</template>
            <template v-for='(childItem, childIndex) in item.children'>
              <template v-if="!childItem.children || childItem.children.length === 0">
                <el-menu-item :index="`${item.path}/${childItem.path}`" :key='childIndex' popper-class='aaa'>{{childItem.title}}</el-menu-item>
              </template>
              <template v-else>
                <el-submenu :index="`${item.path}/${childItem.path}`" :key='childIndex'>
                  <template slot="title">{{childItem.title}}</template>
                  <el-menu-item
                    :index="`${item.path}/${childItem.path}/${grandItem.path}`"
                    v-for='(grandItem, grandIndex) in childItem.children'
                    :key='grandIndex'
                  >
                    <template slot="title">{{grandItem.title}}</template>
                  </el-menu-item>
                </el-submenu>
              </template>
            </template>
          </el-submenu>
        </template>
      </template>
    </el-menu> -->
    <section
      v-for='(item, index) in menuList'
      :key='index'
      class='menu-item'
      @mouseover='listenMenuHover'
    >
      <template v-if="!item.children || item.children.length === 0">
        <section
          :index="item.path"
          :key='index'
          class='item-title'
          @click="handleSelect(item.path)"
        >{{item.title}}</section>
      </template>
      <template v-else>
        <section
          :index="item.path"
          :key='index'
          class='item-title'
        >{{item.title}}</section>
        <section
          class='menu-sub'
          :style='menuStyle'
        >
          <section class='menu-sub-cell'>
            <el-row :gutter='30'>
              <!-- <el-col
                v-for='(areaItem, areaIndex) in item.children'
                :key='areaIndex'
                :span='24 / item.children.length'
              >
                <section class="menu-area">
                  <template v-if='areaItem.children && areaItem.children.length > 0'>
                    <section
                      class="menu-area-title"
                      v-if='areaItem.title'
                      @click="handleSelect(item.path + '/' + areaItem.path)"
                    >{{areaItem.title}}</section>
                    <section
                      class='item-title'
                      v-for='(childItem, childIndex) in areaItem.children'
                      :key='childIndex'
                      @click="handleSelect(item.path + '/' + childItem.path)"
                    >{{childItem.title}}
                    </section>
                  </template>
                  <template v-else>
                    <section
                      class='item-title'
                      @click="handleSelect(item.path + '/' + areaItem.path)"
                    >{{areaItem.title}}
                    </section>
                  </template>
                </section>
              </el-col> -->
              <template v-for='(areaItem, areaIndex) in item.children'>
                <template v-if='areaItem.children && areaItem.children.length > 0'>
                  <el-col
                    :key='areaIndex'
                    :span='24 / item.children.length'
                  >
                    <section class="menu-area">
                      <section
                        class="menu-area-title"
                        v-if='areaItem.title'
                        @click="handleSelect(item.path + '/' + areaItem.path)"
                      >{{areaItem.title}}</section>
                      <section
                        class='item-title'
                        v-for='(childItem, childIndex) in areaItem.children'
                        :key='childIndex'
                        @click="handleSelect(item.path + '/' + childItem.path)"
                      >{{childItem.title}}
                      </section>
                    </section>
                  </el-col>
                </template>
                <template v-else>
                  <el-col :key='areaIndex'>
                    <section
                      class='item-title'
                      @click="handleSelect(item.path + '/' + areaItem.path)"
                    >{{areaItem.title}}
                    </section>
                  </el-col>
                </template>
              </template>
            </el-row>
          </section>
        </section>
      </template>
    </section>
  </div>
</template>

<script>
import router from '@/route'
import { formatMenu } from '@/utils/utils'

export default {
  name: 'protal-header',
  data () {
    return {
      activeIndex: '1',
      // 原始menu模板
      // menuList: [
      //   {
      //     name: '首页',
      //     children: [],
      //   },
      //   {
      //     name: '场景合作',
      //     children: [{
      //       name: '数据分析'
      //     }, {
      //       name: '自动化发布'
      //     }, {
      //       name: '1v1定制'
      //     }, {
      //       name: '选项4',
      //       children: [
      //         {
      //           name: '选项1'
      //         },
      //         {
      //           name: '选项2'
      //         },
      //       ]
      //     }],
      //   },
      // ],
      menuList: [],
      menuStyle: {},
    };
  },
  created () {
    this.formatMenu();
  },
  methods: {
    formatMenu () {
      const newMenu = formatMenu(router);
      this.$console.log(newMenu)
      // this.$console.log(JSON.stringify(newMenu))
      this.menuList = newMenu;
    },
    handleSelect (key, keyPath) {
      // this.$console.log(key, keyPath);
      if (key) {
        this.$router.push(key)
      }
    },
    listenMenuHover (e, a) {
      const { target, currentTarget } = e;
      const { offsetWidth: width, offsetHeight: height, offsetLeft: left, offsetRight: right } = currentTarget
      // this.$console.log(height, left)
      this.menuStyle = {
        top: height + 'px',
        left: left + 'px',
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
