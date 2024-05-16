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

const routes = [ 
{
name:'HomePageUser',
path:'/',
component:HomePageUser
},
{
    name:'HomePageMaster',
    path:'/home',
    component:HomePageMaster
    },
    {
        name:'profile',
        path:'/profile',
        component:profile
        },
        {
            name:'backlog',
            path:'/backlog',
            component:Backlog
        },   
        {
            name:'projects',
            path:'/projects',
            component:Projects
        },
        {
            name:'edit',
            path:'/edit',
            component:edit
        },
        {
            name:'editContact',
            path:'/editContact',
            component:profileEditContact
        },
        {
            name:'editUser',
            path:'/editUser',
            component:profileEditUser
        },
        {
            name:'editLogins',
            path:'/editLogins',
            component:profileEditLogins
        },
        {
            name:'timeline',
            path:'/timeline',
            component:timeline
        },
        {
            name:'list',
            path:'/list',
            component:list
        },
        {
            name:'reports',
            path:'/reports',
            component:reports
        },
        {
            name:'table',
            path:'/table',
            component:table
        },
        {
            name:'login',
            path:'/login',
            component:login
        },
        {
            name:'user',
            path:'/user',
            component:user
        },
];

const router = Router();
export default router;
function Router(){
const router = new createRouter({
history: createWebHistory(),
routes,
});
return router;
}