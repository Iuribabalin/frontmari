<template>
  <div>
    <ModalWindow ref="modal"/>
    <v-data-table @click:row="showModal"
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
        <v-icon v-if="$route.path === '/case'"
                small
                @click="endCase(item)"
        >
          mdi-close-thick
        </v-icon>

      </template>

    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";
// import ShowHumanFields from "@/components/fields/ShowHumanFields"
import ModalWindow from "./fields/ModalWindow";

export default {
  name: "Table",
  props: {
    nav_context: String,
    headersProps: [],
    urlProps: String,
    nowStatusButton:Boolean,
    editFlag: Boolean,
  },
  components: {ModalWindow},
  data: () => ({
    // showModal: false,
    headers: [],
    desserts: [],
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
      }).delete(this.urlProps + "/" + item.id).catch(function (error) {
        if (error.response) {
          alert(error.response.data.message)
        }
      })
      this.getTableInfo()
    },

    endCase: function (item) {
      axios.create({
        baseURL: this.baseUrl
      }).get(this.urlProps + "/end/" + item.id).catch(function (error) {
        if (error.response) {
          alert(error.response.data.message)
        }
      })
      window.location.reload()
    },

    showModal: function (item) {
      if (this.nowStatusButton === false) {
        this.$refs.modal.show = true
        axios.create({
          baseURL: this.baseUrl
        }).get(this.urlProps + "/" + item.id).then(resp => {
          this.$refs.modal.item = resp.data
        })
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