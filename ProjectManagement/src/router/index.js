import { createRouter, createWebHistory } from 'vue-router'
import HomePageUser from '@/Pages/Home/HomePageUser.vue';
import HomePageMaster from '@/Pages/Home/HomePageMaster.vue'
import profile from '@/Pages/Profile/profile.vue'
import Backlog from '@/Pages/Backlog/Backlog.vue';
import Projects from '@/Pages/Projects/Projects.vue';
import edit from '@/Pages/Projects/EditProjects.vue';
import profileEditContact from '@/Pages/Profile/profileEditContact.vue'
import profileEditUser from '@/Pages/Profile/profileEditUser.vue'
import profileEditLogins from '@/Pages/Profile/profileEditLogins.vue'
import timeline from '@/Pages/Timeline/Timeline.vue'
import list from '@/Pages/List/listAdmin.vue'
import reports from '@/Pages/Reports/reports.vue'
import table from '@/Pages/Table/table.vue'
import login from '@/Pages/Login/login.vue'
import user from '@/Pages/Users/users.vue'
import store from '@/store'
const routes = [ 
{
name:'HomePageUser',
path:'/homeUser',
component:HomePageUser,
meta: { requiresAuth: true }
},
{
    name:'HomePageMaster',
    path:'/homeMaster',
    component:HomePageMaster,
    meta: { requiresAuth: true }
    },
    {
        name:'profile',
        path:'/profile',
        component:profile,
        meta: { requiresAuth: true }
   
        },
        {
            name:'backlog',
            path:'/backlog',
            component:Backlog,
            meta: { requiresAuth: true }
        },   
        {
            name:'projects',
            path:'/projects',
            component:Projects,
            meta: { requiresAuth: true }
        },
        {
            name:'edit',
            path: '/edit/:id',
            component:edit,
            meta: { requiresAuth: true }
        },
        {
            name:'editContact',
            path:'/editContact',
            component:profileEditContact,
            meta: { requiresAuth: true }
        },
        {
            name:'editUser',
            path:'/editUser',
            component:profileEditUser,
            meta: { requiresAuth: true }
        },
        {
            name:'editLogins',
            path:'/editLogins',
            component:profileEditLogins,
            meta: { requiresAuth: true }
        },
        {
            name:'timeline',
            path:'/timeline',
            component:timeline,
            meta: { requiresAuth: true }
        },
        {
            name:'list',
            path:'/list',
            component:list,
            meta: { requiresAuth: true }
        },
        {
            name:'reports',
            path:'/reports',
            component:reports,
            meta: { requiresAuth: true }
        },
        {
            name:'table',
            path:'/table',
            component:table,
            meta: { requiresAuth: true }
        },
        {
            name:'login',
            path:'/login',
            component:login
        },
        {
            name:'user',
            path:'/user',
            component:user,
            meta: { requiresAuth: true }
        },
];

const router = Router();
function Router(){
    const router = new createRouter({
    history: createWebHistory(),
    routes,
    });
    return router;
    };
    router.beforeEach((to, from, next) => {
        if (to.matched.some(record => record.meta.requiresAuth)) {
          if (!store.getters.isAuthenticated) {
            next('/login');
          } else {
            next();
          }
        } else {
          next();
        }
      });
    
export default router;
