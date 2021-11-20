<template>
  <div>
    <div>id: {{ item.id }}</div>
    <div>police: {{ item.police }}</div>
    <div>cash: {{ item.cash }}</div>
    <div>name: {{ item.human.name }}</div>
    <div>surname: {{item.human.surname}}</div>
    <div>age: {{item.human.age}}</div>
    <div>gender: {{item.human.gender}}</div>
    <div>profession: {{item.human.profession}}</div>
  </div>
</template>

<script>
export default {
  name: "ShowClientFields",
  props:{
    item: null
  },
}
</script>

<style scoped>

</style>