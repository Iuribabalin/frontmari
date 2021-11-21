<template>
  <v-dialog v-model="dialog" persistent max-width="600px">

  </v-dialog>
</template>

<script>
export default {
  name: "DialogInfoTable",
  props: {
    flag: Boolean,
  },
  data: () => ({
    dialog: this.flag,
    baseUrl: 'http://localhost:10511'
  }),
}
</script>

<style scoped>

</style>