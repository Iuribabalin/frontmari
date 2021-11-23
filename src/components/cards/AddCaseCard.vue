<template>
  <v-form>
    <v-card>
      <v-card-title>
        <span class="text-h5">Case Profile</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-select
                label="Client"
                :items="clients"
                v-model = "selectClient"
            ></v-select>
            <v-text-field
                v-model="name"
                label="Case name"
                required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-select
                label="Address"
                :items="addresses"
                v-model = "selectAddress"
            ></v-select>
            <v-select
                v-model="selectPerformers"
                :items="performers"
                label="Performers"
                multiple
                clearable
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
  name: "AddCaseCard",
  data: () => ({
    clients:[],
    addresses:[],
    selectClient:'',
    selectAddress:'',
    name: '',
    findIndex: 0,
    indexes: [],
    mainClients: [],
    mainAddresses: [],
    selectPerformers: [],
    performers: [],
    mainPerformers: [],
    baseUrl:'http://localhost:10511'
  }),
  props: {
    item: null,
    flagEdit: Boolean,
  },
  methods: {

    saveAndClose() {
      this.findInMass(this.selectClient, this.clients)
      let client_id = this.mainClients[this.findIndex].id
      this.findInMass(this.selectAddress, this.addresses)
      let address_id = this.mainAddresses[this.findIndex].id
      this.findArray(this.selectPerformers, this.performers)
      let performers = [];
      for (let i = 0; i < this.indexes.length; i++){
        performers.push(this.mainPerformers[this.indexes[i]].id)
      }
      let data = {
        client_id: client_id,
        address_id: address_id,
        name: this.name,
        performers: performers
      }
      if (this.flagEdit) {
        data = {
          client_id: client_id,
          address_id: address_id,
          name: this.name,
          performers: performers
        }
        axios.create({baseURL: this.baseUrl}).put('/case/' + this.item.id, data)
            .then(window.location.reload())
      } else {
        axios.create({baseURL: this.baseUrl}).post('/case', data)
            .then(window.location.reload())
      }
      data = {
        dialog: false,
        error: false
      }
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
    getDataFromClientList() {
      axios.create({
        baseURL: this.baseUrl
      }).get('/client').then(resp => {
        this.mainClients = resp.data;
        for (let i = 0; i < resp.data.length; i++) {
          this.clients.push(resp.data[i].name)
        }
      })
    },
    getDataFromAddressList(){
      axios.create({
        baseURL: this.baseUrl
      }).get('/address').then(resp => {
        this.mainAddresses = resp.data;
        for(let i = 0; i < resp.data.length; i++){
          this.addresses.push(resp.data[i].city + " " + resp.data[i].street + " " + resp.data[i].house)
        }
      })
    },
    getDataFromPerformerList(){
      axios.create({
        baseURL: this.baseUrl
      }).get('/performer').then(resp => {
        this.mainPerformers = resp.data;
        for(let i = 0; i < resp.data.length; i++){
          this.performers.push(resp.data[i].name + " " + resp.data[i].surname)
        }
      })
    },
    checkAndFill(item) {
      if (item != null) {
        axios.create({
          baseURL: this.baseUrl
        }).get('/case/' + item.id).then(resp => {
          this.name = resp.data.aCase.name
          this.selectClient = resp.data.aCase.client.human.name + " " + resp.data.aCase.client.human.surname
          this.selectAddress = resp.data.aCase.address.city + " " + resp.data.aCase.address.street + " " + resp.data.aCase.address.house
          for (let i = 0; i < resp.data.listOfPerformers.length; i++){
            this.selectPerformers.push(resp.data.listOfPerformers[i])
          }
        })
      }
    },
    findInMass(findName, mass) {
      for (let i = 0; i < mass.length; i++) {
        if (mass[i] === findName) {
          this.findIndex = i;
          break;
        }
      }
    },
    findArray(findName, mass){
      for (let j = 0; j < findName.length; j++) {
        for (let i = 0; i < mass.length; i++) {
          if (mass[i] === findName[j]) {
            this.indexes.push(i)
            break;
          }
        }
      }
    }
  },
  beforeMount() {
    this.getDataFromClientList()
    this.getDataFromAddressList()
    this.getDataFromPerformerList()
    this.checkAndFill(this.item)
  }
}
</script>

<style scoped>

</style>