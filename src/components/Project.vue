<template>
  <div class="project">
    <!--PROPIEDADES DEL ROUTE:: {{$route.params.id}} se usa esta sintaxis
    y el(id)es el segundo parametro que le hemos reguistrado en(router.js).-->
    <h1> {{$route.params.id}} </h1>
    
  </div>
</template>

<script>
export default {
  name: "Project",
  
};
</script>
