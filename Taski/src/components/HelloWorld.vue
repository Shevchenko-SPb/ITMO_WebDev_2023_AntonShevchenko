<template>
  <div
    id="popupContainer"
  >
    <div class="spinner"></div>
  </div>
    <v-col class="h-screen" style="position: absolute; background:rgba(66,66,66,0.7);; z-index:99999999">
      <v-spacer class="h-25"></v-spacer>
      <v-container class=" rounded-xl align-self-center" style="width: 400px; height: 420px; background: rgba(229,233,236)">
        <v-row class="mr-2 my-2">
          <v-col class="text-h5 font-weight-bold">Create task</v-col>
          <v-spacer></v-spacer>
          <v-btn icon="close" style="background: rgba(229,233,236)"></v-btn>
        </v-row>
        <div class="mt-4">
          <v-text-field
            label="Title"
            :rules="rules"
            hide-details="auto"
          ></v-text-field>
          <v-text-field label="Task"></v-text-field>
        </div>
        <v-row class="mb-2 ml-0 text-h7">End date:</v-row>
        <input type="date" style="width: 368px; border: 1px solid #BDBDBD">
        <v-row class="my-2 ml-0 text-h7">Select tag:</v-row>
        <select style="width: 368px; border: 1px solid #BDBDBD">
          <option>Web</option>
          <option>Update</option>
          <option>Design</option>
          <option>Content</option>
        </select>
        <v-btn color=teal-darken-3 class="mt-4" style="width: 368px">Create</v-btn>
      </v-container>
    </v-col>
  <v-col class="h-screen" style="background-color: #e5fcf7">
    <v-row class="d-flex flex-row mt-7 mb-7 mx-7 rounded-xl"
           style="background-color: #e5e9ec">
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
          <v-row class="align-center pt-4 text-grey-darken-2">
            <v-icon icon="query_stats" size="large"></v-icon>
            <v-col>Activity</v-col>
            <v-spacer></v-spacer>
            <v-chip size="small" class="mr-5 bg-teal-darken-3">0</v-chip>
          </v-row>
          <v-row class="align-center pb-4 text-grey-darken-2">
            <v-icon icon="person" size="large"></v-icon>
            <v-col>My profile</v-col>
          </v-row>
          <v-row class="w-100% me-4" style="border-bottom: 1px solid #BDBDBD"></v-row>
          <v-row class="font-weight-bold text-h6 pt-4">
            Pages
          </v-row>
          <v-row class="align-center text-grey-darken-2" style="height: 35px">
            <v-icon icon="dashboard" size="large"></v-icon>
            <v-col>Dashboard</v-col>
          </v-row>
          <v-row class="align-center text-grey-darken-2" style="height: 35px;">
            <v-icon icon="task" size="large"></v-icon>
            <v-col>Tasks</v-col>
          </v-row>
          <v-row class="align-center text-grey-darken-2" style="height: 35px">
            <v-icon icon="groups" size="large"></v-icon>
            <v-col>Teams</v-col>
          </v-row>
          <v-row class="align-center text-grey-darken-2" style="height: 35px">
            <v-icon icon="message" size="large"></v-icon>
            <v-col>Messages</v-col>
          </v-row>
          <v-row class="align-center text-grey-darken-2">
            <v-icon icon="calendar_month" size="large"></v-icon>
            <v-col>Calendar</v-col>
          </v-row>
          <v-row class="w-100% me-4 pt-5" style="border-bottom: 1px solid #BDBDBD"></v-row>
          <v-spacer style="height: 300px"></v-spacer>
          <v-row class="align-center text-grey-darken-2">
            <v-icon icon="logout" size="large"></v-icon>
            <v-col>Log out</v-col>
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
            <v-row class="w-100% mx-0 my-3" style="border-bottom: 1px solid #E0E0E0"></v-row>
            <v-row class="justify-space-between v-row-auto">
              <v-col class="rounded-lg ms-3"
                     style="background-color: #e5e9ec">
                <v-col class="font-weight-bold text-h6">To Do</v-col>
                <v-card class="rounded-lg mb-3"
                        style="background-color: #f9fafb;">
                  <v-card-item>
                    <div>
                      <div class="text-h6 mb-1">
                        Название задачи
                      </div>
                      <div class="text-caption overflow-auto">Текст задачи</div>
                    </div>
                    <v-row class=" w-100% py-4 ps-4 align-center">
                      <v-chip size="small">Tag</v-chip>
                      <v-spacer></v-spacer>
                      <v-row class="align-center">
                        <v-spacer></v-spacer>
                        <v-icon icon="schedule" color=teal-darken-2 size="small"></v-icon>
                        <v-col class="text-caption">12 days left</v-col>
                      </v-row>
                    </v-row>
                  </v-card-item>
                  <v-card-actions class="justify-end">
                    <v-btn icon="edit" height="20px" width="20px" class="text-grey-darken-1"></v-btn>
                    <v-btn icon="delete" height="20px" width="20px" class="text-grey-darken-1"></v-btn>
                  </v-card-actions>
                </v-card>
                <v-btn color="#f9fafb" class="w-100">Add task</v-btn>
              </v-col>
              <v-col class="rounded-lg mx-3 "
                     style="background-color: #e5e9ec">
                <v-col class="font-weight-bold text-h6">In Progress</v-col>
              </v-col>
              <v-col class="rounded-lg me-3"
                     style="background-color: #e5e9ec">
                <v-col class="font-weight-bold text-h6">In Review</v-col>
              </v-col>
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
  </v-col>
</template>

<script>
export default {
  data: () => ({
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters',
    ],
  }),
}
</script>
