<template>
  <header class="flex justify-center w-full">
    <div class="glow1"/>
    <div class="glow2"/>
    <div class="background"/>
    <nav
        id="navbar"
        class="flex flex-row-reverse md:flex-row justify-between items-center py-5 fixed z-30 container"
    >
      <div>
        <ToggleButton
            class="hidden lg:block"
            :active="menuOpen"
            @click="menuOpen = !menuOpen"
        />

        <div
            :class="[
            'flex items-center space-x-4 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:z-50 lg:bg-black/90 lg:rounded-lg lg:py-8 lg:px-8 lg:top-0 lg:w-full lg:h-screen lg:flex-col lg:justify-start lg:items-center lg:space-y-4 lg:gap-4 navbar-mobile-menu',
            menuOpen ? 'active' : ''
          ]"
        >
          <ToggleButton
              class="hidden lg:block"
              :active="menuOpen"
              @click="menuOpen = !menuOpen"
          />
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
                rel="noopener"
                :aria-label="`${social.icon} hesabımız`"
                :title="social.icon"
                class="flex items-center justify-center text-white bg-violet-500/30 transition duration-500 ease-in-out w-10 h-10 md:w-11 md:h-11 hover:bg-white hover:text-black rounded-lg"
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
import {ref, onMounted, onBeforeUnmount} from "vue";
import {useRouter} from "vue-router";
import ToggleButton from "./common/toggle-button.vue";

const menuOpen = ref(false);
const router = useRouter();

function isActive(url) {
  const path = router.currentRoute.value.path;
  if (url === "/") {
    return path === url ? "active" : "";
  }
  return path.startsWith(url) ? "active" : "";
}

const navigators = ref([
  {name: "Ana Sayfa", url: "/"},
  {name: "Hakkımızda", url: "/hakkimizda"},
  {name: "Duyurular", url: "/duyurular"},
]);

const socials = ref([
  {icon: "instagram", link: "https://instagram.com/ohuyapayzeka"},
  {icon: "linkedin", link: "https://www.linkedin.com/in/ohuyapayzeka/"},
  {icon: "x-twitter", link: "https://x.com/ohuyapayzeka"},
]);

function addHoverClass(event) {
  const link = event.currentTarget.querySelector(".gradient-underline");
  if (link) link.classList.add("active");
}

function removeHoverClass(event, path) {
  const link = event.currentTarget.querySelector(".gradient-underline");
  if (isActive(path)) return;
  if (link) link.classList.remove("active");
}

onMounted(() => {
  const handleScroll = () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("backdrop-blur");
    } else {
      navbar.classList.remove("backdrop-blur");
    }
  };

  window.addEventListener("scroll", handleScroll);
  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>

<style scoped lang="scss">
.gradient-underline::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  border-radius: 20px;
  height: 1px;
  background: linear-gradient(
          to right,
          rgba(242, 240, 245, 0.1),
          rgba(242, 240, 245, 0.6),
          rgba(242, 240, 245, 0.1)
  );
  opacity: 0;
  width: 100%;
  transform-origin: left;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.gradient-underline.active::after {
  opacity: 1;
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
