<template>
  <div class="d-flex justify-center">
    <v-card class="elevation-12" width="80%">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Add new event</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field
            prepend-icon="mdi-map-marker"
            name="eventName"
            label="Event name"
            type="text"
          ></v-text-field>
          <v-text-field
            prepend-icon="mdi-calendar-range"
            name="date"
            label="Event date"
            type="date"
          ></v-text-field>
          <v-textarea
            prepend-icon="mdi-android-messages"
            name="description"
            label="Description"
            type="textarea"
          ></v-textarea>
        </v-form>
      </v-card-text>
      <v-card-actions class="d-flex justify-between">
        <v-btn outlined color="primary"> Cancel </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary">Add</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>