<template>
  <div class="index">
    <section class="banner">
      <el-carousel
        height='500px'
        :interval="6000"
        :autoplay='false'
        trigger="click"
        arrow='never'
        @change='carouselChange'
      >
        <el-carousel-item
          v-for="(item, index) in banner"
          :key="index"
        >
          <section
            class="banner-cell"
            :style='getBg(item)'
          >
            <section class="cell-content">
              <section class="cell-info">
                <section
                  :class="{'title': true, 'animated fadeInDown': index === currentCar}"
                  v-html='item.name'
                ></section>
                <section
                  :class="{'desc': true, 'animated fadeInRight': index === currentCar}"
                  v-html='item.desc'
                ></section>
                <section :class="{'button': true, 'animated fadeInLeft': index === currentCar}">查看详情<i class='el-icon-gaintjiantou' /></section>
              </section>
              <section
                class="cell-item"
                v-if='item.tag && item.tag === "first"'
              >
                <i class="item-1"></i>
                <i class="item-2"></i>
                <i class="item-3"></i>
                <i class="item-4"></i>
                <i class="item-5"></i>
              </section>
            </section>
          </section>
        </el-carousel-item>
      </el-carousel>
    </section>
    <section class="product">
      <section class="title">运维保障精选</section>
      <ul
        class="product-list clearfix"
        data-ilog="1.590.iB0|a"
        style="width: 1040px"
        ilogbinded="true"
      >
        <li v-for="(item, index) in product" :key='index'>
          <a :class="['product-list-item', item.class]">
            <img
              :alt="item.name"
              :src='item.img'
            >
            <div class="product-summary">
              <h4>{{item.name}}</h4>
              <p>{{item.desc}}</p>
            </div>
          </a>
        </li>
      </ul>
    </section>
    <section class="advantage">
      <section class="advantage-grid">
        <section class="block-main">
          <el-row :gutter='0'>
            <el-col
              :span='8'
              class="advantage-item"
              v-for='(item, index) in advantage'
            >
              <section :class="['topic', item.class]"></section>
              <section class="name">{{item.name}}</section>
              <section class="desc">{{item.desc}}</section>
              <section class="link">查看详情</section>
            </el-col>
          </el-row>
        </section>
      </section>
    </section>
    <section class="contact">
      <section class="block-main">
        <section class="title">联系我们</section>
        <section class="image"></section>
        <section class="phone"><i class="el-icon-service"></i>合作热线：021-XXXXXXXX</section>
        <section class="email"><i class="el-icon-message"></i>合作邮箱：xxxx@ztgame.com.cn</section>
      </section>
    </section>
  </div>
</template>

<script>
import banner1 from '@/assets/images/banner-01.jpg'
import productQiuqiu from "@/assets/images/product-qiuqiu.jpg"
import productZhengtu from "@/assets/images/product-zhengtu.jpg"
import productSre from "@/assets/images/product-sre.jpg"

export default {
  name: 'index',
  data () {
    return {
      carRefName: 'car',
      currentCar: 0,
      advantage: [
        {
          name: '运维自动化',
          desc: '智慧生活  减少人工操作',
          class: 'automation'
        },
        {
          name: '智能',
          desc: '智慧生活  温暖时刻在线',
          class: 'intelligence'
        },
        {
          name: '更多场景',
          desc: '更多场景',
          class: 'more'
        },
      ],
      banner: [
        {
          name: '<p>追逐科技的前沿</p><p>安全与保障紧随其后</p>',
          desc: '智慧生活  温暖保障时刻在线',
          img: banner1,
          tag: 'first'
        },
        {
          name: '特点2',
          desc: '描述文案',
        },
        {
          name: '特点3',
          desc: '描述文案',
        },
      ],
      product: [
        {
          name: '球球大作战',
          desc: '5亿年轻人都爱玩！一起来挑战吧!',
          img: productQiuqiu,
          class: 'qiuqiu',
        },
        {
          name: '征途',
          desc: 'slogan征集',
          img: productZhengtu,
          class: 'zhengtu',
        },
        {
          name: '运维自动化',
          desc: '轻松发布',
          img: productSre,
          class: 'sre',
        },
        {
          name: '更多合作',
          desc: '更多合作，敬请期待',
          img: 'http://open-cdn.zhongan.com/dm-instrument/images/aifzwjlaenieig07rlzwrodrfhcpr8nof3fndgbr.png',
        },
      ]
    };
  },
  methods: {
    getBg (data) {
      let result = {};
      const { img = null } = data;
      if (img) {
        result = {
          ...result,
          backgroundImage: `url(${img})`
        }
      }
      return result;
    },
    carouselChange (current, prev) {
      this.$console.log(current)
      this.currentCar = current;
    }
  }
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
