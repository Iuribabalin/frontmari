<template>
  <v-row class="no-gutters">
    <v-col cols="2">
      <NavigationBar/>
    </v-col>
    <v-col cols="max">
      <AppBar :nav_context=this.nav_context :nowStatusButton=this.nowStatusButton @updateParent="statusButton"/>
      <Table  :headersProps="this.headers" :urlProps="this.url" :nav_context=this.nav_context :editFlag="this.addFlag" v-show="headers"/>
    </v-col>
  </v-row>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import AppBar from "@/components/AppBar";
import Table from "@/components/Table";

export default {
  name: "CriminalPage",
  components: {AppBar, Table, NavigationBar},
  data: () => ({
    url: '/criminal',
    nav_context: 'criminal',
    nowStatusButton: false,
    headers: [
      {
        text: 'Id',
        align: 'start',
        value: 'id',
      },
      {
        text: 'Name',
        value: 'name'
      },
      {
        text: 'Type of crime',
        value: 'crimeType'
      },
      {
        text: 'Punishment',
        value: 'punishmentName'
      },
      {
        text: 'Until',
        value: 'punishmentLasting'
      },
      {
        text: 'Case',
        value: 'aCase'
      },
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