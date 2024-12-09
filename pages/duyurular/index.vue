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
  <div class="mt-10 grid grid-cols-3 md:grid-cols-1 lg:grid-cols-2 gap-8">
    <BlogCard v-for="blog in blogs" :key="blog.title" v-bind="blog"/>
  </div>
</template>

<script setup lang="ts">
import BlogCard from "~/components/blogs/blog-card.vue";
import Blogs from "~/lib/datas/blogs.json";

const blogs: {
  title: string;
  description: string;
  image: string;
  link: string;
  date: Date;
  category: 'blog' | 'announcement' | 'event' | 'oppurtunity';
}[] = Blogs as any;
</script>
