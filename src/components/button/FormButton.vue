<template>
  <div class="formButton">
    <button class="formButton-item">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: "FormButton",
  props: ["text"]
}
</script>

<style scoped lang="scss" src="./FormButton.scss"></style>