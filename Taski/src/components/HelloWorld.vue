<template>
  <v-container class="w-100 h-100 bg-teal-lighten-5">
    <v-container class="fill-height  bg-grey-lighten-2 rounded-xl m-2">

      <v-col cols="auto" class="bg-grey-lighten-2 fill-height w-25">
        колонка 1

      </v-col>

      <v-col cols="auto" class="bg-grey-lighten-3 fill-height w-75 rounded-xl">
        <v-row class="w-100 h-auto">
          <v-col>Team tasks</v-col>
          <v-col>Search</v-col>
          <v-btn>Create task</v-btn>
        </v-row>
        <v-row>
          <v-col>Filters</v-col>
          <v-col>Sort by</v-col>
          <v-col>Group: by status</v-col>
        </v-row>
        <v-row class="justify-space-between">
          <v-col class="bg-grey-lighten-2 rounded-lg ms-3">
            <v-col>To Do</v-col>
            <v-col class="bg-grey-lighten-3 rounded-lg mb-3">
              <v-row>Title</v-row>
              <v-row>Body text</v-row>
              <v-row>
                <v-col>Tag</v-col>
                <v-col>date</v-col>
              </v-row>
              <v-row>
                <v-col>
                  Иконка
                </v-col>
                <v-row>
                  <v-col>E</v-col>
                  <v-col>D</v-col>
                </v-row>
              </v-row>
            </v-col>
            <v-btn class="w-100">Add task</v-btn>
          </v-col>
          <v-col class="bg-grey-lighten-2 rounded-lg mx-3 ">In Progress</v-col>
          <v-col class="bg-grey-lighten-2 rounded-lg me-3">In Review</v-col>
        </v-row>
      </v-col>
    </v-container>
  </v-container>
</template>

<script setup>
  //
</script>
