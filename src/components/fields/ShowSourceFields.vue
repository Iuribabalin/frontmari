<template>
<div>
  <div>id: {{item.id}}</div>
  <div>name: {{item.name}}</div>
  <div>rating: {{item.rating}}</div>
</div>
</template>

<script>
export default {
  name: "ShowSourceFields",
  props: {
    item: null
  },
}
</script>

<style scoped>

</style>