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
            <v-text-field
                v-model="appearance"
                label="Appearance"
                required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-container
                class="px-0"
                fluid
            >
              <v-checkbox
                  v-model="checkbox"
                  :label="`Is criminal: ${checkbox.toString()}`"
              ></v-checkbox>
            </v-container>
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
  name: "AddHumanCard",
  data: () => ({
    humans:[],
    selectHuman:'',
    mainHumans:[],
    appearance: '',
    checkbox: false,
    baseUrl:'http://localhost:10511'
  }),
  methods: {
    saveAndClose() {
      this.findInMass(this.selectHuman, this.humans)
      let human_id = this.mainHumans[this.findIndex].id
      let data = {
        human_id: human_id,
        appearance: this.appearance,
        police: this.checkbox
      }
      console.log(data)
      axios
          .create({baseURL: this.baseUrl})
          .post('/client', data)
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
        for (let i = 0; i < resp.data.length; i++) {
          this.humans.push(resp.data[i].name + " " + resp.data[i].surname)
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
  }
}
</script>

<style scoped>

</style>