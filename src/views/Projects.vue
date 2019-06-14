<template>
  <div class="projects">
    <h1>This is an projects page</h1>

    <!--RUTAS DINAMICAS:: Dentro de la etiqueta(router-link) tendremos que recorrer 
    con(v-for="(project,index) in projects")el array de nombres de(projects) y pintarlo en los botones.
    para pasarle la variable local(project) usaremos(:to=) + "{ name_: 'projects',params: { id : project }}"
    -primer parametro(name: 'projects')sera el nombre de la ruta que vamos a trabajar, que estara en(router.js),
    -segundo parametro(params: { id : project.description })sera el parametro que se le pasó en(router.js) 
    llamado en este caso(id) y acontinuacion tenemos que darle el valor de(proyect) que sera el valor de cada(id).-->

    <router-link
      :to="{ name: 'projects',params: { id : project.description }}"
      v-for="(project,index) in projects"
      :key="index"
    > | {{ project.name }} | </router-link>
    <Project/>
  </div>
</template>

<script>
import Project from "../components/Project";

export default {
  name: "Projects",
  components: {
    Project
  },

  data() {
    return {
      //En este array estan los nombres de los proyectos.

      projects: [
        {
          name: "Brico-man",
          description: "123"
        },
        {
          name: "neur-0n",
          description: "456"
        },
        {
          name: "meet-sport",
          description: "789"
        }
      ]
    };
  }
};
</script>

<style>
.router-link-active {
  color: red;
  text-decoration: none
}
</style>


