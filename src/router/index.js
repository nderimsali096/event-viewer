import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/auth/login',
		name: 'Login',
		component: () =>
			import(/* webpackChunkName: "login" */ '../views/auth/Login.vue'),
	},
	{
		path: '/auth/register',
		name: 'Register',
		component: () =>
			import(/* webpackChunkName: "register" */ '../views/auth/Register.vue'),
	},
	{
		path: '/event/add-new',
		name: 'Add-new',
		component: () =>
			import(
				/* webpackChunkName: "add-new" */ '../views/events/AddNewEvent.vue'
			),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
