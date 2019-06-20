<template>
  <div class="Projects">

    <!--RUTAS DINAMICAS:: Dentro de la etiqueta(router-link) tendremos que recorrer 
    con(v-for="(project,index) in projects")el array de nombres de(projects) y pintarlo en los botones.
    para pasarle la variable local(project) usaremos(:to=) + "{ name_: 'projects',params: { id : project }}"
    -primer parametro(name: 'projects')sera el nombre de la ruta que vamos a trabajar, que estara en(router.js),
    -segundo parametro(params: { id : project.description })sera el parametro que se le pasó en(router.js) 
    llamado en este caso(id) y acontinuacion tenemos que darle el valor de(proyect) que sera el valor de cada(id).-->
    <ul class="Projects__Buttons">
      <li v-for="project in projects" :key="project.id">
        <router-link :to="{ name: 'projects',params: { id : project.id }}">{{project.title}}</router-link>
      </li>
    </ul>

    <!-- <v-toolbar dark>
          <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>{{project.title}}</v-btn>
          </v-toolbar-items>
    </v-toolbar>-->
    <Project
      :title="current.title"
      :image="current.image"
      :littleDescription="current.littleDescription"
      :description="current.description"
    ></Project>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Project from "@/components/Project";

export default {
  name: "Projects",

  components: {
    Project
  },
  //Acederemos al State del Store::
  computed: {
    ...mapState({
      projects: state => state.projects
    }),
    current() {
      const project = this.projects.find(
        pro => pro.id === this.$route.params.id
      );

      return project || {};
    }
  },
  //Metodos de Actions del Store::
  methods: {
    ...mapActions(["getProjects"])
  },
  //Este metodo estamos poniendo a disposicion del HTML el State para pintarlo
  //sin esperar ningun evento.
  mounted() {
    this.getProjects();
  }
};
</script>

<style lang="scss">
.Projects {
  margin-top: 50px;

  .Projects__Buttons {
    display: flex;
    justify-content: space-between;
    background: $grey-navbar;
    height: 50px;
    width: 500px;
    font-size: 15px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    text-decoration: none;
    margin: 15px auto;
    text-transform: uppercase;
    list-style: none;
    padding-left: 0;

    li {
      width: 100%;
      height: 100%;

      &:hover {
        background: rgba(255, 255, 255, 0.12);

        transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);

        a {
          color: white;
        }
      }
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: white;
      }
    }
  }
}
</style>
