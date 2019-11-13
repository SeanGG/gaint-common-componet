<template>
  <!-- <svg
    :class="svgClass"
    aria-hidden="true"
    v-on="$listeners"
  >
    <use :xlink:href="iconName" />
  </svg> -->
  <svg
    class="icon"
    aria-hidden="true"
  >
    <use :xlink:href="`#gicon${iconClass}`"></use>
  </svg>
</template>

<script>
// import 'http://at.alicdn.com/t/font_1363062_nsbm3bnjb3.js'

export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  },
  mounted () {
    this.createJS()
  },
  methods: {
    createJS () {
      const iconfontJS = document.getElementById('iconfontJS');
      if (iconfontJS) {
        return
      }

      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = 'http://at.alicdn.com/t/font_1363062_nsbm3bnjb3.js';
      s.id = "iconfontJS"
      document.body.appendChild(s);
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
