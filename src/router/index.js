import Vue from 'vue';
import VueRouter from 'vue-router';
import Events from '../views/events/Events.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Events',
		component: Events,
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
		meta: {
			hideNavbar: true,
		},
	},
	{
		path: '/auth/register',
		name: 'Register',
		component: () =>
			import(/* webpackChunkName: "register" */ '../views/auth/Register.vue'),
		meta: {
			hideNavbar: true,
		},
	},
	{
		path: '/event/add-new',
		name: 'Add-new',
		component: () =>
			import(
				/* webpackChunkName: "add-new" */ '../views/events/AddNewEvent.vue'
			),
	},
	{
		path: '/event/edit',
		name: 'Edit',
		component: () =>
			import(/* webpackChunkName: "edit" */ '../views/events/EditEvent.vue'),
		props: { eventData: {} },
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
