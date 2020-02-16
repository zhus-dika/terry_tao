export default [
    {
      path: "/",
      component: () => import("../components/pages/about"),
      meta: {
        title: "About"
      }
    },
    {
      path: "/papers",
      component: () => import("../components/pages/papers.vue"),
      meta: {
        title: "Papers"
      }
    },
    {
      path: "/quotes",
      component: () => import("../components/pages/quotes.vue"),
      meta: {
        title: "Quotes"
      }
    }/*,
    {
      path: "/login",
      component: () => import("components/pages/login.vue"),
      meta: {
        public: true
      }
    }*/
  ];
  