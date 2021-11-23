<template>
  <div>
    <DialogInfoTable v-if="dialog" :item="this.item" :urlProps="this.urlProps" :nav_context="nav_context"
                     @changeFlag="swithFlag"/>
    <v-data-table
        @click:row="swithFlag"
        :headers="this.headers"
        :items="desserts"
        :items-per-page="5"
        item-key="name"
        :sort-by="this.headers[0].value"
        :sort-desc="false"
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
  </div>
</template>

<script>
import axios from "axios";
import DialogFromTable from "@/components/DialogFromTable";
import DialogInfoTable from "./DialogInfoTable";

export default {
  name: "Table",
  components: {DialogInfoTable, DialogFromTable},
  props: {
    headersProps: [],
    urlProps: String,
    nav_context: String,
    editFlag: Boolean
  },
  data: () => ({
    item: null,
    dialog: false,
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
    swithFlag: function (row) {
      if (!this.editFlag) {
        this.item = row
        this.dialog = !this.dialog
      }
    }
  },

  beforeMount() {
    this.getTableInfo()
  },
}
</script>

<style scoped>

</style>