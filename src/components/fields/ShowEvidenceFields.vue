<template>
  <div>
    <div>id: {{item.id}}</div>
    <div>name: {{item.evid_name}}</div>
    <div>suspect name: {{item.suspect.human.name}}</div>
    <div>suspect surname: {{item.suspect.human.surname}}</div>
    <div>suspect age: {{item.suspect.human.age}}</div>
    <div>suspect gender: {{item.suspect.human.gender}}</div>
    <div>suspect profession: {{item.suspect.human.profession}}</div>
    <div>suspect appearance: {{item.suspect.appearance}}</div>
    <div>suspect is criminal: {{item.suspect.criminal}}</div>
    <div>case name : {{item.c.start_date}}</div>
    <div>case address : {{item.c.address.city}}, {{item.c.address.street}}, {{item.c.address.house}}</div>
    <div>case start : {{item.c.start_date}}</div>
    <div>case end : {{item.c.end_date}}</div>
  </div>
</template>

<script>
export default {
  name: "ShowEvidenceFields",
  props: {
    item: null
  },
}
</script>

<style scoped>

</style>