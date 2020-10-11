import Vue from 'vue';
import App from './App.vue';
import router from './router';
<<<<<<< HEAD
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
=======
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import axios from 'axios';

Vue.prototype.$http = axios;
>>>>>>> 016ec04a9339f75642ecdbd973edacbf08cc1c55

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
