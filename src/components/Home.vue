<template>
  <div>
    <div class="hero">
      <h2><span>Fit</span> <span>Healthy</span> <span>Happy</span></h2>
      <img src="../assets/fitpic.jpeg" />
    </div>
    <div class="hero2-top">
      <p class="border"></p>
    </div>
    <div class="hero2">
      <h2>health and fitness coaching</h2>
      <div class="hero3">
        <p>
          Working with a trainer online provides flexibility in schedule and
          location, while still giving you the expertise and accountability of a
          trainer. It also integrates all things fitness into one place: your
          workouts, running, biking and anything else you like to do to stay
          active. Benefits of an online trainer include: accessibility, flexible
          communication, progress tracking, planning, and accountability.
        </p>
      </div>
      <img src="../assets/homepageclients.png" alt="" />
    </div>
    <div class="socialmedia">
      <h2>
        Follow me on Instagram
        <a href="https://www.instagram.com/kylieb.fit/"> @kylieb.fit</a>
      </h2>
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
  font-size: 54px;
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
.hero3 {
  font-size: xx-large;
  padding: 30px;
}
.hero span {
  padding: 20px;
  letter-spacing: 10px;
}
@media (max-width: 900px) {
  .hero img {
    width: 100%;
    height: auto;
  }
  .hero2 img {
    width: 100%;
    height: auto;
  }
  .hero h2 {
    width: auto;
    top: 25%;
  }
  .hero span {
    padding: 0;
    letter-spacing: 10px;
  }
  .hero2 h2 {
    font-size: 40px;
  }
  .hero3 {
    font-size: 23px;
  }
}
</style>