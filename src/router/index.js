import { createRouter, createWebHistory } from "vue-router";
import { RequireAuthMixin } from "../stores/RequireAuthMixin";
import dashbordAdminVue from "../components/admin/DashboardAdmin.vue";
import bus from "../components/admin/Bus/BusList.vue";
 import editRoute from "../components/admin/Route/edit-route.vue";
import editProfil from "../components/client/EditProfil.vue";
import detailProfil from "../components/client/DetailProfil.vue";
import NotFoundView from "../views/404View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../essais.vue"),
    },

    {
      path: '/apropos',
      component: () => import('../components/Apropos.vue'), // Chemin vers Apropos.vue
    },
    {
      path: "/login",
      component: () => import("../components/Login.vue"),
    },
    {
      path: "/forget",
      component: () => import("../components/ForgotPassword.vue"),
    },
    {
      path: "/register",
      component: () => import("../components/Register.vue"),
    },
    {
      path: "/reset-password",
      component: () => import("../components/ResetPassword.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/admin.vue"),
      beforeEnter: RequireAuthMixin.beforeRouteEnter,
      children: [
        {
          path: "dashboard",
          component: dashbordAdminVue,
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: "bus",
          component: bus,
        },

        {
          path: "edit-bus/:id",
          name: "edit-bus",
          component: () => import("../components/admin/Bus/edit-bus.vue"),
          props: true,
        },
        {
          path: "userList",
          component: () =>
            import("../components/admin/ManageUser/UserList.vue"),
        },
        {
          path: "profil-admin",
          component: () => import("../components/admin/Profil.vue"),
        },
        {
          path: "route",
          component: () => import("../components/admin/Route/RouteList.vue"),
        },
        {
           path: "/admin/edit-route/:id", // Utilisez un paramètre pour l'ID de la route
           name: "edit-route",
           component: editRoute,
           props: true, // Permet de passer les paramètres en tant que propriétés à la vue
        },
        
        
       

        {
          path: "type",
          component: () => import("../components/admin/Type/TypeList.vue"),
        },
        {
          path: "trajet",
          component: () => import("../components/admin/Trajet/TrajetList.vue"),
        },
      ],
    },
    {
      path: "/user",
      name: "user",
      component: () => import("../views/userView.vue"),
      beforeEnter: RequireAuthMixin.beforeRouteEnter,
      children: [
        {
          path: "edit-profil",
          component: editProfil,
        },
        {
          path: "detail-profil",
          component: detailProfil,
        },
      ],
    },
    {
      path: "/site",
      name: "site",
      component: () => import("../site/Home.vue"),
    },

    {
      path: "/:catchall(.*)*",
      name: "Not Found",
      component: NotFoundView,
      //beforeEnter: RequireAuthMixin.beforeRouteEnter,
    },
  ],
});

/* router.beforeEach((to, from, next) => {
  console.log(to.name);
}); */

export default router;
