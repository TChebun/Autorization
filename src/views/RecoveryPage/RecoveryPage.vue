<template>
  <div class="recoveryPage">
    <h2 class="recoveryPage-title">Forgot Password</h2>
    <div class="recoveryPage__wrapper">
      <form-input
          type="text"
          name="email"
          placeholderName="E-mail"
      />
    </div>
    <div class="recoveryPage-buttons">
      <form-button text="Restore" />
    </div>
  </div>
</template>

<script>
import FormInput from '../../components/input/FormInput.vue';
import FormButton from '../../components/button/FormButton.vue';

export default {
  name: 'RecoveryPage',
  components: {FormInput, FormButton}

}
</script>

<style scoped lang="scss" src="./RecoveryPage.scss"></style>