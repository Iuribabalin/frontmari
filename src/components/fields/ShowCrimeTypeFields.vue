<template>
  <div>
    <div>id: {{ item.id }}</div>
    <div>name: {{ item.name }}</div>
  </div>
</template>

<script>
export default {
  name: "ShowCrimeTypeFields",
  props: {
    item: null
  },
}
</script>

<style scoped>

</style>