const routes = [
  {
    path: "/",
    component: () => import("layouts/AppLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("layouts/EmptyLayout.vue"),
        children: [
          {
            path: "/",
            name: "login",
            component: () => import("pages/Login.vue"),
            meta: { auth: false },
          },
        ],
      },
      {
        path: "/main",
        component: () => import("layouts/MainLayout.vue"),
        children: [
          {
            path: "/",
            name: "index",
            meta: { auth: true },
            component: () => import("pages/Index.vue"),
          },
        ],
      },
    ],
  },

  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
