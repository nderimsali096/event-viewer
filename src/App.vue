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

      <v-toolbar-title>Event Viewer</v-toolbar-title>

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
          <v-tab to="/">All events</v-tab>
          <v-tab to="/event/add-new">Add event</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer v-if="!$route.meta.hideNavbar" dark padless>
      <v-card
        width="100%"
        flat
        tile
        class="indigo lighten-1 white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          "Alone we can do so little; together we can do so much." – Helen
          Keller
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Company Name</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("loggedUser");
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
