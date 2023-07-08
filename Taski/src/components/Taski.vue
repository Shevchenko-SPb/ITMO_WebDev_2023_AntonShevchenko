<template>
  <v-col
    id="popupContainer"
    class="h-screen"
    style="padding:0; margin:0; position: absolute"
    >
    <div class="spinner"></div>
  </v-col>

  <v-col style="background-color: #e5fcf7; background-size: 100%">
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
                <div>Name Surname</div>
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
          <v-row class="font-weight-bold text-h6 pt-4">
            Labels
          </v-row>
          <v-row class="align-center text-grey-darken-2" style="height: 35px">
            <v-icon icon="label" size="default" class="text-red-lighten-1"></v-icon>
            <v-col style="white-space: nowrap">High Priority</v-col>
            <v-spacer></v-spacer>
            <v-chip size="small" class="mr-5 bg-teal-darken-3">0</v-chip>
          </v-row>
          <v-row class="align-center text-grey-darken-2" style="height: 35px">
            <v-icon icon="label" size="default" class="text-orange-lighten-1"></v-icon>
            <v-col style="white-space: nowrap">Medium Priority</v-col>
            <v-spacer></v-spacer>
            <v-chip size="small" class="mr-5 bg-teal-darken-3">0</v-chip>
          </v-row>
          <v-row class="align-center text-grey-darken-2" style="height: 35px">
            <v-icon icon="label" size="default" class="text-yellow-lighten-1"></v-icon>
            <v-col style="white-space: nowrap">Low Priority</v-col>
            <v-spacer></v-spacer>
            <v-chip size="small" class="mr-5 bg-teal-darken-3">0</v-chip>
          </v-row>
          <v-row class="align-center text-grey-darken-2" style="height: 35px">
            <v-icon icon="label" size="default" class="text-green-lighten-1"></v-icon>
            <v-col style="white-space: nowrap">On Standby</v-col>
            <v-spacer></v-spacer>
            <v-chip size="small" class="mr-5 bg-teal-darken-3">0</v-chip>
          </v-row>
          <v-row class="w-100% me-4 pt-5" style="border-bottom: 1px solid #BDBDBD"></v-row>
          <v-row class="align-center text-grey-darken-2" style="height: 50px">
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
              <v-btn color=teal-darken-3
                     id="btnCreateTask">
                     + Create task
              </v-btn>
            </v-row>
            <v-row class="text-grey-darken-1">
              <v-col class="align-center">
                <v-icon icon="filter_alt" size="small"></v-icon>
                <span class="mx-1">Filters</span>
                <v-icon icon="expand_more" size="default"></v-icon>
              </v-col>
              <v-spacer class="w-auto"></v-spacer>
              <v-col>
                <div class="float-right"><span class="ms-3">Group by: Status</span>
                  <v-icon icon="expand_more" size="default"></v-icon>
                </div>
                <div class="float-right"><span>Sort by</span>
                  <v-icon icon="expand_more" size="default"></v-icon>
                </div>

              </v-col>
            </v-row>
            <v-row class="w-100% mx-0 my-3" style="border-bottom: 1px solid #E0E0E0"></v-row>
            <v-row class="justify-space-between v-row-auto">
              <v-col class="rounded-lg ms-3"
                     data-test-id="tasks-column"
                     style="background-color: #e5e9ec">
                <v-col class="font-weight-bold text-h7">To Do <span class="text-grey-lighten-1">0</span></v-col>
                <v-row class="w-100% mx-0 mb-3" style="border-bottom: 1px solid #BDBDBD"></v-row>
                <div>
                  <div id="templateTask">
                    <v-card class="rounded-lg mb-3"

                            style="background-color: #f9fafb;">
                      <v-card-item>
                        <div>
                          <div class="text-h6 mb-1"
                               data-id="templateTaskTitle">
                            $name
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
                        <btn
                             class="text-grey-darken-1 me-2"
                        >
                          <svg data-btn="btnEdit" style="pointer-events: fill" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="currentColor" d="M13.44 2.56a1.914 1.914 0 0 0-2.707 0L3.338 9.956a1.65 1.65 0 0 0-.398.644l-.914 2.743a.5.5 0 0 0 .632.633l2.743-.915c.243-.08.463-.217.644-.398l7.395-7.394a1.914 1.914 0 0 0 0-2.707Zm-2 .708a.914.914 0 1 1 1.293 1.293L12 5.294l-1.293-1.293l.734-.733ZM10 4.708l1.292 1.293l-5.954 5.954a.648.648 0 0 1-.253.157l-1.794.598l.598-1.794a.649.649 0 0 1 .156-.254L10 4.709Z"/></svg>
                        </btn>
                        <btn
                             class="text-grey-darken-1">
                          <svg data-btn="btnDelete"  xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32"><path fill="currentColor" d="M12 12h2v12h-2zm6 0h2v12h-2z"/><path fill="currentColor" d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20zm4-26h8v2h-8z"/></svg>
                        </btn>
                      </v-card-actions>
                    </v-card>
                  </div>
                  <v-btn color="#f9fafb" id="btnAddTask" class="w-100">Add task</v-btn>
                </div>
              </v-col>
              <v-col class="rounded-lg mx-3 "
                     style="background-color: #e5e9ec">
                <v-col class="font-weight-bold text-h7">In Progress <span class="text-grey-lighten-1">0</span></v-col>
                <v-row class="w-100% mx-0 mb-3" style="border-bottom: 1px solid #BDBDBD"></v-row>
              </v-col>
              <v-col class="rounded-lg me-3"
                     style="background-color: #e5e9ec">
                <v-col class="font-weight-bold text-h7">In Review <span class="text-grey-lighten-1">0</span></v-col>
                <v-row class="w-100% mx-0 mb-3" style="border-bottom: 1px solid #BDBDBD"></v-row>
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
</script>
