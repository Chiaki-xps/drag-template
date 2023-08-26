import { createApp } from 'vue';
import App from './App.vue';
import './assets/base.scss';
import 'normalize.css';

import 'virtual:svg-icons-register';

import Components from './components';

const app = createApp(App);

app
  .use(Components)
  .mount('#app');
