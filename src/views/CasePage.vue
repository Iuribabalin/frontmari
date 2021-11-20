<template>
  <v-row class="no-gutters">
    <v-col cols="2">
      <NavigationBar/>
    </v-col>
    <v-col cols="max">
      <AppBar :nav_context=this.nav_context :nowStatusButton=this.nowStatusButton @updateParent="statusButton"></AppBar>
      <Table :headersProps="this.headers" :urlProps="this.url" v-show="headers"></Table>
    </v-col>
  </v-row>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import AppBar from "@/components/AppBar";
import Table from "@/components/Table";

export default {
  name: "CasePage",
  components: {AppBar, Table, NavigationBar},
  data: () => ({
    url: '/case',
    nav_context: 'case',
    nowStatusButton: false,
    headers: [
      {
        text: 'Id',
        align: 'start',
        value: 'id',
      },
      {
        text: 'Client',
        value: 'client'
      },
      {
        text: 'Address',
        value: 'address'
      },
      {
        text: 'Case name',
        value: 'caseName'
      },
      {
        text: 'Start',
        value: 'start'
      },
      {
        text: 'Finish',
        value: 'finish'
      },
    ],
  }),
  methods: {
    statusButton(newState) {
      this.nowStatusButton = newState.data.statusButton
      if (this.nowStatusButton) {
        this.headers.push({text: 'Actions', value: 'actions', sortable: false})
      }
      if(!this.nowStatusButton){
        this.headers.pop()
      }
      console.log(this.headers)
    }
  }
}
</script>

<style scoped>

</style>