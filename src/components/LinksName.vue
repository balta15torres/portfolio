<template>
    <div class="linksName">
        <h3>{{$route.name}}</h3>
    </div>
</template>
<script>
export default {
    name:"LinksName"
}
</script>

<style lang="scss">
.linksName {
    
    display: flex;
    justify-content: center;
    align-items: center;
    background: $grey-navbar;
    color: white;
    height: 50px;
    width: 500px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    margin: 15px auto;
  }
</style>

