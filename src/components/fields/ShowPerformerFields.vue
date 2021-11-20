<template>
  <div>
    <div>id: {{ item.id }}</div>
    <div>name: {{ item.human.name }}</div>
    <div>surname: {{item.human.surname}}</div>
    <div>age: {{item.human.age}}</div>
    <div>gender: {{item.human.gender}}</div>
    <div>profession: {{item.human.profession}}</div>
    <div>address: {{item.address.city}}, {{item.address.street}}, {{item.address.house}}</div>
  </div>
</template>

<script>
export default {
  name: "ShowPerformerFields",
  props:{
    item: null
  },
}
</script>

<style scoped>

</style>