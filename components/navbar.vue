<template>
  <header class="flex justify-center w-full">
    <div class="glow1"/>
    <div class="glow2"/>
    <div class="background"/>
    <nav
        id="navbar"
        class="flex flex-row-reverse md:flex-row justify-between items-center py-5 fixed z-30 container">
      <div>
        <button
            class="hidden lg:block navbar-toggle-button"
            :class="{ active: menuOpen }"
            @click="menuOpen = !menuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
            :class="[
            'flex items-center space-x-4 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:z-50 lg:bg-black/90 lg:rounded-lg lg:py-8 lg:px-8 lg:top-0 lg:w-full lg:h-screen lg:flex-col lg:justify-start lg:items-center lg:space-y-4 lg:gap-4 navbar-mobile-menu',
            menuOpen ? 'active' : ''
          ]"
        >
          <button
              class="hidden lg:block navbar-toggle-button"
              :class="{ active: menuOpen }"
              @click="menuOpen = !menuOpen"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul
              class="flex space-x-6 font-semibold items-center lg:w-full lg:!m-0 lg:flex-col lg:space-y-4 lg:space-x-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2"
          >
            <li
                v-for="navigator in navigators"
                :key="navigator.name"
                class="relative flex items-center"
                @click="menuOpen = false"
                @mouseenter="addHoverClass($event)"
                @mouseleave="removeHoverClass($event, navigator.url)"
            >
              <NuxtLink
                  :to="navigator.url"
                  :class="`gradient-underline lg:!text-2xl lg:px-10 lg:py-2 ${isActive(navigator.url)}`"
              >
                {{ navigator.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex space-x-4">
        <ul class="flex items-center space-x-2">
          <li
              v-for="social in socials"
              :key="social.icon"
              class="flex items-center"
          >
            <NuxtLink
                :href="social.link"
                target="_blank"
                class="flex items-center justify-center text-white bg-violet-500/30 transition duration-500 ease-in-out w-10 h-10 hover:bg-white hover:text-black rounded-lg"
            >
              <i :class="`fa-brands fa-${social.icon} text-2xl md:text-3xl`"></i>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import {ref, computed, onMounted} from "vue";
import {useRouter} from "vue-router";

const menuOpen = ref(false);
const router = useRouter();

function isActive(url) {
  const path = router.currentRoute.value.path;
  return path === url ? "active" : "";
}

const navigators = ref([
  {name: "Ana Sayfa", url: "/"},
  {name: "Hakkımızda", url: "/hakkimizda"},
  {name: "Duyurular", url: "/duyurular"},
]);

const socials = ref([
  {icon: "instagram", link: "https://instagram.com/ohuyapayzeka"},
  {icon: "linkedin", link: "https://linkedin.com/company/ohuyapayzeka"},
]);

onMounted(() => {
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("backdrop-blur");
    } else {
      navbar.classList.remove("backdrop-blur");
    }
  });
});

function addHoverClass(event) {
  const link = event.currentTarget.querySelector(".gradient-underline");
  if (link) link.classList.add("active");
}

function removeHoverClass(event, path) {
  const link = event.currentTarget.querySelector(".gradient-underline");
  if (isActive(path)) return;
  if (link) link.classList.remove("active");
}
</script>


<style scoped>

.gradient-underline::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  border-radius: 20px;
  height: 1px;
  background: linear-gradient(to right, rgba(242, 240, 245, 0.1), rgba(242, 240, 245, 0.6), rgba(242, 240, 245, 0.1)); /* Siyah-gri geçiş */
  opacity: 0;
  width: 100%; /* width düzeltildi */
  transform-origin: left;
  transition: transform 0.3s ease, opacity 0.3s ease; /* Fade ve genişleme efekti */
}

.gradient-underline.active::after {
  opacity: 1; /* Görünür yap */
}

.navbar-toggle-button.active span {
  background-color: #fff;
}

.navbar-toggle-button {
  background-color: transparent;
  border: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    z-index: 1000;
    margin-left: auto;
    cursor: pointer;
  }

  span {
    display: block;
    width: 2.4rem;
    height: 0.25rem;
    background: white;
    transition-duration: 200ms;
    border-radius: 0.25rem;
  }
}

.navbar-toggle-button.active {
  span:nth-child(1) {
    transform: rotate(45deg) translate(0.75rem, 0.25rem);
    transition-duration: 200ms;
  }

  span:nth-child(2) {
    opacity: 0;
  }

  span:nth-child(3) {
    transform: rotate(-45deg) translate(0.75rem, -0.25rem);
    transition-duration: 200ms;
  }
}

.navbar-mobile-menu.active {
  visibility: visible;
  transform: translate(-50%);
}

@media screen and (max-width: 1024px) {
  .navbar-mobile-menu {
    visibility: hidden;
    transition-duration: 400ms;
    transform: translate(-150%);
    z-index: 999;
  }
}
</style>


