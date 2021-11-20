<template>
  <v-row class="no-gutters">
    <v-col cols="2">
      <NavigationBar/>
    </v-col>
    <v-col cols="max">
      <AppBar :nav_context=this.nav_context :nowStatusButton=this.nowStatusButton @updateParent="statusButton"></AppBar>
      <Table  :headersProps="this.headers" :urlProps="this.url" :nav_context=this.nav_context v-show="headers"></Table>
    </v-col>
  </v-row>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import Table from "@/components/Table";
import AppBar from "@/components/AppBar";

export default {
  name: "MainPage",
  components: {AppBar, Table, NavigationBar},
  data: () => ({
    url: '/human',
    nav_context: 'main',
    nowStatusButton: false,
    headers: [
      {text: 'Id', align: 'start', value: 'id'},
      {text: 'Name', value: 'name'},
      {text: 'Surname', value: 'surname'},
      {text: 'Age', value: 'age'},
      {text: 'Gender', value: 'gender'},
      {text: 'Profession', value: 'profession'},
    ],
  }),
  methods: {
    statusButton(newState) {
      this.nowStatusButton = newState.data.statusButton
      this.error = newState.data.error
      if (this.nowStatusButton && !this.addFlag) {
        this.addFlag = true
        this.headers.push({text: 'Actions', value: 'actions', sortable: false})
      }
      if (!this.nowStatusButton && this.addFlag) {
        this.addFlag = false
        this.headers.pop()
      }
    },
  }
}
</script>

<style scoped>

</style>