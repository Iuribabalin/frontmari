<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">Performer Profile</span>
    </v-card-title>
    <v-card-text>
      <v-select
          label="Human"
          :items="humans"
          v-model="selectHuman"
      ></v-select>
      <v-select
          label="Address"
          :items="addresses"
          v-model="selectAddress"
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
          @click="saveAndClose"
      >
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "AddPerformer",
  data: () => ({
    humans: [],
    addresses: [],
    selectHuman: '',
    selectAddress: '',
    mainHumans: [],
    mainAddresses: [],
    findIndex: 0,
    errorFlag: false,
    baseUrl: 'http://localhost:10511'
  }),
  methods: {
    saveAndClose() {
      this.findInMass(this.selectHuman, this.humans)
      let human_id = this.mainHumans[this.findIndex].id
      this.findInMass(this.selectAddress, this.addresses)
      let address_id = this.mainAddresses[this.findIndex].id
      let data = {
        human_id: human_id,
        address_id: address_id
      }
      axios
          .create({baseURL: this.baseUrl})
          .post('/performer', data)
          .then(
              resp => {
                console.log(resp)
                data = {
                  dialog: false,
                  error: false
                }
                 window.location.reload();
              }
          )
          .catch(error  => {
            console.log ("error start: " + error)
            data = {
              dialog: false,
              error: true
            }
            this.$emit('updateParent', {
              data: data,
            })
          })
      this.$emit('updateParent', {
        data: data,
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
    getDataFromHumanList() {
      axios.create({
        baseURL: this.baseUrl
      }).get('/human').then(resp => {
        this.mainHumans = resp.data;
        for (let i = 0; i < this.mainHumans.length; i++) {
          this.humans.push(this.mainHumans[i].name + " " + this.mainHumans[i].surname)
        }
      })
    },
    getDataFromAddressList() {
      axios.create({
        baseURL: this.baseUrl
      }).get('/address').then(resp => {
        this.mainAddresses = resp.data
        for (let i = 0; i < this.mainAddresses.length; i++) {
          this.addresses.push(this.mainAddresses[i].city + " " + this.mainAddresses[i].street +
              " " + this.mainAddresses[i].house)
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
    }
  },
  beforeMount() {
    this.getDataFromHumanList()
    this.getDataFromAddressList()
  },
}
</script>

<style scoped>

</style>