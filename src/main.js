import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueFormulate from '@braid/vue-formulate'
import MyFormulateAutocomplete from '@/components/MyFormulateAutocomplete'
import NxTable from 'nx-table';

Vue.component('MyFormulateAutocomplete', MyFormulateAutocomplete)

Vue.config.productionTip = false

Vue.use(NxTable)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueFormulate, {
  classes: {
    outer: (context, classes) => {
      return classes.concat([
        'pl-2'
      ])
    },
  },
  library: {
    autocomplete: {
      classification: 'text',
      component: 'MyFormulateAutocomplete'
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
