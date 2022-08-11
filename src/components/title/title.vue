<template>
  <div>
    <h2 class="title">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'FormTitle',
  props: ['title']
}
</script>

<style scoped lang="scss" src="./title.scss"></style>