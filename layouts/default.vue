<template>
  <Navbar/>
  <div class="container pt-32 pb-32">
    <slot/>
  </div>
</template>
<script setup lang="ts">
import Navbar from "~/components/navbar.vue";
</script>
