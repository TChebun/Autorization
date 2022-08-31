<template>
  <div class="registerPage">
    <form-title title="Registration"/>
    <div class="registerPage__wrapper">
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
    <div class="registerPage-buttons">
      <form-button title="Join"/>
      <form-button title="Login" @onClick="changePage" />
    </div>
  </div>
</template>

<script>
import FormInput from '@/components/input/FormInput.vue';
import FormButton from '@/components/buttons/FormButton.vue';
import FormTitle from "@/components/title/title.vue";

export default {
  name: "RegistrationPage",
  components: {FormInput, FormButton, FormTitle},
  methods: {
    changePage() {
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<style scoped lang="scss" src="./RegistrationPage.scss">

</style>