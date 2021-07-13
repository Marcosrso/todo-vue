import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NProgress from 'nprogress';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: import('../views/Home.vue'),
    meta:{
      title: 'Adicionar Tarefa',
      breadcrumb: [{name: "Home"}]
    }
  },
  {
    path: "/tarefas/adicionar",
    name: "Adicionar tarefas",
    component: import('../views/Tasks.vue'),
    meta:{
      title: 'Adicionar Tarefa',
      breadcrumb: [
        {name: "Home", path:'/'}, 
        {name: "Adicionar Tarefa"}
      ]
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.start()
  NProgress.set(0.1)
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router;
