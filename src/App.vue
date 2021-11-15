<template>
  <v-app>
    <v-app-bar
      v-if="!$route.meta.hideNavbar"
      class="mb-12"
      tile
      height="70px"
      color="primary"
      dark
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-toolbar-title>titlw</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon
            @click="logout"
            large
            color="primary"
            v-bind="attrs"
            v-on="on"
          >
            mdi-logout
          </v-icon>
        </template>
        <span>LOG OUT</span>
      </v-tooltip>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab @click="clicked">All events</v-tab>
          <v-tab @click="goToAddEvent">Add event</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({}),
  methods: {
    clicked() {
      this.$router.replace("/");
    },
    goToAddEvent() {
      this.$router.replace("/event/add-new");
    },
    logout() {
      this.$router.replace("/auth/login");
    },
  },
};
</script>

<style scoped>
.v-toolbar {
  flex: 0;
}
</style>
