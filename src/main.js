import { createApp } from 'vue';
import App from './App.vue';
import './assets/base.scss';
import 'normalize.css';

import 'virtual:svg-icons-register';

// 解决警告用的库: Added non-passive event listener to a scroll-blocking 'touchstart' event. Consider marking event handler as 'passive' to make the page more responsive
// import 'default-passive-events';

import Components from './components';

const app = createApp(App);

app
  .use(Components)
  .mount('#app');
