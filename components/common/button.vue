<script setup lang="ts">
import {defineProps} from 'vue';

const props = defineProps<{
  title: string;
  color?: string;
  icon?: string;
  className?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
}>();

const className = `px-6 py-3 rounded-md font-medium focus:outline-none transition !duration-300 !ease-in-out`
    + ` ${props.icon ? 'flex items-center' : ''} ${props.className ? props.className : ''}`
    + ` hover:!opacity-[0.85]`;
</script>

<template>
  <button
      v-if="!href"
      :class="`${className}`"
      @click="onClick"
      title="title"
  >
    {{ title }}
  </button>
  <NuxtLink
      v-else
      :class="`${className} ${color ? `bg-${color}` : ''}`"
      :href="href"
      :target="target"
      @click="onClick"
  >
    {{ title }}
  </NuxtLink>
</template>

<style scoped>
.gradient-bg-1 {
  background-image: linear-gradient(93deg, #6546b4 10%, #7941d2 44%, #8b3adb 65%);
}
</style>
