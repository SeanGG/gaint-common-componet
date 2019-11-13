import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css';
import 'animate.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false

// 项目私有组件
import '@/assets/style/format.scss';
// import '@/assets/iconfont/iconfont.css';  // iconfont

// import {} from '@/utils/utils';

// 配置仅在测试环境执行方法
if(process.env && process.env.NODE_ENV === 'dev'){
  Vue.prototype.$console = console
}else{
  Vue.prototype.$console = () => {}
}

// 加载公用私有组建
import components from '@/components/local';
components.map(item => {
  Vue.component(item.name, item)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')