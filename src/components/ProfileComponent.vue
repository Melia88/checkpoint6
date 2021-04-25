<template>
  <div class="ProfileComponent">
    <h1>Hi from ProfileComponent</h1>
  </div>
</template>

<script>
export default {
  name: 'ProfileComponent',
  props: {
    profile: {
      type: Object,
      required: true
    },
    setup() {
      return {}
    },
    components: {}
  }
}
</script>

<style lang="scss" scoped>

</style>
