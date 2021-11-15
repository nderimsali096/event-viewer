<template>
  <v-app>
    <v-app-bar class="mb-12" tile height="70px" color="primary" dark>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-toolbar-title>titlw</v-toolbar-title>

      <v-spacer></v-spacer>
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

  data: () => ({
    //
  }),
  methods: {
    clicked() {
      this.$router.replace("/auth/login");
    },
    goToAddEvent() {
      this.$router.replace("/event/add-new");
    },
  },
};
</script>

<style scoped>
.v-toolbar {
  flex: 0;
}
</style>
