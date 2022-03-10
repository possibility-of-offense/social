import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/friends",
    name: "friends",
    component: () => import("@/views/FriendsView.vue"),
  },
  {
    path: "/friend/:id",
    name: "Friend",
    component: () => import("@/views/Friend.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
