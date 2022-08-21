<template>
  <div class="input__wrapper">
    <label :for="name" :class="[{ active: isActive }, 'inputLabel']">{{ placeholderName }}</label>
    <input
        :id="name"
        class="input-item"
        :type="type"
        :name="name"
        @focus="isActive = true"
        @blur="checkInput()"
        v-model.lazy="inputData"
        autocomplete="nope"
    >
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: ["type", "placeholderName", "name"],
  data() {
    return {
      isActive: false,
      inputData: null
    }
  },
  methods: {
    checkInput() {
      if (this.inputData) {
        return this.isActive = true;
      }

      this.inputData = null;
      return this.isActive = false;
    }
  }
}
</script>

<style scoped lang="scss" src="./FormInput.scss"></style>