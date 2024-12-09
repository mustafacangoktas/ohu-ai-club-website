<template>
  <div class="arrow-left md:!hidden" data-aos="fade-right">
    <div class="arrow-left__head">

    </div>
    <div class="arrow-left__head-glow">

    </div>
    <div class="arrow-left__tail">

    </div>
  </div>
</template>

<style scoped>

.arrow-left {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
}

.arrow-left__tail {
  box-sizing: border-box;
  background: linear-gradient(270deg, rgba(242, 240, 245, 0) -12%, rgb(242, 240, 245) 100%);
  flex: none;
  height: 1px;
  position: absolute;
  right: 10px;
  left: 0;
  top: 50%;
  overflow: hidden;
  opacity: 1;
  will-change: transform;
  transform: perspective(1200px) rotate(-180deg);
  z-index: 10;
}

.arrow-left__head {
  box-sizing: border-box;
  -webkit-font-smoothing: inherit;
  background-color: rgb(242, 240, 245);
  border-radius: 100px;
  flex: none;
  height: 7px;
  position: absolute;
  right: 6px;
  width: 7px;
  overflow: hidden;
  opacity: 1;
  z-index: 20;
}

.arrow-left__head-glow {
  box-sizing: border-box;
  background-color: #bb8bff;
  border-radius: 100px;
  flex: none;
  right: 0;
  overflow: hidden;
  position: absolute;
  width: 19px;
  height: 19px;
  opacity: 0.2;
}
</style>
