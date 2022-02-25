import { createRouter, createWebHistory} from "vue-router";

import productIndex from '../components/products/index.vue'
import notFound from "../components/notFound.vue";
import productNew from "../components/products/new.vue";
import productEdit from "../components/products/edit.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            component: productIndex
        },
        {
            path: '/product/new',
            component: productNew
        },
        {
            path: '/product/edit/:id',
            component: productEdit,
            props:true
        },
        {
            path: '/:pathMatch(.*)*',
            component: notFound
        }
      
    ]
})

export default router