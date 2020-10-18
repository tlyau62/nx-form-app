import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFormulate from '@braid/vue-formulate'
import MyFormulateAutocomplete from '@/components/MyFormulateAutocomplete'

Vue.component('MyFormulateAutocomplete', MyFormulateAutocomplete)

Vue.config.productionTip = false

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
