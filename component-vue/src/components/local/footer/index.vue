<template>
  <div class="footer">
    <section class="footer-help">
      <el-row :gutter='10'>
        <el-col
          :span='8'
          v-for='(item, index) in footer'
          :key='index'
        >
          <section class="help-grid">
            <section class="title">{{item.title}}</section>
            <ul class="help-list">
              <li
                v-for='(Citem, Cindex) in item.children'
                :key='Cindex'
              >
                <i
                  v-if='Citem.icon && Citem.icon !== ""'
                  :class="Citem.icon"
                ></i>
                <section
                  v-html='Citem.title'
                  class="help-cell"
                  @click='clickHelp(Citem)'
                ></section>
                <section
                  v-if='Citem.maskImg && Citem.maskImg !== ""'
                  :class='["mask-img", Citem.maskImg]'
                ></section>
              </li>
            </ul>
          </section>
        </el-col>
        <el-col :span='8'></el-col>
        <el-col :span='8'></el-col>
      </el-row>
    </section>
    <section class="footer-copyright">
      <a
        target="_blank"
        href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402000128"
        rel="nofollow"
      >
        <!-- <a style="margin-right:8px;"> -->
        <img
          src="@/assets/images/police.png"
          style="vertical-align:-6px;margin-right:8px;"
          alt="沪公网安备 31010402000128"
        >沪公网安备 31010402000128号</a>
      <!-- <a
        target="_blank"
        rel="nofollow"
        style="margin-left: 17px"
        href="http://www.miitbeian.gov.cn/"
      > -->
      <a style="margin-right:8px;"><img
          src="@/assets/images/network.png"
          alt="沪ICP备xxxxxxx号-x"
          style="vertical-align:-4px;margin-right:8px;"
        >沪ICP备xxxxxxx号-x</a>
      <!-- <a
        target="_blank"
        style="margin-left: 17px"
        href="https://218.242.124.22:8082/businessCheck/verifKey.do?showType=extShow&amp;serial=9031000020170721110206000001942333-SAIC_SHOW_310000-20131111112754954041&amp;signData=MEUCIGONA4AG1pExDb6kOnq0gaicafgHzjVrZpf3YseTN5ZkAiEA/+LP3riJh9rj8/NlhMQS6OWt02fu1TeXWB59GYeY29w="
        rel="nofollow"
      > -->
      <a style="margin-right:8px;"><img
          width="20"
          src="@/assets/images/lz2.jpg"
          alt="沪工商备 xxxxxxxxxxxxx"
          style="vertical-align:-4px;margin-right:8px;"
        >沪工商备 xxxxxxxxxxxxx</a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'protal-footer',
  data () {
    return {
      footer: [
        {
          title: '发现',
          children: [
            {
              title: '网站地图',
              path: '/',
            },
            {
              title: '投诉与建议',
              path: '/',
            },
          ]
        },
        {
          title: '关注我们',
          children: [
            {
              title: '微信公众号',
              icon: 'el-icon-gaintwechat-fill',
              maskImg: 'wechat-QR',
            },
            {
              title: '支付宝服务窗',
              icon: 'el-icon-gaintalipay-circle-fill',
              maskImg: 'alipay-QR',
            },
          ]
        },
        {
          title: '客户服务',
          children: [
            {
              title: '<p>客服电话</p><p class="tel">8621-6120 5656</p>',
              icon: 'el-icon-service',
            },
            {
              title: '<p>客服传真</p><p class="tel">8621-3397 9990</p>',
              icon: 'el-icon-printer',
            },
            {
              title: '客服邮箱：ac@ztgame.com',
              icon: 'el-icon-message',
              link: 'mailto:ac@ztgame.com',
            },
          ]
        },
      ]
    }
  },
  methods: {
    clickHelp (data = {}) {
      this.$console.log(data)
      const { link = null, path = null } = data;
      if (path) {
        this.$router.push(path);
        return;
      }
      if (link) {
        location.href = link;
        return;
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
