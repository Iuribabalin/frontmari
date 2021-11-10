<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="green" outlined  style="margin-right: 20px" v-bind="attrs" v-on="on">
        <v-icon dark style="margin-right: 5px">
          mdi-database-plus-outline
        </v-icon>
        Add new
      </v-btn>
    </template>

    <AddHumanCard v-if="this.nav_context === 'main'" @updateParent="updateDialog"/>
    <AddPerformer v-if="this.nav_context === 'performer'" @updateParent="updateDialog"/>
  </v-dialog>
</template>

<script>
import AddHumanCard from "@/components/cards/AddHumanCard";
import AddPerformer from "@/components/cards/AddPerformer";
export default {
  name: "Dialog",
  components: {AddPerformer, AddHumanCard},
  props: {
    nav_context: String,
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    updateDialog(state) {
      this.dialog = state.dialog

    }
  }
}
</script>

<style scoped>

</style>