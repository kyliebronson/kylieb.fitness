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
      </ul>
    </div>
    <router-view />
  </div>
</template>


<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
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
.header img {
  height: 35px;
}
.header .imgfix {
  padding-top: 22px !important;
}
</style>
