<template>
<!--  <v-layout class="rounded rounded-md">-->
<!--    <v-navigation-drawer>-->
<!--      <v-list>-->
<!--        <v-list-item title="Navigation drawer"></v-list-item>-->
<!--      </v-list>-->
<!--    </v-navigation-drawer>-->

<!--    <v-app-bar title="Application bar"></v-app-bar>-->

<!--    <v-main class="d-flex align-center justify-center bg-red" style="min-height: 300px;">-->
<!--      Main Content-->
<!--    </v-main>-->
<!--  </v-layout>-->





  <v-main class="pt-10 pb-4 px-16 h-screen"
          style="background-color: #e5fcf7">
    <v-row class="d-flex flex-row mb-6 rounded-xl"
           style="height: 100%; background-color: #e5e9ec">
      <v-col class="rounded-xl w-25"
             style="background-color: #e5e9ec">
        <div class="ml-6 mt-4">
          <v-row class="align-center text-teal-darken-3">
            <v-icon icon="maps_home_work"
                    size="x-large"></v-icon>
            <v-col class="font-weight-bold text-h4">Taski</v-col>
          </v-row>
          <v-row class="mt-7">
            <v-avatar color="teal-darken-3" size="x-large">
              Avatar
            </v-avatar>
            <v-col class="ml-3">
              <v-row class="font-weight-bold text-h5">
                <span>Name</span>
                <span class="ml-2">Surname</span>
              </v-row>
              <v-row class="text-h7">
                Premium account
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col>Icon</v-col>
            <v-col>Activity</v-col>
          </v-row>
          <v-row>
            <v-col>Icon</v-col>
            <v-col>My profile</v-col>
          </v-row>
        </div>
      </v-col>

      <v-col cols="auto" class="w-75 rounded-t-xl py-10 mb-4"
             style="background-color: #e5e9ec">
        <v-row class="w-100 rounded-t-xl "
               style="height: 100%;  background-color: #f9fafb">
          <v-col>
            <v-row class="w-100 align-center">
              <v-col class="font-weight-bold text-h6">Team tasks</v-col>
              <v-btn color=teal-darken-3>+ Create task</v-btn>
            </v-row>
            <v-row>
              <v-col>Filters</v-col>
              <v-col>Sort by</v-col>
              <v-col>Group: by status</v-col>
            </v-row>
            <v-row class="justify-space-between v-row-auto">
              <v-col class="rounded-lg ms-3"
                     style="background-color: #e5e9ec">
                <v-col>To Do</v-col>
                <v-card class="rounded-lg mb-3"
                        style="background-color: #f9fafb">
                  <v-card-item>
                    <div>
                      <div class="text-h6 mb-1">
                        Название задачи
                      </div>
                      <div class="text-caption overflow-auto">Текст задачи</div>
                    </div>
                  </v-card-item>
                  <v-card-actions class="justify-end">
                    <v-btn icon="edit" class="text-grey-darken-1"></v-btn>
                    <v-btn icon="delete" class="text-grey-darken-1"></v-btn>
                  </v-card-actions>
                </v-card>
                <v-btn color="#f9fafb" class="w-100">Add task</v-btn>
              </v-col>
              <v-col class="rounded-lg mx-3 "
                     style="background-color: #e5e9ec">In Progress</v-col>
              <v-col class="rounded-lg me-3"
                     style="background-color: #e5e9ec">In Review</v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="w-100 rounded-b-xl mt-4 align-center"
               style="height: 40px; background-color: #f9fafb"
               >
          <span class="pl-5">10</span>
          <span class="pl-1">Tasks</span>
        </v-row>
      </v-col>
    </v-row>
  </v-main>
</template>

<script setup>
  //
</script>
