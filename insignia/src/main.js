import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'
import store from './store/store' 
import VueSpinners from 'vue-spinners'
import VuePrlx from 'vue-prlx'
import VWave from 'v-wave'
import VueSmoothScroll from 'vue3-smooth-scroll'
import VueAnimXyz from '@animxyz/vue3'
import '@animxyz/core' // Import css here if you haven't elsewhere
/* Vue 2 and Vue 3 use the same icon importing syntax */

/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* add some free styles */
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'



/* add each imported icon to the library */
library.add( faUserSecret, faBars);

import './assets/main.css'
import { VuePrlxDirective } from 'vue-prlx'


const app = createApp(App)
app.use(VueSmoothScroll,{
    duration: 400,
    updateHistory: false
  });
app.directive('prlx', VuePrlxDirective);
app.use(VWave)

app.use(VueAnimXyz)

app.use(VueSpinners)
app.use(VuePrlx);
app.use(store)
app.use(router)
app.use(MotionPlugin)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
