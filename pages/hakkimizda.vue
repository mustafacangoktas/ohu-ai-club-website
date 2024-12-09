<template>
  <h1 class="text-4xl font-bold text-center" data-aos="fade-down"
  >Ekibimizle Tanışın</h1>
  <div class="flex flex-col items-center" data-aos="fade-down">
    <p class="text-lg text-gray-300 mt-8 max-w-2xl text-pretty text-center">
      Aşağıda ekibimizde yer alan kişileri görebilirsiniz. Ekibimizde yer almak için
      <a href="https://instagram.com/ohuyapayzeka" target="_blank" class="link">buraya</a>
      tıklayarak bize ulaşabilirsiniz.
    </p>
  </div>
  <div class="mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
    <TeamCard v-for="member in team" :key="member.name" v-bind="member"/>
  </div>
</template>

<script setup lang="ts">
import TeamCard from "~/components/about/team-card.vue";
import Team from "~/lib/datas/team.json";

const team: {
  name: string;
  title: string;
  image: string;
  description: string;
  socials: { icon: 'linkedin' | 'github' | 'instagram' | 'x-twitter'; link: string }[];
}[] = Team as any;
</script>
