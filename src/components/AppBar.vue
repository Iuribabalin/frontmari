<template>
  <v-app-bar color="indigo darken-4" dark height="67px">
    <Dialog :nav_context=this.nav_context></Dialog>
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
      this.$emit('updateParent', {
        statusButton: !this.nowStatusButton
      })
    }
  }
}
</script>

<style scoped>

</style>