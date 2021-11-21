<template>
  <v-card>
    <v-card-title class="text-h5 grey lighten-2">
      Extra information
    </v-card-title>
    <v-card-text class="text-h6 mb-1 text--primary">
      <p>Human Info: </p>
      <p>Name: {{ info.human ? info.human.name : '' }}</p>
      <p>Surname: {{ info.human ? info.human.surname : '' }}</p>
      <p>Age: {{ info.human ? info.human.age : '' }}</p>
      <p>Gender: {{ info.human ? info.human.gender : '' }}</p>
      <p>Profession: {{ info.human ? info.human.profession : '' }}</p>
    </v-card-text>
    <v-card-text class="text-h6 mb-1 text--primary">
      <p>Address Info: </p>
      <p>City: {{ info.address ? info.address.city : '' }}</p>
      <p>Street: {{ info.address ? info.address.street : '' }}</p>
      <p>House: {{ info.address ? info.address.house : '' }}</p>
    </v-card-text>
    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
          color="primary"
          text
          @click="changeDialog"
      >
        Close
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "HumanInfo",
  props: {
    info: null
  },
  methods: {
    changeDialog() {
      this.$emit('updateDialog', {
        flag: false
      })
    }
  }
}
</script>

<style scoped>

</style>