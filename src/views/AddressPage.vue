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
  name: "AddressPage",
  components: {AppBar, Table, NavigationBar},
  data: () => ({
    url: '/address',
    nav_context: 'address',
    nowStatusButton: false,
    headers: [
      {
        text: 'Id',
        align: 'start',
        value: 'id',
      },
      {
        text: 'City',
        value: 'city'
      },
      {
        text: 'Street',
        value: 'street'
      },
      {
        text: 'House',
        value: 'house'
      },
    ],
  }),
  methods: {
    statusButton(newState) {
      this.nowStatusButton = newState.statusButton
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