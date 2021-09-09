<template>
  <div class="title">
    <p>About</p>
    <div class="main">
      <div class="image"><img src="../assets/me.png" alt="" /></div>
      <div class="paragraph">
        <p>Meet Kylie!</p>
        <p1>
          Hello! I started my fitness journey back in November of 2020. I have
          been intrigued by fitness and helping people feel better about
          themselves ever since. I currently am working towards my NASM
          certification in hopes to pursure my dream of helping others. I
          created this site to be able to easily help people who want to start
          their fitness journey. Stepping into the gym can be intimidating for
          most, but I promise the outcome will all be worth it!
        </p1>
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
  border: 2px solid;
  width: 28%;
}
.paragraph {
  position: absolute;
  left: 51%;
  border: 2px solid;
  background-color: white;
  padding: 18px;
  width: 400px;
  top: 65px;
}
</style>