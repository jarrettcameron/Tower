<script setup>
import { onMounted, ref } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';

const theme = ref(loadState('theme') || 'light')

onMounted(() => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
})

</script>

<template>
  <nav class="sticky-top navbar navbar-expand-sm navbar-dark bg-gradient px-5">
    <router-link class="ms-md-5 navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <span class="fs-1 fw-bold d-flex gap-2 align-items-center text-white">
            <i class="mdi mdi-radio-tower"></i>TOWER
        </span>
      </div>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse me-md-5" id="navbarText">
      <ul class="navbar-nav me-auto w-100 d-flex justify-content-end">
        <li>
          <router-link :to="{ name: 'About' }" class="btn text-white selectable text-uppercase">
            About
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 576px) {
  nav {
    height: 64px;
  }
}
</style>
