<template>
  <div id="app">
    <main-container>
      <form-container>
          <div class="logo__wrapper">
            <img src="./assets/img/logo.svg" alt="Logo">
            <router-link to="/" class="logo__wrapper-text">Agroservice</router-link>
          </div>
        <router-view />
      </form-container>
    </main-container>
  </div>
</template>

<style lang="scss" src="./assets/css/style.scss"></style>
<script>

import MainContainer from './components/layout/MainContainer/Container.vue';
import FormContainer from './components/layout/FormContainer/FormContainer.vue';

export default {
  components: {MainContainer, FormContainer}
}
</script>