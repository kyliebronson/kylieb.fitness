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
        <li><router-link to="/mealplans"> MEAL PLANS </router-link></li>
        <li><router-link to="/bookonline"> BOOK ONLINE </router-link></li>
      </ul>
    </div>
    <router-view :key="$route.fullPath" />
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
}
.header li {
  padding-left: 30px;
  padding-top: 12px;
}
.header li a {
  color: white;
  text-decoration: uppercase;
}
.header li a:hover {
  color: red;
  text-decoration: underline;
}
.header img {
  height: 35px;
}
.header .imgfix {
  padding-top: 7px !important;
}
</style>
