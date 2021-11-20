<template>
  <div>
    <div>id: {{item.id}}</div>
    <div> name: {{item.human.name}}</div>
    <div> surname: {{item.human.surname}}</div>
    <div> age: {{item.human.age}}</div>
    <div> gender: {{item.human.gender}}</div>
    <div> profession: {{item.human.profession}}</div>
    <div> type of crime: {{item.crimeType.name}}</div>
    <div> type of punishment: {{item.punishment.name}}</div>
    <div> lasting of punishment: {{item.punishment.lasting}}</div>
    <div> case name : {{item.c.name}}</div>
    <div> case start date : {{item.c.start_date}}</div>
    <div> case end date : {{item.c.end_date}}</div>
  </div>
</template>

<script>
export default {
  name: "ShowCriminalFields",
  props: {
    item: null
  },
}
</script>

<style scoped>

</style>