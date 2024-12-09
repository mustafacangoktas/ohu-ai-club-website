<script setup lang="ts">

</script>

<template>
  <div class="arrow-right md:!hidden" data-aos="fade-left">
    <div class="arrow-right__head">

    </div>
    <div class="arrow-right__head-glow">

    </div>
    <div class="arrow-right__tail">

    </div>
  </div>
</template>

<style scoped>

.arrow-right {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
}

.arrow-right__tail {
  box-sizing: border-box;
  background: linear-gradient(270deg, rgb(242, 240, 245) 0%, rgba(242, 240, 245, 0) 100%);
  flex: none;
  height: 1px;
  position: absolute;
  left: 10px;
  right: 0;
  top: 50%;
  overflow: hidden;
  opacity: 1;
  will-change: transform;
  transform: perspective(1200px) rotate(-180deg);
  z-index: 10;
}

.arrow-right__head {
  box-sizing: border-box;
  -webkit-font-smoothing: inherit;
  background-color: rgb(242, 240, 245);
  border-radius: 100px;
  flex: none;
  height: 7px;
  position: absolute;
  left: 6px;
  width: 7px;
  overflow: hidden;
  opacity: 1;
  z-index: 20;
}

.arrow-right__head-glow {
  box-sizing: border-box;
  background-color: #bb8bff;
  border-radius: 100px;
  flex: none;
  left: 0;
  overflow: hidden;
  position: absolute;
  width: 19px;
  height: 19px;
  opacity: 0.2;
}
</style>
