<template>
<v-content id="results-page">

  <v-layout wrap row class="mb-5">
    <v-flex class="ma-4" xs12>
      <h1>Live Results</h1>
    </v-flex>
    <template v-if="noVotes">
      <v-flex v-for="candidate in candidates" :key="candidate.id" class="candidate" xs12>
        <v-card color="white" class="gray--text pt-3 pb-2" @click="confirmCandidate(candidate.id)">
          <v-layout row wrap>
            <v-flex xs4 class="candidates-card__img">
              <img :src="candidate.photo">
          </v-flex>
              <v-flex xs8>
                <v-card-title primary-title class="pt-3">
                  <div class="text-xs-left" style="width: 95%">
                    <div class="headline">{{candidate.name}}</div>
                    <div>{{candidate.party}}</div>
                  </div>
                </v-card-title>
              </v-flex>
              <v-flex class="mx-3 mb-3" xs12>
                <div class="voteRate">
                  <span>{{voteCount(candidate.id)}} votes</span>
                  <v-progress-linear color="teal" :value="votePrograss(candidate.id)"></v-progress-linear>
                </div>
              </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </template>
    <template v-else>
      <v-flex xs12>
        <h2 class="grey--text text--lighten-1 mt-5">No result to show</h2>
      </v-flex>
    </template>
  </v-layout>

  <v-bottom-nav :active.sync="bottomNav" fixed color="white" :value="true" >
    <v-btn color="teal" flat value="recent" to="/">
      <span>Vote</span>
      <v-icon>how_to_vote</v-icon>
    </v-btn>

    <v-btn color="teal" flat value="favorites" to="/results">
      <span>Results</span>
      <v-icon>bar_chart</v-icon>
    </v-btn>

  </v-bottom-nav>

</v-content>
</template>

<script src="./Results.js"></script>

<style src="./Results.scss" lang="scss" ></style>
