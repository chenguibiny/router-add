import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import About from './views/About.vue'
// import Student from './views/Student.vue'
// import Community from './views/Community.vue'
// import Learn from './views/Learn.vue'

// import Academic from './components/community/Academic.vue'
// import Download from './components/community/Download.vue'
// import Personal from './components/community/Personal.vue'

// import Question from './components/Question.vue'
// import Err from './components/Err.vue'

const Home = () => import('./views/Home.vue');
const About = () => import('./views/About.vue');
const Student = () => import('./views/Student.vue');
const Community = () => import('./views/Community.vue');
const Learn = () => import('./views/Learn.vue');

const Academic = () => import('./components/community/Academic.vue');
const Download = () => import('./components/community/Download.vue');
const Personal = () => import('./components/community/Personal.vue');

const Question = () => import('./components/Question.vue');
const Err = () => import('./components/Err.vue');
const ChangeCourse = () => import('./components/ChangeCourse')

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:'active',
  linkExactActiveClass:'exact',
  routes: [
    {
      path: '/home',
      name: 'home',
      // alias:'/home',
      components:{
        default:Home,
        // 'academic':Academic
      }
    },
  
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/student',
      name: 'student',
      component: Student
    },
    {
      path: '/learn',
      name: 'learn',
      component: Learn
    },
    {
      path: '/community',
      name: 'community',
      component: Community,
      redirect:'/community/academic',
      meta:{
        login:false
      },
      children:[
        {
          path:"academic",
          // path: '/community/academic',
          name: 'academic',
          component: Academic,
          //路由独享守卫
          // beforeEnter(to,from,next){
          //   const answer = confirm('你还没有登陆，要登陆后才能浏览信息，确定登陆吗？');
          //   if(answer){
          //     next({name:'personal'});
          //   }else{
          //     next(false);
          //   }
          // }

        },
        {
          path:"download",
          // path: '/community/download',
          name: 'download',
          component: Download
        },
        {
          path:"personal",
          // path: '/community/personal',
          name: 'personal',
          component: Personal
        }
      ]
    },
    {
      path:'/question/:id',
      name:'question',
      component:Question
    },
    {
      path:'/err.html',
      name:'err',
      component:Err
    },
    {
      path:'*',
      redirect(to){
        // console.log(to);
        if(to.path == '/'){
          return '/home';
        }else{
          return '/err.html';
          // return {name:'err'};
        }
      }
    },
    {
      path:'/learn/changeCourse',
      name:'changeCourse',
      component:ChangeCourse
    }
  ]
})


//全局守卫
// router.beforeEach((to,from,next) => {
//   //to 去哪里 
//   //from 从哪里来
//   // console.log(to,from);
//   // next();
//   // next(false);
//   if(to.path == '/community/academic'){
//     // alert('去社区');
//     const answer = confirm('你还没有登陆，要登陆后才能浏览信息，确定登陆吗？');
//     if(answer){
//       next({name:'personal'});
//     }else{
//       next(false);
//     }
//   }else{
//     next();
//   }
// })
export default router;