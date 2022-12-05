import { createRouter, createWebHashHistory } from 'vue-router'

import UsersView from './views/UsersView.vue'
import HomeView from './views/HomeView.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            component: UsersView,
            path: '/users'
        },

        {
            component: HomeView,
            path: '/'
        }
    ]
})