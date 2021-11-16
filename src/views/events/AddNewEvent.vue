<template>
  <div class="d-flex justify-center">
    <v-card class="elevation-12" width="80%">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Add new event</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form ref="form" @submit.prevent="addNewEvent">
          <v-alert v-if="addedSuccessfully" dense text type="success">
            Event was added succefully.
          </v-alert>
          <v-text-field
            v-model="eventName"
            :rules="[(v) => !!v || 'Event name is required']"
            validate-on-blur
            :disabled="!adding"
            prepend-icon="mdi-map-marker"
            name="eventName"
            label="Event name"
            type="text"
          ></v-text-field>
          <v-text-field
            v-model="eventDate"
            :rules="[(v) => !!v || 'Date is required']"
            validate-on-blur
            :disabled="!adding"
            prepend-icon="mdi-calendar-range"
            name="date"
            label="Event date"
            type="date"
          ></v-text-field>
          <v-textarea
            v-model="eventDescription"
            prepend-icon="mdi-android-messages"
            :disabled="!adding"
            name="description"
            label="Description"
            type="textarea"
          ></v-textarea>
          <v-card-actions
            v-if="adding"
            class="d-flex justify-space-between"
            style="width: 100%"
          >
            <v-btn @click="onCancel" outlined color="primary"> Cancel </v-btn>
            <v-btn type="submit" color="primary">Add</v-btn>
          </v-card-actions>
          <v-card-actions
            v-else
            class="d-flex justify-space-around"
            style="width: 100%"
          >
            <v-btn @click="backToEvents" outlined color="primary">
              Back to all events
            </v-btn>
            <v-btn @click="addAnother" color="primary">Add another event</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      eventName: "",
      eventDate: null,
      eventDescription: "",
      currentUser: {},
      addedSuccessfully: false,
      adding: true,
    };
  },

  methods: {
    addNewEvent() {
      const newEvent = {
        id: Math.floor(Math.random() * 1000),
        userId: this.currentUser.id,
        eventName: this.eventName,
        eventDate: this.eventDate,
        eventDescription: this.eventDescription,
      };
      this.addEventOnLocalStorage(newEvent);
      this.addedSuccessfully = true;
      this.onCancel();
    },
    addEventOnLocalStorage(event) {
      let existingEvents = JSON.parse(localStorage.getItem("events"));
      if (existingEvents == null) existingEvents = [];
      localStorage.setItem("event", JSON.stringify(event));
      existingEvents.push(event);
      localStorage.setItem("events", JSON.stringify(existingEvents));
      this.addedSuccessfully = true;
      this.adding = false;
    },
    onCancel() {
      this.eventName = "";
      this.eventDate = null;
      this.eventDescription = "";
    },
    backToEvents() {
      this.$router.replace("/");
    },
    addAnother() {
      this.adding = true;
    },
  },

  created() {
    this.currentUser = JSON.parse(localStorage.getItem("loggedUser"));
  },
};
</script>