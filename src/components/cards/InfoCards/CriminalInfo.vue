<template>
  <v-card>
    <v-card-title class="text-h5 grey lighten-2">
      Extra information
    </v-card-title>
    <v-card-text class="text-h6 mb-1 text--primary">
      Criminal name: {{ info.c.name ? info.c.name : '' }}
      <v-spacer/>
      Start date: {{ info.c.start_date ? info.c.start_date : 'no date' }} End date: {{ info.c.end_date ? info.c.end_date : 'no date' }}
      <v-spacer/>
      Address: {{ info.c.address ? info.c.address.city : '' }} {{ info.c.address ? info.c.address.street : '' }}
      {{ info.c.address ? info.c.address.house : '' }}
      <v-spacer/>
      Client: {{ info.c.client.human.name ? info.c.client.human.name : '' }}
      {{ info.c.client.human.surname ? info.c.client.human.surname : '' }}
      <v-spacer/>
      Cash: {{ info.c.client.cash ? info.c.client.cash : '' }}
      <v-spacer/>
      Criminal Type: {{ info.crimeType.name ? info.crimeType.name : '' }}
      <v-spacer/>
      Human: {{ info.human.name ? info.human.name : '' }} {{ info.human.surname ? info.human.surname : '' }}
      <v-spacer/>
      Punishment:
      <v-spacer/>
      Name: {{ info.punishment.name ? info.punishment.name : '' }}
      <v-spacer/>
      Lasting: {{ info.punishment.lasting ? info.punishment.lasting : '' }}
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