<template>
  <div class="projects">
    <!--RUTAS DINAMICAS:: Dentro de la etiqueta(router-link) tendremos que recorrer 
    con(v-for="(project,index) in projects")el array de nombres de(projects) y pintarlo en los botones.
    para pasarle la variable local(project) usaremos(:to=) + "{ name_: 'projects',params: { id : project }}"
    -primer parametro(name: 'projects')sera el nombre de la ruta que vamos a trabajar, que estara en(router.js),
    -segundo parametro(params: { id : project.description })sera el parametro que se le pasó en(router.js) 
    llamado en este caso(id) y acontinuacion tenemos que darle el valor de(proyect) que sera el valor de cada(id).-->
    <router-link
      v-for="project in projects"
      :key="project.id"
      :to="{ name: 'projects',params: { id : project.id }}"
    >
      <div class="btns_projects"> 
        <ul>
          <li>{{project.title}}</li>
        </ul>
      </div>
    </router-link>

        <!-- <v-toolbar dark>
          <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>{{project.title}}</v-btn>
          </v-toolbar-items>
        </v-toolbar> -->
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
      const project =  this.projects.find(pro => pro.id === this.$route.params.id)

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
.projects {
  text-align: center;
  &__btns_projects{
    display: inline-block;
  }ul{
    list-style-type: none;
  text-decoration: none;
  }
}

</style>

.btns__projects {
  display: inline-block;
}
.btns__projects ul{
  list-style-type: none;
  text-decoration: none;
}

