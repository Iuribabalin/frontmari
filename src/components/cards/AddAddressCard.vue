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
                v-model="city"
                label="City"
                required
            ></v-text-field>
            <v-text-field
                v-model="house"
                label="House"
                required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
                v-model="street"
                label="Street"
                required
            ></v-text-field>
          </v-col>
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
  name: "AddAddressCard",
  data: () => ({
    city: '',
    street: '',
    house: '',
    baseUrl: 'http://localhost:10511'
  }),
  props: {
    item: null,
    flagEdit: Boolean,
  },
    methods: {
      saveAndClose() {
        let data = {
          city: this.city,
          street: this.street,
          house: this.house
        }
        if (this.flagEdit) {
          data = {
            id: this.item.id,
            city: this.city,
            street: this.street,
            house: this.house,
          }
          axios.create({baseURL: this.baseUrl}).put('/address/' + this.item.id, data)
              .then(window.location.reload())
        } else {
          axios.create({baseURL: this.baseUrl}).post('/address', data)
              .then(window.location.reload())
        }
        data = {
          dialog: false,
          error: false
        }
        this.$emit('updateParent', {
          data
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
      checkAndFill(item) {
        if (item != null) {
          axios.create({
            baseURL: this.baseUrl
          }).get('/address/' + item.id).then(resp => {
            this.city = resp.data.city
            this.street = resp.data.street
            this.house = resp.data.house
          })
        }
      }
  },
  beforeMount() {
    this.checkAndFill(this.item)
  },
}
</script>

<style scoped>

</style>