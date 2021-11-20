<template>
  <v-row class="no-gutters">
    <v-col cols="2">
      <NavigationBar/>
    </v-col>
    <v-col cols="max">
      <AppBar :nav_context=this.nav_context :nowStatusButton=this.nowStatusButton @updateParent="statusButton"></AppBar>
      <AlertCard :error-text="this.errorText" v-if="error" @updateAlert="closeAlert"></AlertCard>
      <Table :headersProps="this.headers" :urlProps="this.url" v-show="headers"></Table>
    </v-col>
  </v-row>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import AppBar from "@/components/AppBar";
import Table from "@/components/Table";
import AlertCard from "@/components/alerts/AlertCard";

export default {
  name: "PerformerPage",
  components: {AlertCard, AppBar, Table, NavigationBar},
  data: () => ({
    url: '/performer',
    nav_context: 'performer',
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
        text: 'Surname',
        value: 'surname'
      },
      {
        text: 'Profession',
        value: 'profession'
      },
    ],
    addFlag: false,
    error: false,
    errorText: "Ошибка в добавлении нового элемента",
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
    closeAlert(flag) {
      console.log(flag.flag)
      this.error = flag.flag
    }
  },
}
</script>

<style scoped>

</style>