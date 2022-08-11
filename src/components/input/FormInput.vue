<template>
  <div class="input__wrapper">
    <input
        class="input-item"
        :type="type"
        :placeholder="placeholderName"
        :name="name"
        autocomplete="nope"
    >
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: ["type", "placeholderName", "name"],
}
</script>

<style scoped lang="scss" src="./FormInput.scss"></style>