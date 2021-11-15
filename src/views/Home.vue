<template>
  <div>
    <!-- <div class="d-block">
      <add-new-event />
    </div> -->
  </div>
</template>

<script>
//import AddNewEvent from "../views/events/AddNewEvent.vue";

export default {
  components: {
    //AddNewEvent,
  },
  methods: {
    clicked() {
      console.log("clicked");
    },
    goToAddEvent() {
      this.$router.replace("/event/add-new");
    },
  },
};
</script>