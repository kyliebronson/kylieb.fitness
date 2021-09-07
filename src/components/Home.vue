<template>
  <div>
    <div class="hero">
      <h2>Fitter, healthier, happier.</h2>
      <img src="../assets/fitpic.jpeg" />
    </div>
    <div class="hero2-top">
      <p class="border"></p>
    </div>
    <div class="hero2">
      <h2>health and fitness coaching</h2>
      <img src="../assets/homepageclients.png" alt="" />
    </div>
    <div class="socialmedia">
      <h2>Follow me on Instagram @kylieb.fit</h2>
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
.hero2 h2 {
  font-family: "Assistant";
  font-weight: 300;
  font-size: 50px;
  margin-bottom: 20px;
  line-height: 1.4;
}
.hero2-top .border {
  width: 100%;
  max-width: 160px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom-color: red;
  border-bottom-width: 5px;
  border-bottom-style: solid;
}
.hero2-top {
  display: flex;
  justify-content: center;
  padding-top: 100px;
}
.hero2 {
  padding-bottom: 100px;
}
</style>