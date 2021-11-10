<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">Performer Profile</span>
    </v-card-title>
    <v-card-text>
      <v-select
          label="Human"
      ></v-select>
      <v-select
          label="Address"
      ></v-select>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
          color="blue darken-1"
          text
          @click="doSomething"
      >
        Close
      </v-btn>
      <v-btn
          color="blue darken-1"
          text
          @click="doSomething"
      >
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "AddPerformer",
  methods: {
    doSomething() {
      this.$emit('updateParent', {
        dialog: false
      })
    }
  }
}
</script>

<style scoped>

</style>