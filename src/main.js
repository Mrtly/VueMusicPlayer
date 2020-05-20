import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faForward, faPlay, faBackward, faPause} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faForward, faPlay, faBackward, faPause)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
