<script setup lang="ts">
import Button from "~/components/common/button.vue";
import RightArrow from "~/components/common/right-arrow.vue";
import LeftArrow from "~/components/common/left-arrow.vue";
</script>

<template>
  <div class="flex justify-center items-center h-[100vh] absolute top-0 left-0 w-full">
    <div class="text-center">
      <div data-aos="fade-down">
        <h2 class="text-2xl font-bold mb-1 text-gray-300">
          <NuxtImg src="/ohu_logo.png" alt="logo" width="447" height="415"/>
          Niğde Ömer Halisdemir Üniversitesi
        </h2>
        <h1 class="text-6xl font-bold">Yapay Zeka Kulübü</h1>
      </div>

      <div class="flex flex-col items-center" data-aos="fade-down">
        <p class="text-lg text-gray-300 mt-8 max-w-2xl text-pretty">
          Yapay Zeka Kulübü, Niğde Ömer Halisdemir Üniversitesi'nde öğrencilerin yapay
          zeka ve makine öğrenmesi alanlarında bilgi sahibi olmalarını sağlamak amacıyla
          kurulmuş bir kulüptür.
        </p>
      </div>
      <div class="mt-8 space-x-4 flex items-center justify-center">
        <RightArrow/>
        <div class="gap-4 flex items-center justify-center flex-wrap" data-aos="zoom-in">
          <Button
              title="Topluluğa Katıl"
              href="https://instagram.com/ohuyapayzeka"
              target="_blank"
              className="gradient-bg-1"
              color="white"
              data-aos="zoom-in"
          />
          <Button
              title="Hakkımızda"
              href="/hakkimizda"
              className="bg-gradient-to-r from-gray-500 to-gray-700"
              color="white"
              data-aos="zoom-in"
          />
        </div>
        <LeftArrow/>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  letter-spacing: -0.5px;
  text-align: center;
  color: transparent;
  background-image: linear-gradient(270deg, rgb(115, 29, 234) 0%, rgb(210, 181, 251) 50%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

h2 {
  text-align: center;

  img {
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style>
