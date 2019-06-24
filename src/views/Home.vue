<template>
  <div class="Home">
    <LinksName/>
  </div>
</template>

<script>
import LinksName from "@/components/LinksName";

export default {
  name: "Home",
  components:{
    LinksName,
  }
};
</script>

<style lang="scss">
.Home{
text-align: center;
margin-top: 50px;

}

</style>