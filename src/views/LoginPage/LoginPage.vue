<template>
  <div class="loginPage">
    <h2 class="loginPage-title">Login</h2>
    <div class="loginPage__wrapper">
      <form-input
        type="text"
        name="email"
        placeholderName="E-mail"
      />
      <form-input
          type="password"
          name=""
          placeholderName="Password"
      />
    </div>
    <div class="loginPage-buttons">
      <form-button text="Login" />
      <form-button text="Join" />
    </div>
    <div class="loginPage-link">
      <router-link to="/recovery">I forgot my password</router-link>
    </div>
  </div>
</template>

<script>

import FormInput from '../../components/input/FormInput.vue';
import FormButton from '../../components/button/FormButton.vue';

export default {
  name: 'LoginPage',
  components: {FormInput, FormButton}
}
</script>

<style scoped lang="scss" src="./LoginPage.scss"></style>