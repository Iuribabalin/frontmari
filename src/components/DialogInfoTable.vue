<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        Extra information
      </v-card-title>

      <v-card-text>
        {{ data }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="primary"
            text
            @click="changeDialog"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";

export default {
  name: "DialogInfoTable",
  props: {
    item: null,
    urlProps: String,
  },
  data: () => ({
    dialog: true,
    data: null,
    baseUrl: 'http://localhost:10511'
  }),
  methods: {
    changeDialog() {
      this.dialog = false
      this.$emit('changeFlag', {
        flag: false
      })
    },
    getInfoById() {
      axios.create({
        baseURL: this.baseUrl
      }).get(this.urlProps + '/' + this.item.id).then(resp => {
        this.data = resp.data
      })
    }
  },
  beforeMount() {
    this.getInfoById()
  },
}
</script>

<style scoped>

</style>