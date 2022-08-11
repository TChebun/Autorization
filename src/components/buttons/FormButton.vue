<template>
  <div class="formButton">
    <button
        @click="getClick"
        class="formButton-item"
    >
      {{ title }}
    </button>
  </div>
</template>

<script>
export default {
  name: "FormButton",
  props: ['title', 'onClick'],
  methods: {
    getClick () {
      this.$emit('onClick')
    }
  }
}
</script>

<style scoped lang="scss" src="./FormButton.scss"></style>