<template>
<v-content id="candidates-page">

  <v-toolbar color="white" flat>
    <!-- <v-btn icon light>
      <v-icon @click="$router.go(-1)">arrow_back</v-icon>
    </v-btn> -->
    <v-toolbar-title>{{toolbarTitle}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon light @click="logout">
      <v-icon>logout</v-icon>
    </v-btn>
  </v-toolbar>

  <v-layout v-if="showCandidate && checkVote" wrap row>
    <h2 class="text-xs-center px-3 py-4 gray--text">Please select a candidate:</h2>
    <v-flex v-for="candidate in candidates" :key="candidate.id" class="candidate" xs12>
      <v-card color="white" class="gray--text pt-3 pb-2" @click="confirmCandidate(candidate.id)">
        <v-layout row>
          <v-flex xs4 class="candidates-card__img">
            <img :src="candidate.photo">
          </v-flex>
            <v-flex xs8>
              <v-card-title primary-title class="pt-3">
                <div class="text-xs-left">
                  <div class="headline">{{candidate.name}}</div>
                  <div>{{candidate.party}}</div>
                </div>
              </v-card-title>
            </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
  <v-layout v-if="showSuccessMsg || !checkVote" wrap row>
    <v-flex class="candidate chosen-candidate" xs12>
      <v-card color="white" class="gray--text pt-3 pb-2">
        <v-layout row>
          <v-flex xs4 class="candidates-card__img chosen-candidate__img">
            <img :src="chosenCandidate.photo">
          </v-flex>
            <v-flex xs8>
              <v-card-title primary-title class="pt-3">
                <div class="text-xs-left">
                  <div class="headline">{{chosenCandidate.name}}</div>
                  <div>{{chosenCandidate.party}}</div>
                </div>
              </v-card-title>
            </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
    <v-flex xs12 class="mt-4">
      <div class="check-icon">
        <v-icon>how_to_vote</v-icon>
      </div>
      <div>
        <h2>Thank you!</h2>
        <p class="mx-4 my-2" style="font-size: 18px;">Your vote has been counted!</p>
      </div>
    </v-flex>
    <v-flex xs12 class="mt-3">
      <v-btn color="teal" depressed dark @click="goToResults">Go to results</v-btn>
    </v-flex>
  </v-layout>
  <v-bottom-sheet class="confirm-vote" v-model="confirmDialog">
    <v-list>
      <v-subheader class="mt-2 mb-3 text-xs-left">
        <h3>Are you sure you want to continue with:</h3>
      </v-subheader>
      <div>
        <img class="confirm-vote__img my-2" :src="chosenCandidate.photo">
        <h1>{{chosenCandidate.name}}</h1>
        <p>{{chosenCandidate.party}}</p>
      </div>
      <div>
        <v-btn class="confirm-vote__btn mt-4" color="teal" :loading="loading" dark depressed @click="submitVote"> Confirm</v-btn>
      </div>
      <div>
        <v-btn class="confirm-vote__btn mb-3 mt-2" color="grey lighten-2" @click="confirmDialog = false" depressed>Back</v-btn>
      </div>
    </v-list>
  </v-bottom-sheet>

</v-content>
</template>

<script src="./Candidates.js"></script>

<style src="./Candidates.scss" scoped lang="scss"></style>
