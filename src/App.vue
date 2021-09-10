<template>
  <div id="app">
    <div>
      <ul class="header">
        <li class="imgfix">
          <img src="./assets/redlogo.png" alt="" srcset="" />
        </li>
        <li>
          <router-link to="/"> HOME </router-link>
        </li>
        <li><router-link to="/about"> ABOUT </router-link></li>
        <li><router-link to="/contact"> CONTACT US </router-link></li>
        <li><router-link to="/bookonline"> BOOK ONLINE </router-link></li>

        <li class="mobile-button" @click="showMobileMenu">
          <font-awesome-icon icon="bars" />
        </li>
      </ul>
      <!-- Mobile menu -->
      <div class="mobile-menu" v-if="mobileVisible">
        <ul @click="showMobileMenu">
          <li>
            <router-link to="/"> HOME </router-link>
          </li>
          <li><router-link to="/about"> ABOUT </router-link></li>
          <li><router-link to="/contact"> CONTACT US </router-link></li>
          <li><router-link to="/bookonline"> BOOK ONLINE</router-link></li>
        </ul>
      </div>
    </div>
    <router-view />
    <Footer></Footer>
  </div>
</template>


<script>
import HelloWorld from "./components/HelloWorld.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Footer,
  },
  data() {
    return {
      mobileVisible: false,
    };
  },
  methods: {
    showMobileMenu() {
      this.mobileVisible = !this.mobileVisible;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

.header {
  list-style: none;
  background-color: black;
  color: white;
  display: flex;
  justify-content: left;
  padding-inline-start: 0;
  vertical-align: middle;
  min-height: 80px;
  border-bottom: 1px solid rgba(189, 23, 22, 0.6);
}
.header li {
  padding-left: 30px;
  padding-top: 30px;
  text-decoration: uppercase;
}
.header li a {
  color: white;
  text-decoration: none;
}
.header li a:hover {
  color: red;
  text-decoration: none;
}
.mobile-button {
  display: none;
}
.mobile-menu {
  display: none;
}
@media (max-width: 900px) {
  .header li {
    display: none;
  }
  .header img {
    height: 35px;
  }
  .header .imgfix {
    padding-top: 22px !important;
    display: block !important;
  }
  .mobile-button {
    display: block !important;
    margin-left: 45%;
    font-size: 30px;
  }
  .mobile-menu {
    display: block !important;
    background-color: #aa0e16;
  }
  .mobile-menu a {
    color: white;
    font-weight: 600;
  }
  .mobile-menu li {
    padding: 8px;
  }
}
</style>
