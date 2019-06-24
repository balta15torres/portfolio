<template>
  <div class="Navbar">
    <ul class="Navbar__Buttons">
      <li v-for="link in links" :class="getClass(link.page)" :key="link.id">
        <router-link :to="{name: link.page, params: link.params}">{{link.name}}</router-link>
      </li>
    </ul>
  </div>
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
          page: "home"
        },
        {
          id: 1,
          name: "About",
          page: "about"
        },
        {
          id: 2,
          name: "Projects",
          page: "projects",
          params: { id: "neur-on" }
        },
        {
          id: 3,
          name: "Contact",
          page: "contact"
        }
      ]
    };
  },
  methods: {
    getClass(page) {
      return { active: page === this.$route.name };
    }
  }
};
</script>

<style lang="scss">
.Navbar {
  background: $grey-navbar;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  .Navbar__Buttons {
    display: flex;
    justify-items: center;
    height: 80px;
    width: 32%;
    font-size: 15px;
    text-decoration: none;
    margin: 15px auto;
    text-transform: uppercase;
    list-style: none;
    padding-left: 0;
    margin-right: 0;
    .active {
      background: rgba(255, 255, 255, 0.12);
    }
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
