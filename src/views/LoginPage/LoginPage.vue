<template>
  <div class="loginPage">
    <form-title title="Login"/>
    <div class="loginPage__wrapper">
      <form-input
        type="email"
        name="email"
        placeholderName="E-mail"
      />
      <form-input
          type="password"
          name="password"
          placeholderName="Password"
      />
    </div>
    <div class="loginPage-buttons">
      <form-button title="Login"/>
      <form-button title="Join" @onClick="changePage" />
    </div>
    <div class="loginPage-link">
      <router-link to="/recovery">I forgot my password</router-link>
    </div>
  </div>
</template>

<script>

import FormInput from '@/components/input/FormInput.vue';
import FormButton from '@/components/buttons/FormButton.vue';
import FormTitle from '@/components/title/title.vue';

export default {
  name: 'LoginPage',
  components: {FormInput, FormButton, FormTitle},
  methods: {
    changePage() {
      this.$router.push({name: 'register'})
    }
  }
}
</script>

<style scoped lang="scss" src="./LoginPage.scss"></style>