<template>
<v-content id="candidates-page">

  <v-toolbar color="white" flat>
    <!-- <v-btn icon light>
      <v-icon @click="$router.go(-1)">arrow_back</v-icon>
    </v-btn> -->
    <v-toolbar-title class="gray--text">Candidates</v-toolbar-title>
  </v-toolbar>

  <v-layout wrap row>
    
    <v-flex class="ma-3" xs12>
      <v-card color="white" class="gray--text">
        <v-layout row>
          <v-flex xs7>
            <v-card-title primary-title>
              <div class="text-xs-left">
                <div class="headline">John Doe</div>
                <div>Party:</div>
                <div>ABC</div>
              </div>
            </v-card-title>
          </v-flex>
          <v-flex xs5 class="candidates-card__img">
            <img src="../../assets/candidates/1.jpg">
          </v-flex>
        </v-layout>
        
      </v-card>
    </v-flex>
    

  </v-layout>

</v-content>
</template>

<script src="./Candidates.js"></script>

<style src="./Candidates.scss" scoped lang="scss"></style>
