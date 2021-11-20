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
            <v-select
                label="Suspect"
                :items="suspects"
                v-model = "selectSuspect"
            ></v-select>
          </v-col>
          <v-col>
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
  name: "AddEvidenceCard",
  data: () => ({
    name: '',
    cases:[],
    suspects:[],
    selectCase:'',
    selectSuspect:'',
    baseUrl:'http://localhost:10511'
  }),
  methods: {
    save() {
      console.log(this.selectCase)
      this.$emit('updateParent', {
        dialog: false
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
    getDataFromSuspectList() {
      axios.create({
        baseURL: this.baseUrl
      }).get('/suspect').then(resp => {
        for (let i = 0; i < resp.data.length; i++) {
          this.suspects.push(resp.data[i].name)
        }
      })
    }
  },
  beforeMount() {
    this.getDataFromCaseList()
    this.getDataFromSuspectList()
  }
}
</script>

<style scoped>

</style>