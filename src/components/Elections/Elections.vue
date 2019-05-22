<template>
<v-content id="elections-page">
  <v-layout wrap>

    <v-toolbar color="white" flat>
      <v-spacer></v-spacer>
      <v-btn icon light>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>

    <v-flex xs12 class="mt-4">
      <h2>Ongoing Elections</h2>
    </v-flex>

        <v-layout row wrap class="mt-4">

          <v-flex class="ma-3" xs12>
            <v-card color="white darken-2 text-xs-left" >
              <v-card-title primary-title>
                <div>
                  <div class="headline mb-2">Presidential Election</div>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sed corrupti suscipit!</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <div class="pl-2">4 Canadidites</div>
                <v-spacer></v-spacer>
                <v-btn flat color="teal">View</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          

        </v-layout>

  </v-layout>
</v-content>
</template>

<script src="./Elections.js"></script>

<style src="./Elections.scss" scoped lang="scss"></style>
