<template>
  <div class="pa-16">
    <v-data-table
      :headers="headers"
      :items="events"
      sort-by="date"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Events</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this event?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-alert v-if="deletedSuccefully" dense text type="success">
            Event was deleted succefully.
          </v-alert>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </div>
</template>


<script>
export default {
  data: () => ({
    dialogDelete: false,
    deletedSuccefully: false,
    headers: [
      {
        text: "Event name",
        align: "start",
        sortable: false,
        value: "eventName",
      },
      { text: "Event date", value: "eventDate" },
      { text: "Description", value: "eventDescription", sortable: false },
      { text: "Actions", value: "actions", sortable: false },
    ],
    events: [],
    currentUser: {},
    editedIndex: -1,
  }),

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.currentUser = JSON.parse(localStorage.getItem("loggedUser"));
      this.getEvents();
    },

    editItem(item) {
      localStorage.setItem("currentEvent", JSON.stringify(item));
      this.$router.replace("/event/edit");
    },

    deleteItem(item) {
      this.dialogDelete = true;
      this.editedIndex = item.id;
    },

    deleteItemConfirm() {
      const allEvents = JSON.parse(localStorage.getItem("events")) || [];
      this.removeEvent(allEvents, this.editedIndex);
      localStorage.setItem("events", JSON.stringify(allEvents));
      this.closeDelete();
      this.deletedSuccefully = true;
      setTimeout(() => {
        this.deletedSuccefully = false;
      }, 3000);
      this.events = [];
      this.getEvents();
    },
    closeDelete() {
      this.dialogDelete = false;
    },
    getEvents() {
      const allEvents = JSON.parse(localStorage.getItem("events")) || [];
      allEvents.forEach((event) => {
        if (event.userId === this.currentUser.id) {
          this.events.push(event);
        }
      });
    },
    removeEvent(arr, id) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
          arr.splice(i, 1);
        }
      }
    },
  },
};
</script>