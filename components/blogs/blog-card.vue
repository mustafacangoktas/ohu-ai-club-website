<script setup lang="ts">
import Util from "../../lib/util";

const props = defineProps<{
  title: string
  description: string
  image: string
  link: string
  date: Date
  category: 'blog' | 'announcement' | 'event' | 'oppurtunity'
}>();

</script>

<template>
  <NuxtLink
      :to="props.link" data-aos="fade-up">
    <div class="flex flex-col gap-4 bg-black text-white p-4 rounded-lg w-full h-92 shaded-box
      hover:!scale-105 transition-transform hover:!duration-300 ease-in-out">
      <div class="flex-shrink-0">
        <NuxtImg class="object-contain rounded-lg w-full" width="750" height="424" :src="props.image"
                 :alt="props.title"/>
      </div>
      <div class="flex flex-col justify-between">
        <h2 class="text-xl font-semibold mb-2">{{ props.title }}</h2>
        <p class="text-gray-400 mb-2">
          <span
              :style="`color:${Util.getBlogCategory(props.category).color}`"
          >{{ Util.getBlogCategory(props.category).category }}</span>
          <span> - </span>
          <span>{{ Util.formatDate(props.date) }}</span>
        </p>
        <p class="text-gray-500 mb-2">{{
            Util.cleanMarkdown(props.description).substring(0, 100) + "..."
          }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>

</style>
