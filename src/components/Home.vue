<template>
  <div>
    <div class="hero">
      <h2>Fitter, healthier, happier.</h2>
      <img src="../assets/fitpic.jpeg" />
    </div>
  </div>
</template>

<script>
export default {};
</script>
    
<style lang="css">
.hero {
  background-color: #000000;
  color: white;
  position: relative;
}
.hero h2 {
  position: absolute;
  top: 50%;
  text-transform: uppercase;
  background: rgba(234, 0, 0, 0.4);
  width: 100%;
  transition: 0.5s ease;
  opacity: 1;
  color: white;
  font-size: 35px;
  padding: 20px;
  text-align: center;
}
.hero img {
  min-width: 100%;
  height: 100vh;
}
</style>