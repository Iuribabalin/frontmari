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
          <v-col>
            <v-text-field
                v-model="surname"
                label="Surname"
                required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
                v-model="age"
                label="Age"
                required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-checkbox
                v-model="gender"
                :label="`Gender: ${gender.toString()}`"
            ></v-checkbox>
          </v-col>
        </v-row>
        <v-text-field
            v-model="profession"
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
            @click="saveAndClose"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  name: "AddHumanCard",
  data: () => ({
    name: '',
    surname: '',
    age: '',
    gender: false,
    profession: '',
    baseUrl: 'http://localhost:10511'
  }),
  methods: {
    saveAndClose() {
      let data = {
        name: this.name,
        surname: this.surname,
        age: this.age,
        gender: this.gender,
        profession: this.profession
      }
      axios.create({baseURL: this.baseUrl}).post('/human', data)
          .then(window.location.reload())
      this.$emit('updateParent', {
        dialog: false
      })
    },
    doSomething() {
      let data = {
        dialog: false,
        error: false
      }
      this.$emit('updateParent', {
        data
      })
    },
  }
}
</script>

<style scoped>

</style>