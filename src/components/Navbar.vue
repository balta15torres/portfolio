<template>
  <v-container>
    <v-toolbar dark>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>BTS</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="link in links" :key="link.id" :to="`${link.page}`">{{link.name}}</v-btn>
        <v-list></v-list>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" temporary dark>
      <p>asdfa</p>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import About from "../views/About";
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      links: [
        {
          id: 0,
          name: "Home",
          page: "/"
        },
        {
          id: 1,
          name: "About",
          page: "/about"
        },
        {
          id: 2,
          name: "Contact",
          page: "/contact"
        },
        {
          id: 3,
          name: "Projects",
          page: "/projects/neur-on"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.nav {
  padding: 30px;
  background-color: grey;
  text-align: end;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
