<template>
  <div class="project">
    <!--PROPIEDADES DEL ROUTE:: {{$route.params.id}} se usa esta sintaxis
    y el(id)es el segundo parametro que le hemos reguistrado en(router.js).-->
    <!--{{$route.params.id}}-->

    <v-container>
      <v-layout>
        <v-flex xs12 sm6>
          <v-card>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
              <v-card-title><h1>{{$route.params.id}}</h1></v-card-title>
              <v-card-text><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod facere cum recusandae rerum error eius illum, 
                iusto, debitis, placeat quisquam non iste vel omnis molestias minus officia ullam. Aliquid, eius!</p>
              </v-card-text>
              <v-card-actions>
                <v-btn color="info" flat>ir al proyecto</v-btn>
              </v-card-actions>
            
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Project"
};
</script>

<style lang="scss">
</style>




