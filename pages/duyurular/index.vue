<script setup>

import BlogCard from "~/components/blogs/blog-card.vue";
import Util from "~/lib/util";

const {data: blogs} = await useAsyncData('blog-list', () =>
    queryCollection('blog').order('date', 'DESC').all()
)

console.log(blogs.value[0])
</script>

<template>
  <h1 class="text-4xl font-bold text-center" data-aos="fade-down"
  >Duyurular</h1>
  <div class="flex flex-col items-center" data-aos="fade-down">
    <p class="text-lg text-gray-300 mt-8 max-w-2xl text-pretty text-center">
      Aşağıda yer alan duyuruları inceleyebilirsiniz. Duyurular hakkında daha fazla bilgi almak için
      <a href="https://instagram.com/ohuyapayzeka" target="_blank" class="link">buraya</a>
      tıklayarak bize ulaşabilirsiniz.
    </p>
  </div>
  <div class="mt-10 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-8">
    <BlogCard v-for="blog in blogs" :key="blog.path" :title="blog.title"
              :description="Util.extractTextFromBody(blog.body.value)"
              :image="blog.image" :link="blog.path" :date="blog.date" :category="blog.category"/>
  </div>
</template>
