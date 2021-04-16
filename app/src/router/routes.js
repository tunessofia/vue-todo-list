import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'
import App from '../App.js'
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: App,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
  ],
});

router.beforeEach((to, from, next) => {
  const x = VueCookies.get('userSession');
  if (to.matched.some(record => record.meta.requiresAuth) && !x) {
    next({
      path: "/login",
      params: { nextUrl: to.fullPath },
    });
  }
  else if(to.matched.some(record => record.meta.guest)) {
    next()
  }  
  else {
    if(to.path !== "/dashboard"){
      next({
        path: "/dashboard",
        params: { nextUrl: to.fullPath },
      });
    }
    else {
      next()
    }
  }
});

export default router;