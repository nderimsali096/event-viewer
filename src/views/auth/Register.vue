<template>
  <div class="d-flex justify-center align-center wrapper" style="height: 100%">
    <v-main>
      <v-container>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Register</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        prepend-icon="mdi-alpha-f-box"
                        name="first-name"
                        label="First name"
                        type="text"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        prepend-icon="mdi-alpha-l-box"
                        name="lastname"
                        label="Last name"
                        type="text"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        prepend-icon="mdi-account"
                        name="username"
                        label="Username"
                        type="text"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        id="password"
                        prepend-icon="mdi-lock"
                        name="password"
                        label="Password"
                        type="password"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        prepend-icon="mdi-email"
                        name="email"
                        label="E-mail"
                        type="email"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        prepend-icon="mdi-phone"
                        name="phone"
                        label="Phone number"
                        type="number"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
              <v-card-actions class="d-flex flex-column">
                <div class="d-flex justify-center mb-16" style="width: 100%">
                  <v-btn class="px-16 py-6" color="primary" to="/"
                    >Register</v-btn
                  >
                </div>
                <div class="d-flex flex-column align-center justify-center">
                  <p style="color: #ccc">Already have an account?</p>
                  <v-btn
                    @click="goToLogin"
                    class="m-2"
                    outlined
                    color="primary"
                  >
                    Go to login
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
    goToLogin() {
      this.$router.replace("/auth/login");
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