<template>
  <v-form>
    <v-card>
      <v-card-title>
        <span class="text-h5">User Profile</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-select
                label="Human"
                :items="humans"
                v-model = "selectHuman"
            ></v-select>
            <v-select
            label="Type of crime"
            :items="crimetypes"
            v-model = "selectCrimeType"
            ></v-select>
          </v-col>
          <v-col>
            <v-select
                label="Punishment"
                :items="punishments"
                v-model = "selectPunishment"
            ></v-select>
            <v-select
                label="Case"
                :items="cases"
                v-model = "selectCase"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>


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
import axios from "axios";

export default {
  name: "AddCriminalCard",
  data: () => ({
    humans: [],
    crimetypes: [],
    punishments: [],
    cases: [],
    selectHuman: '',
    selectCrimeType: '',
    selectPunishment: '',
    selectCase: '',
    baseUrl: 'http://localhost:10511'
  }),
  methods: {
    save() {
      console.log(this.selectHuman)
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
    getDataFromCaseList() {
      axios.create({
        baseURL: this.baseUrl
      }).get('/case').then(resp => {
        for (let i = 0; i < resp.data.length; i++) {
          this.cases.push(resp.data[i].caseName)
        }
      })
    },
    getDataFromHumanList() {
      axios.create({
        baseURL: this.baseUrl
      }).get('/human').then(resp => {
        for (let i = 0; i < resp.data.length; i++) {
          this.humans.push(resp.data[i].name)
        }
      })
    },
    getDataFromCrimeTypeList() {
      axios.create({
        baseURL: this.baseUrl
      }).get('/crimetype').then(resp => {
        for (let i = 0; i < resp.data.length; i++) {
          this.crimetypes.push(resp.data[i].name)
        }
      })
    },
    getDataFromPunishmentList() {
      axios.create({
        baseURL: this.baseUrl
      }).get('/punishment').then(resp => {
        for (let i = 0; i < resp.data.length; i++) {
          this.punishments.push(resp.data[i].name)
        }
      })
    },
  },
  beforeMount() {
    this.getDataFromHumanList()
    this.getDataFromPunishmentList()
    this.getDataFromCrimeTypeList()
    this.getDataFromCaseList()
  }
}
</script>

<style scoped>

</style>