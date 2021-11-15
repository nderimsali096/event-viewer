<template>
  <div class="d-flex justify-center align-center wrapper" style="height: 100%">
    <v-main>
      <v-container>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon="mdi-account"
                    name="username"
                    label="Username"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="mdi-lock"
                    name="password"
                    label="Password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions class="d-flex flex-column">
                <div class="d-flex justify-center mb-16" style="width: 100%">
                  <v-btn class="px-16 py-6" color="primary" to="/">Login</v-btn>
                </div>
                <div class="d-flex flex-column align-center justify-center">
                  <p style="color: #ccc">Don't have an account yet?</p>
                  <v-btn
                    @click="goToRegister"
                    class="m-2"
                    outlined
                    color="primary"
                  >
                    Register
                  </v-btn>
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  methods: {
    goToRegister() {
      this.$router.replace("/auth/register");
    },
  },
};
</script>

<style scoped>
.wrapper {
  background-image: url("../../assets/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>