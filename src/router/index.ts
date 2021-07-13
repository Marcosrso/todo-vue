import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: import('../views/Home.vue'),
  },
  {
    path: "/tarefas/adicionar",
    name: "Adicionar tarefas",
    component: import('../views/Tasks.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
