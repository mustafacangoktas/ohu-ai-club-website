<script setup>
import Util from "~/lib/util";

const route = useRoute()
const error = useError()

const {data: blog} = await useAsyncData(`blog-${route.params.blog}`, async () => {
  const content = await queryCollection('blog', route.params.blog).first()
  if (!content) {
    error.value = {
      statusCode: 404,
      message: 'Bu haber bulunamadı.'
    }
  }
  return content
})
</script>

<template>
  <div class="mx-auto">
    <div class="blog flex flex-col items-center justify-center">
      <div class="blog__header flex flex-col items-center justify-center mb-8 w-full">
        <div v-if="blog?.image" class="blog__header-image w-full" data-aos="fade-up">
          <NuxtImg :src="blog.image" alt="thumbnail" width="3000" height="1696"
                   class="w-full rounded-lg !mt-0 object-contain"/>
        </div>
        <div class="blog__header-title mt-5 text-center" data-aos="fade-up">
          <h1 class="text-3xl font-bold">{{ blog?.title }}</h1>
          <div class="attributes flex items-center justify-center text-gray-400 font-semibold gap-2 mt-2">
            <span :style="`color:${Util.getBlogCategory(blog?.category).color}`">{{
                Util.getBlogCategory(blog?.category).category
              }}</span>
            <span>–</span>
            <span>{{ Util.formatDate(blog?.date) }}</span>
          </div>
        </div>
      </div>
      <div class="blog__description w-4/5 md:w-full text-gray-700 leading-relaxed" data-aos="fade-up">
        <ContentRenderer :value="blog" class="prose prose-invert max-w-none mt-10"/>
      </div>
    </div>
  </div>
</template>


<style>
.blog {
  margin: 0 auto;
  color: #cacad1;

  h1 {
    margin: 0 0 1.25rem;
    font-size: 1.75rem;
    line-height: 1.4;
    font-weight: bold;
    color: #f2f2f8;

    @media screen and (max-width: 576px) {
      font-size: 1.5rem;
    }
  }

  h2 {
    margin: 3rem 0 1rem;
    line-height: 1.5;
    font-size: 1.5rem;
    font-weight: bold;
    color: #e8e8ef;

    @media screen and (max-width: 576px) {
      font-size: 1.25rem;
    }
  }

  h3 {
    margin: 1.25rem 0 0.75rem;
    font-size: 1.25rem;
    line-height: 1.4;
    font-weight: bold;
    color: #dedee6;

    @media screen and (max-width: 576px) {
      font-size: 1.125rem;
    }
  }

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    line-height: 1.8;
    color: #d4d4db;
  }

  img {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    max-width: 100%;
    border-radius: 0.5rem; /* Görsel estetik için */
    max-height: 644px; /* Görsel boyutu için */
  }

  ul {
    margin-top: 1rem;
    padding-left: 2rem;
    line-height: 1.6;
    list-style-type: disc;
    color: #e0e0e8;
  }

  ol {
    margin-top: 1rem;
    padding-left: 2rem;
    line-height: 1.6;
    list-style-type: decimal;
    color: #e0e0e8;
  }

  li {
    margin-top: 0.5rem;
  }

  a[rel="nofollow"] {
    color: #a99bff;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #c0b5ff;
    }
  }

  blockquote {
    margin-top: 1.25rem;
    padding: 0.75rem 1.25rem;
    background-color: #161624;
    border-left: 0.25rem solid #664eff;
    border-radius: 0.375rem;
    color: #cacad1;
    font-style: italic;
  }

  pre {
    margin-top: 1.25rem;
    padding: 1rem;
    background-color: #161624;
    border-radius: 0.375rem;
    overflow-x: auto;
    color: #f8f8f8;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.95rem;
  }

  code {
    background-color: #21212e;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    color: #ffcc99;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.95rem;
  }
}
</style>

