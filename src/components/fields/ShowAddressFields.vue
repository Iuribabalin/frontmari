<template>
  <div>
    <div>id: {{ item.id }}</div>
    <div>address: {{item.city}}, {{item.street}}, {{item.house}}</div>
  </div>
</template>

<script>
export default {
  name: "ShowAddressFields",
  props: {
    item: null
  },
}
</script>

<style scoped>

</style>