import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Bird = () => import('../views/bird/Bird');
const Dolphin = () => import('../views/dolphin/Dolphin');
const Elephant = () => import('../views/elephant/Elephant');
const Owl = () => import('../views/owl/Owl');

const routes = [
    {
        path: '',
        redirect: '/bird'
    },
    {
        path: '/bird',
        component: Bird
    },
    {
        path: '/dolphin',
        component: Dolphin
    },
    {
        path: '/elephant',
        component: Elephant
    },
    {
        path: '/owl',
        component: Owl

    }
];
const router = new VueRouter({
        routes
    }
);

export default router;