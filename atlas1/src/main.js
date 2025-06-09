import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";
import { createIconsConfig } from "vuestic-ui";
import "vuestic-ui/css";
import 'material-design-icons-iconfont/dist/material-design-icons.min.css';

            // if you need Ion

import "vue3-openlayers/styles.css";
import OpenLayersMap from "vue3-openlayers";


createApp(App).use(store).use(router).use(OpenLayersMap).use(ElementPlus).use(createVuestic({
    config: {
      icons: createIconsConfig({
        defaultSet: 'mdi',           // the one used when you omit the prefix
        sets: [
          { name: 'mdi', iconfont: 'mdi' },
          { name: 'fa',  iconfont: 'fa' },
          { name: 'ion', iconfont: 'ion' },
        ],
      }),
    },
  })).mount('#app');


