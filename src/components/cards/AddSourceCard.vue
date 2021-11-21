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

          </v-col>
          <v-col>
            <v-text-field
                v-model="rating"
                label="Rating"
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
  name: "AddSourceCard",
  data: () => ({
    name: '',
    rating: '',
    baseUrl: 'http://localhost:10511'
  }),
  props: {
    item: null,
    flagEdit: Boolean,
  },
  methods: {
    saveAndClose() {
      let data = {
        name: this.name,
        rating: this.rating
      }
      if (this.flagEdit) {
        data = {
          id: this.item.id,
          name: this.name,
          rating: this.rating
        }
        axios.create({baseURL: this.baseUrl}).put('/source/' + this.item.id, data)
            .then(window.location.reload())
      } else {
        axios.create({baseURL: this.baseUrl}).post('/source', data)
            .then(window.location.reload())
      }
      data = {
        dialog: false,
        error: false
      }
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
    checkAndFill(item) {
      if (item != null) {
        axios.create({
          baseURL: this.baseUrl
        }).get('/source/' + item.id).then(resp => {
          this.name = resp.data.name
          this.rating = resp.data.rating
        })
      }
    }
  },
  beforeMount() {
    this.checkAndFill(this.item)
  }
}
</script>

<style scoped>

</style>