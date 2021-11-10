<template>
  <v-data-table
      :headers="this.headers"
      :items="desserts"
      :items-per-page="5"
      item-key="name"
      :footer-props="{
          'items-per-page-options': [10, 20, 30, -1]
      }"
  >
    <template v-slot:item.actions="{ item }">
      <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
          small
          @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";

export default {
  name: "Table",
  props: {
    headersProps:[],
    urlProps: String,
    editFlag: Boolean,
  },
  data: () => ({
    headers: [],
    desserts: [],
  }),
  methods: {
    getTableInfo: function () {
      axios.create({
        baseURL: "http://localhost:10511"
      }).get(this.urlProps).then(resp => {
        this.headers = this.headersProps
        this.desserts = resp.data
      })
    }
  },

  beforeMount() {
    this.getTableInfo()
  },
}
</script>

<style scoped>

</style>