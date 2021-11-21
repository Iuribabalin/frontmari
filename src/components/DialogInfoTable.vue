<template>
  <v-dialog v-model="dialog" persistent max-width="600px">

    <HumanInfo v-if="nav_context === 'main'" :info="this.data" @updateDialog="changeDialog"/>
    <PerformerInfo v-if="nav_context === 'performer'" :info="this.data" @updateDialog="changeDialog"/>
  </v-dialog>
</template>

<script>
import axios from "axios";
import HumanInfo from "./cards/InfoCards/HumanInfo";
import PerformerInfo from "./cards/InfoCards/PerformerInfo";

export default {
  name: "DialogInfoTable",
  components: {HumanInfo, PerformerInfo},
  props: {
    item: null,
    urlProps: String,
    nav_context: String
  },
  data: () => ({
    dialog: true,
    data: null,
    baseUrl: 'http://localhost:10511'
  }),
  methods: {
    changeDialog() {
      this.dialog = false
      this.$emit('changeFlag', {
        flag: false
      })
    },
    getInfoById() {
      axios.create({
        baseURL: this.baseUrl
      }).get(this.urlProps + '/' + this.item.id).then(resp => {
        this.data = resp.data
      })
    }
  },
  beforeMount() {
    this.getInfoById()
  },
}
</script>

<style scoped>

</style>