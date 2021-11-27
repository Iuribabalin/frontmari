<template>
  <v-form v-model="valid" lazy-validation ref="form">
    <v-card max-width="500" max-height="400">
      <v-card-title>
        <span class="text-h5">Authorization</span>
      </v-card-title>
      <v-card-text>
            <v-text-field
                label="Login"
            ></v-text-field>
            <v-text-field
                :type="'password'"
                label="Password"
            ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn>
          Sign in
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
export default {
  name: "AuthPage"
}
</script>

<style scoped>

</style>