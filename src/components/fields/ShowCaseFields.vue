<template>
  <div>
    <div>id: {{ item.aCase.id }}</div>
    <div>name: {{ item.aCase.name }}</div>
    <div>client name: {{ item.aCase.client.human.name }}</div>
    <div>client surname: {{ item.aCase.client.human.surname }}</div>
    <div>client age: {{ item.aCase.client.human.age }}</div>
    <div>client gender: {{ item.aCase.client.human.gender }}</div>
    <div>client profession: {{ item.aCase.client.human.profession }}</div>
    <div>client cash: {{ item.aCase.client.cash }}</div>
    <div>client from police: {{item.aCase.client.police}}</div>
    <div>address: {{item.aCase.address.city}}, {{item.aCase.address.street}}, {{item.aCase.address.house}}</div>
    <div>start: {{item.aCase.start_date}}</div>
    <div>end: {{item.aCase.end_date}}</div>
    <div>list of evidences: {{item.listOfEvidences.toString()}}</div>
    <div>list of performers: {{item.listOfPerformers.toString()}}</div>
    <div>list of criminals: {{item.listOfCriminals.toString()}}</div>
    <div>list of sources: {{item.listOfSources.toString()}}</div>
  </div>
</template>

<script>
export default {
  name: "ShowCaseFields",
  props: {
    item: null
  },
}
</script>

<style scoped>

</style>