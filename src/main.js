import Vue from 'vue'
import App from './App.vue'

import {Icon, Switch} from '@oruga-ui/oruga';
import '@oruga-ui/oruga/dist/oruga.css';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import './assets/tailwind.css';

Vue.config.productionTip = false

library.add(faSun);
library.add(faMoon);

Vue.use(Icon);
Vue.use(Switch);

new Vue({
  render: h => h(App),
}).$mount('#app')

dom.watch();