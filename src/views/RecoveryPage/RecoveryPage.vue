<template>
  <div class="recoveryPage">
    <form-title title="Forgot Password"/>
    <div class="recoveryPage__wrapper">
      <form-input
          type="email"
          name="email"
          placeholderName="E-mail"
      />
    </div>
    <div class="recoveryPage-buttons">
      <form-button title="Restore"/>
    </div>
  </div>
</template>

<script>
import FormInput from '@/components/input/FormInput.vue';
import FormButton from '@/components/buttons/FormButton.vue';
import FormTitle from "@/components/title/title.vue";

export default {
  name: 'RecoveryPage',
  components: {FormInput, FormButton, FormTitle}

}
</script>

<style scoped lang="scss" src="./RecoveryPage.scss"></style>