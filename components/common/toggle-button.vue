<template>
  <button
      class="navbar-toggle-button"
      :class="{ active }"
      @click="$emit('click')"
      aria-label="Menüyü aç/kapat"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script setup>
defineProps({
  active: Boolean
});
</script>

<style scoped lang="scss">
.navbar-toggle-button {
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    z-index: 1000;
    margin-left: auto;
  }

  span {
    display: block;
    width: 2.4rem;
    height: 0.25rem;
    background: white;
    transition-duration: 200ms;
    border-radius: 0.25rem;
  }

  &.active {
    span:nth-child(1) {
      transform: rotate(45deg) translate(0.75rem, 0.25rem);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: rotate(-45deg) translate(0.75rem, -0.25rem);
    }
  }
}
</style>
