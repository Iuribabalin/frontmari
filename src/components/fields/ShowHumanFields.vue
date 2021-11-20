<template>
  <div>
    <div>id: {{ item.id }}</div>
    <div>name: {{ item.name }}</div>
    <div>surname: {{item.surname}}</div>
    <div>age: {{item.age}}</div>
    <div>gender: {{item.gender}}</div>
    <div>profession: {{item.profession}}</div>
  </div>
</template>

<script>

export default {
  name: "ShowHumanFields",
  // components:
  // data: () => ({
  //   name: '',
  //   surname: '',
  //   age: '',
  //   gender: '',
  //   profession: '',
  //   baseUrl: 'http://localhost:10511'
  // }),
  props: {
    item: null
  },
  methods: {}
}
</script>

<style scoped>

</style>