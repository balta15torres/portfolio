import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import("./views/Home.vue")
    },
    {
      path: "/about",
      name: "about",

      component: () =>
        import("./views/About.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import("./views/Contact.vue")
    },
    {
      //RUTA DINAMICA::ahora hay un segundo parametro una variable(:id).
      path: "/projects/:id?",
      name: "projects",
      component: () =>
        import("./views/Projects.vue")
    },
    
  ]
});
