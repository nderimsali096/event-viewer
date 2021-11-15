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
                <v-alert v-if="invalidCredentials" dense outlined type="error">
                  Invalid <strong>username</strong> or
                  <strong>password.</strong> Please try again.
                </v-alert>
                <v-form ref="form" @submit.prevent="login">
                  <v-text-field
                    v-model="username"
                    prepend-icon="mdi-account"
                    name="username"
                    label="Username"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    prepend-icon="mdi-lock"
                    name="password"
                    label="Password"
                    type="password"
                  ></v-text-field>
                  <v-card-actions class="d-flex flex-column">
                    <div
                      class="d-flex justify-center mb-16"
                      style="width: 100%"
                    >
                      <v-btn type="submit" class="px-16 py-6" color="primary"
                        >Login</v-btn
                      >
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
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      users: [],
      username: "",
      password: "",
      invalidCredentials: false,
    };
  },
  methods: {
    login() {
      const data = {
        username: this.username,
        password: this.password,
      };
      if (this.checkIsItValid(data)) {
        this.$router.replace("/");
      } else {
        this.invalidCredentials = true;
      }
    },
    goToRegister() {
      this.$router.replace("/auth/register");
    },
    getUsers() {
      this.users = JSON.parse(localStorage.getItem("allEntries")) || [];
    },
    checkIsItValid(data) {
      let flag = false;
      this.users.forEach((user) => {
        if (
          user.username === data.username &&
          user.password === data.password
        ) {
          flag = true;
        }
      });
      return flag;
    },
  },
  created() {
    this.getUsers();
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