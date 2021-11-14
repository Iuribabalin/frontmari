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
                v-model="money"
                label="Money"
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
                  :label="`Is police: ${checkbox.toString()}`"
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
    money: '',
    checkbox: false,
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
    getDataFromHumanList() {
      axios.create({
        baseURL: this.baseUrl
      }).get('/human').then(resp => {
        for (let i = 0; i < resp.data.length; i++) {
          this.humans.push(resp.data[i].name + " " + resp.data[i].surname)
        }
      })
    }
  },
    beforeMount() {
      this.getDataFromHumanList()
  }
}
</script>

<style scoped>

</style>