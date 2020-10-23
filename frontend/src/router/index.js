import Vue from 'vue';
import Router from 'vue-router';
import Auth from '../views/Auth.vue';
import Home from '../views/Home.vue';
import auth from '../store/modules/auth'

Vue.use(Router);


let router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'auth',
			component: Auth
		},
		{
			path: '/home',
			name: 'home',
			component: Home,
			meta: {
				requiresAuth: true
			}
		}
	]
});
router.beforeEach((to, from, next) => {
	let authenticated = !!auth.state.token;

	if (to.name == 'auth' && authenticated) {
		next({
			path: '/home'
		})
	}
	else if (to.meta.requiresAuth && !authenticated) {
		next({
			path: '/'
		})
	}
	else {
		next()
	}
})

export default router;