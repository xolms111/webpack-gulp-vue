import less from '../src/stylesheets/App.less'

import Vue from 'vue';
import Resource from 'vue-resource'
import Router from 'vue-router'

import App from '../src/components/App.vue'
import PageA from '../src/Views/PageA.vue'
// import PageB from '../src/Views/PageB.vue'

Vue.use(Router);
Vue.use(Resource);
var router = new Router();

router.map({
    '/pageA': {
        name: 'pageA',
        component: PageA
    },
    '/pageB': {
        name: 'pageB',
        component: function (resolve) {
            require(['../src/Views/PageB.vue'], resolve);
        }
    }
});


router.beforeEach(function () {
    window.scrollTo(0, 0);
});

router.redirect({
    '*': '/pageA'
});

router.start(App, '#app');


