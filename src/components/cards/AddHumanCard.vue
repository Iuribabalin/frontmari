<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">User Profile</span>
    </v-card-title>
    <v-card-text>
        <v-row>
          <v-col>
            <v-text-field
                label="Name"
                required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
                label="Surname"
                required
            ></v-text-field>
          </v-col>
          </v-row>
      <v-row>
          <v-col>
            <v-text-field
                label="Age"
                required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
                label="Gender"
                required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-text-field
            label="Profession"
            required
        ></v-text-field>
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
  name: "AddHumanCard",
  data: () => ({}),
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