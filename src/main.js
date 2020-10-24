import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueFormulate from '@braid/vue-formulate'
import MyFormulateAutocomplete from '@/components/MyFormulateAutocomplete'
import NxTable from 'nx-table';
import './main.scss';

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
      // debugger;

      return 'form-group';
    },
    wrapper: '',
    label: (context, classes) => {
      if (context.classification === 'group') {
        return 'h3';
      }

      return '';
    },
    element: '',
    input: (context, classes) => {
      let classNames = [];

      if (context.classification === 'file') {
        classNames.push('form-control-file');
      } else if (context.classification === 'button') {
        if (context.type === 'submit') {
          classNames.push('btn btn-primary');
        } else {
          classNames.push('btn btn-secondary btn-sm');
        }
      }

      classNames.push('form-control');

      if (context.hasErrors) {
        classNames.push('is-invalid');
      }

      return classNames;
    },
    help: 'form-text small',
    errors: 'pl-0',
    error: 'invalid-feedback d-block',
    groupRepeatableRemove: 'btn btn-secondary btn-sm',
    // grouping: 'pl-2'
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
