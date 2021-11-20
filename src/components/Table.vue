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
      <DialogFromTable :nav_context="nav_context" :item="item"/>
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
import DialogFromTable from "@/components/DialogFromTable";

export default {
  name: "Table",
  components: {DialogFromTable},
  props: {
    headersProps: [],
    urlProps: String,
    nav_context: String,
  },
  data: () => ({
    headers: [],
    desserts: [],
    renderComponent: true,
    baseUrl: 'http://localhost:10511'
  }),
  methods: {
    getTableInfo: function () {
      axios.create({
        baseURL: this.baseUrl
      }).get(this.urlProps).then(resp => {
        this.headers = this.headersProps
        this.desserts = resp.data
      })
    },

    deleteItem: function (item) {
      axios.create({
        baseURL: this.baseUrl
      }).delete(this.urlProps + "/" + item.id)
          .then(window.location.reload())
    },
  },

  beforeMount() {
    this.getTableInfo()
  },
}
</script>

<style scoped>

</style>