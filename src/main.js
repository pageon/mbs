import { createApp } from 'vue'
import Locale from './locale.js';
import App from './App.vue'

import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

let app = createApp(App);
Locale.load(app);
document.title = Locale.get('MentalBucketSystem');
app.mount('#app')
