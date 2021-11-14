<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">Performer Profile</span>
    </v-card-title>
    <v-card-text>
      <v-select
          label="Human"
          :items="humans"
          v-model = "selectHuman"
      ></v-select>
      <v-select
          label="Address"
          :items="addresses"
          v-model = "selectAddress"
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
          @click="save"
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
    humans:[],
    addresses:[],
    selectHuman:'',
    selectAddress:'',
    baseUrl:'http://localhost:10511'
  }),
  methods: {
    save() {
      console.log(this.selectHuman)
      this.$emit('updateParent', {
        dialog: false
      })
    },
    doSomething() {
      this.$emit('updateParent', {
        dialog: false
      })
    },
    getDataFromHumanList(){
      axios.create({
        baseURL: this.baseUrl
      }).get('/human').then(resp => {
        for(let i = 0; i < resp.data.length; i++){
          this.humans.push(resp.data[i].name + " " + resp.data[i].surname)
        }
      })
    },
    getDataFromAddressList(){
      axios.create({
        baseURL: this.baseUrl
      }).get('/address').then(resp => {
        for(let i = 0; i < resp.data.length; i++){
          this.addresses.push(resp.data[i].city + " " + resp.data[i].street + " " + resp.data[i].house)
        }
      })
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