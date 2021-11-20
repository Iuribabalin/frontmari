<template>
  <v-app-bar color="indigo darken-4" dark height="67px">
    <Dialog :nav_context=this.nav_context @updateParent="errorUpdate"></Dialog>
    <v-btn color="white" outlined style="margin-right: 20px" @click="doSomething">
      <v-icon dark style="margin-right: 5px">
        mdi-database-edit-outline
      </v-icon>
      Edit
    </v-btn>
  </v-app-bar>
</template>

<script>
import Dialog from "@/components/Dialog";
export default {
  name: "AppBar",
  components: {Dialog},
  props: {
    nav_context: String,
    nowStatusButton:Boolean,
  },
  methods: {
    doSomething() {
      let data = {
        statusButton: !this.nowStatusButton,
        error: false
      }
      this.goEmit(data)
    },
    errorUpdate(error){
      console.log("error to main: " + error.error)
      let data = {
        statusButton: false,
        error: error.error
      }
      this.goEmit(data)
    },
    goEmit(data){
      this.$emit('updateParent', {
        data
      })
    }
  }
}
</script>

<style scoped>

</style>