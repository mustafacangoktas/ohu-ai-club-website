<template>
  <div class="flex bg-black shadow-lg rounded-lg overflow-hidden h-64 shaded-box sm:flex-col sm:h-full"
       data-aos="fade-up">
    <div class="relative w-96 h-full sm:w-60 sm:m-auto sm:mt-6">
      <img class="sm:rounded-full h-full object-cover" width="640" height="640" :src="props.image" alt="avatar"/>
    </div>
    <div class="p-6 flex flex-col justify-between w-full">
      <div>
        <h2 class="font-semibold text-lg text-gray-200">{{ props.name }}</h2>
        <p class="text-gray-400 mt-1 mb-3 text-sm font-semibold uppercase">{{ props.title }}</p>
        <p class="text-gray-500 pt-4 text-wrap text-pretty !w-4/5 text-base top-line sm:!w-full">{{ props.description }}</p>
      </div>
      <div class="flex mt-2 space-x-2 pt-2">
        <template v-for="social in props.socials">
          <NuxtLink :href="social.link" target="_blank"
                    class="text-gray-300 hover:text-gray-200"
          >
            <div class="w-11 h-11 flex justify-center items-center rounded-full bg-gray-800 cursor-pointer hover:bg-gray-700/80
            transition-colors duration-300">
              <i :class="`fa-brands fa-${social.icon} text-xl`"></i>
            </div>
          </NuxtLink>
        </template>
        <LeftArrow/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';
import LeftArrow from "~/components/common/left-arrow.vue";

const props = defineProps<{
  name: string;
  title: string;
  image: string;
  description: string;
  socials: { icon: 'linkedin' | 'github' | 'instagram' | 'x-twitter'; link: string }[];
}>();

</script>
