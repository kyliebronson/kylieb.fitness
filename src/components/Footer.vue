<template>
  <footer class="footer">
    <div class="content has-text-centered"></div>
    <p>{{ footertext }}</p>
  </footer>
</template>


<script>
export default {
  data() {
    return {
      footertext: "Copyright 2021",
    };
  },
};
</script>

<style scoped>
footer {
  background-color: black;
  color: white;
  padding: 35px;
  text-align: right;
  /* position: absolute;
  bottom: 0; */
  margin-top: 30px;
}
</style>