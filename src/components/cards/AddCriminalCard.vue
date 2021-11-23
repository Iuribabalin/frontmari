<template>
  <v-form v-model="valid" lazy-validation ref="form">
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
                :rules="clearFieldValid"
                v-model="selectHuman"
            ></v-select>
            <v-select
                label="Type of crime"
                :items="crimetypes"
                :rules="clearFieldValid"
                v-model="selectCrimeType"
            ></v-select>
          </v-col>
          <v-col>
            <v-select
                label="Punishment"
                :items="punishments"
                :rules="clearFieldValid"
                v-model="selectPunishment"
            ></v-select>
            <v-select
                label="Case"
                :items="cases"
                :rules="clearFieldValid"
                v-model="selectCase"
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
    mainCase: [],
    mainHuman: [],
    mainPunishment: [],
    mainCrimetype: [],
    baseUrl: 'http://localhost:10511',
    clearFieldValid: [
      v => !!v || 'Field is required'
    ],
    valid: true,
  }),
  props: {
    item: null,
    flagEdit: Boolean,
  },
  methods: {
    saveAndClose() {
      if(this.$refs.form.validate()) {
        this.findInMass(this.selectHuman, this.humans)
        let human_id = this.mainHuman[this.findIndex].id
        this.findInMass(this.selectCase, this.cases)
        let case_id = this.mainCase[this.findIndex].id
        this.findInMass(this.selectCrimeType, this.crimetypes)
        let crimetype_id = this.mainCrimetype[this.findIndex].id
        this.findInMass(this.selectPunishment, this.punishments)
        let punishment_id = this.mainPunishment[this.findIndex].id
        let data = {
          human_id: human_id,
          case_id: case_id,
          crimeType_id: crimetype_id,
          punishment_id: punishment_id
        }
        if (this.flagEdit) {
          data = {
            human_id: human_id,
            case_id: case_id,
            crimeType_id: crimetype_id,
            punishment_id: punishment_id
          }
          axios.create({baseURL: this.baseUrl}).put('/criminal/' + this.item.id, data)
              .then(resp => {
                console.log(resp.data)
                window.location.reload()
              })
              .catch(err => {
                let data = {
                  errorText: err.response.data.message.toString(),
                  dialog: false,
                  error: true
                }
                this.$emit('updateParent', {
                  data
                })
              })
        } else {
          axios.create({baseURL: this.baseUrl}).post('/criminal', data)
              .then(resp => {
                console.log(resp.data)
                window.location.reload()
              })
              .catch(err => {
                let data = {
                  errorText: err.response.data.message.toString(),
                  dialog: false,
                  error: true
                }
                this.$emit('updateParent', {
                  data
                })
              })
        }
        data = {
          errorText: '',
          dialog: false,
          error: false
        }
        this.$emit('updateParent', {
          data: data,
        })
      }
    },
    doSomething() {
      let data = {
        errorText: '',
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
        this.mainCase = resp.data;
        for (let i = 0; i < resp.data.length; i++) {
          if (resp.data[i].finish == null) {
            this.cases.push(resp.data[i].caseName)
          }
        }
      })
    },
    getDataFromHumanList() {
      axios.create({
        baseURL: this.baseUrl
      }).get('/human').then(resp => {
        this.mainHuman = resp.data;
        for (let i = 0; i < resp.data.length; i++) {
          this.humans.push(resp.data[i].name + " " + resp.data[i].surname)
        }
      })
    },
    getDataFromCrimeTypeList() {
      axios.create({
        baseURL: this.baseUrl
      }).get('/crimetype').then(resp => {
        this.mainCrimetype = resp.data;
        for (let i = 0; i < resp.data.length; i++) {
          this.crimetypes.push(resp.data[i].name)
        }
      })
    },
    getDataFromPunishmentList() {
      axios.create({
        baseURL: this.baseUrl
      }).get('/punishment').then(resp => {
        this.mainPunishment = resp.data;
        for (let i = 0; i < resp.data.length; i++) {
          this.punishments.push(resp.data[i].name)
        }
      })
    },
    findInMass(findName, mass) {
      for (let i = 0; i < mass.length; i++) {
        if (mass[i] == findName) {
          this.findIndex = i;
          break;
        }
      }
    },
    checkAndFill(item) {
      if (item != null) {
        axios.create({
          baseURL: this.baseUrl
        }).get('/criminal/' + item.id).then(resp => {
          this.selectCase = resp.data.c.name
          this.selectHuman = resp.data.human.name + " " + resp.data.human.surname
          this.selectCrimeType = resp.data.crimeType.name
          this.selectPunishment = resp.data.punishment.name ? resp.data.punishment.name :'fffffooooo'
        })
      }
    }
  },
  beforeMount() {
    this.getDataFromHumanList()
    this.getDataFromPunishmentList()
    this.getDataFromCrimeTypeList()
    this.getDataFromCaseList()
    this.checkAndFill(this.item)
  }
}
</script>

<style scoped>

</style>