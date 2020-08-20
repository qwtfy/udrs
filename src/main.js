import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import { TiptapVuetifyPlugin } from 'tiptap-vuetify'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)
// don't forget to import CSS styles
import 'tiptap-vuetify/dist/main.css'
// Vuetify's CSS styles 
import 'vuetify/dist/vuetify.min.css'
 
Vue.config.productionTip = false
Vue.use(TiptapVuetifyPlugin, {
  // the next line is important! You need to provide the Vuetify Object to this place.
  vuetify, // same as "vuetify: vuetify"
  // optional, default to 'md' (default vuetify icons before v2.0.0)
  iconsGroup: 'mdi'
})
export const bus=new Vue()

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
