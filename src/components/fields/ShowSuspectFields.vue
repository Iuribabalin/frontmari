<template>
<div>
  <div>id: {{item.id}}</div>
  <div>appearance: {{item.appearance}}</div>
  <div> name: {{item.human.name}}</div>
  <div> surname: {{item.human.surname}}</div>
  <div> age: {{item.human.age}}</div>
  <div> gender: {{item.human.gender}}</div>
  <div> profession: {{item.human.profession}}</div>
  <div> is criminal: {{item.criminal}}</div>
</div>
</template>

<script>
export default {
  name: "ShowSuspectFields",
  props: {
    item: null
  },
}
</script>

<style scoped>

</style>