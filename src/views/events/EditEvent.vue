<template>
  <div class="d-flex justify-center">
    <v-card class="elevation-12" width="80%">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Edit event</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form ref="form" @submit.prevent="edit">
          <v-alert v-if="updatedSuccefully" dense text type="success">
            Event was updated succefully.
          </v-alert>
          <v-text-field
            v-model="editEvent.eventName"
            prepend-icon="mdi-map-marker"
            :rules="[(v) => !!v || 'Event name is required']"
            validate-on-blur
            name="eventName"
            label="Event name"
            type="text"
          ></v-text-field>
          <v-text-field
            v-model="editEvent.eventDate"
            prepend-icon="mdi-calendar-range"
            :rules="[(v) => !!v || 'Event date is required']"
            validate-on-blur
            name="date"
            label="Event date"
            type="date"
          ></v-text-field>
          <v-textarea
            v-model="editEvent.eventDescription"
            prepend-icon="mdi-android-messages"
            validate-on-blur
            name="description"
            label="Description"
            type="textarea"
          ></v-textarea>
          <v-card-actions class="d-flex justify-between">
            <v-btn @click="onCancel" outlined color="primary"> Back </v-btn>
            <v-spacer></v-spacer>
            <v-btn type="submit" color="primary"> Save changes </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editEvent: {
        id: -1,
        eventName: "",
        eventDate: "",
        eventDescription: "",
        userId: -1,
      },
      updatedSuccefully: false,
    };
  },
  methods: {
    initialize() {
      const eventToBeEdited = JSON.parse(localStorage.getItem("currentEvent"));
      this.editEvent = eventToBeEdited;
    },
    edit() {
      const editedEvent = {
        id: Math.floor(Math.random * 100),
        userId: this.editEvent.userId,
        eventName: this.editEvent.eventName,
        eventDate: this.editEvent.eventDate,
        eventDescription: this.editEvent.eventDescription,
      };
      const allEvents = JSON.parse(localStorage.getItem("events")) || [];
      this.removeEvent(allEvents);
      allEvents.push(editedEvent);
      localStorage.setItem("events", JSON.stringify(allEvents));
      this.updatedSuccefully = true;
    },
    removeEvent(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === this.editEvent.id) {
          arr.splice(i, 1);
        }
      }
    },
    onCancel() {
      this.$router.replace("/");
    },
  },
  created() {
    this.initialize();
  },
};
</script>