import Vue from 'vue';
import VueRouter from 'vue-router';
import Events from '../views/events/Events.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Events',
		component: Events,
		meta: {
			requiresAuth: true,
		},
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
			requiresAuth: false,
		},
	},
	{
		path: '/event/add-new',
		name: 'Add-new',
		component: () =>
			import(
				/* webpackChunkName: "add-new" */ '../views/events/AddNewEvent.vue'
			),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/event/edit',
		name: 'Edit',
		component: () =>
			import(/* webpackChunkName: "edit" */ '../views/events/EditEvent.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '*',
		redirect: '/auth/login',
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	const loggedUser = localStorage.getItem('loggedUser');
	const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
	if (requiresAuth && !loggedUser) next('/auth/login');
	else next();
});

export default router;
