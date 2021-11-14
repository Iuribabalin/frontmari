<template>
  <v-form>
    <v-card>
      <v-card-title>
        <span class="text-h5">User Profile</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-text-field
                v-model="name"
                label="Name"
                required
            ></v-text-field>

          </v-col>
        </v-row>
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
            @click="saveAndClose"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
export default {
  name: "AddCrimeTypeCard",
  data: () => ({
    name: '',
  }),
  methods: {
    saveAndClose() {
      console.log(this.name)
      this.$emit('updateParent', {
        dialog: false
      })
    },
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