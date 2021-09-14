<template>
  <div class="title">
    <p>About</p>
    <div class="main">
      <div class="image"><img src="../assets/me.png" alt="" /></div>
      <div class="paragraph">
        <div class="inner-paragraph">
          <p>Meet Kylie!</p>
          <p1>
            When I started my fitness journey back in November I was instantly
            intrigued by it. I currently am working towards my NASM
            certification in hopes to pursure my dream of helping others. I
            created this online fitness program in order to easily help people
            who want to start their fitness journey. Stepping into the gym can
            be intimidating for most, but I promise the outcome will all be
            worth it!
          </p1>
        </div>
      </div>
    </div>
  </div>
</template>
 
<style scoped>
p {
  text-transform: uppercase;
  padding-top: 30px;
  font-size: 45px;
}
p {
  padding: 30px;
}

.main {
  position: relative;
  width: 100%;
  top: 20px;
  min-height: 80vh;
}
.image {
  position: absolute;
  left: 20%;
}
.paragraph {
  position: absolute;
  left: 46%;

  background-color: white;
  padding: 18px;
  max-width: 400px;
  top: 65px;
}
.inner-paragraph {
  border: 2px solid;
  padding: 10px;
}
.image img {
  border: 2px solid;
  max-width: 90%;
}
@media (max-width: 900px) {
  .image img {
    max-height: 350px;
  }
  .paragraph {
    max-width: none;
    position: inherit;
  }
  .inner-paragraph {
    max-width: 90%;
  }
  .main {
    position: inherit;
  }
  .image {
    position: inherit;
    max-width: auto;
  }
}
</style>