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
                <v-alert v-if="addedSuccessfully" dense text type="success">
                  Your account was created succefully. Use your credentials to
                  log in.
                </v-alert>
                <v-form ref="form" @submit.prevent="registerUser">
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="firstName"
                        prepend-icon="mdi-alpha-f-box"
                        name="first-name"
                        :rules="[(v) => !!v || 'First name is required']"
                        label="First name"
                        type="text"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="lastName"
                        prepend-icon="mdi-alpha-l-box"
                        name="lastname"
                        :rules="[(v) => !!v || 'Last name is required']"
                        label="Last name"
                        type="text"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="username"
                        prepend-icon="mdi-account"
                        name="username"
                        :rules="[(v) => !!v || 'Username is required']"
                        label="Username"
                        type="text"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="password"
                        prepend-icon="mdi-lock"
                        name="password"
                        :rules="passwordRules"
                        label="Password"
                        type="password"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="email"
                        prepend-icon="mdi-email"
                        name="email"
                        :rules="emailRules"
                        label="E-mail"
                        type="email"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="phone"
                        prepend-icon="mdi-phone"
                        name="phone"
                        :rules="[(v) => !!v || 'Phone is required']"
                        label="Phone number"
                        type="number"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-card-actions class="d-flex flex-column">
                    <div
                      class="d-flex justify-center mb-16"
                      style="width: 100%"
                    >
                      <v-btn type="submit" class="px-16 py-6" color="primary"
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
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      email: "",
      phone: null,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => v.length > 6 || "Password must be more than 6 characters",
      ],
      addedSuccessfully: false,
    };
  },
  methods: {
    goToLogin() {
      this.$router.replace("/auth/login");
    },
    registerUser() {
      const newUser = {
        id: Math.floor(Math.random() * 1000),
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        password: this.password,
        email: this.email,
        phone: this.phone,
      };
      this.addToLocaleStorage(newUser);
    },
    addToLocaleStorage(newUser) {
      let existingList = JSON.parse(localStorage.getItem("allEntries"));
      if (existingList == null) existingList = [];
      localStorage.setItem("entry", JSON.stringify(newUser));
      existingList.push(newUser);
      localStorage.setItem("allEntries", JSON.stringify(existingList));
      this.addedSuccessfully = true;
      this.clearFields();
    },
    clearFields() {
      this.firstName = "";
      this.lastName = "";
      this.username = "";
      this.password = "";
      this.email = "";
      this.phone = null;
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