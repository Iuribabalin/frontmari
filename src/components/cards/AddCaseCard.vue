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

    baseUrl:'http://localhost:10511'
  }),
  methods: {

    save() {
      console.log(this.selectCase)
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
    getDataFromClientList() {
      axios.create({
        baseURL: this.baseUrl
      }).get('/client').then(resp => {
        for (let i = 0; i < resp.data.length; i++) {
          this.clients.push(resp.data[i].name)
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
    this.getDataFromClientList()
    this.getDataFromAddressList()
  }
}
</script>

<style scoped>

</style>