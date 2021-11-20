<template>
  <div>
    <div>id: {{item.id}}</div>
    <div> name: {{item.name}}</div>
    <div> lasting: {{item.lasting}}</div>
  </div>
</template>

<script>
export default {
  name: "ShowPunishmentFields",
  props: {
    item: null
  },
}
</script>

<style scoped>

</style>