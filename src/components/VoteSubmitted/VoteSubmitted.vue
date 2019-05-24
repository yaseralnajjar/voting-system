<template>
<v-content id="candidates-page">

  <v-container fill-height>

  <v-layout row align-center wrap>
    <v-flex xs12 class="mt-5">
      <div class="check-icon">
        <v-icon>check</v-icon>
      </div>
      <div>
        <h2>Hi {{user.firstName}} !</h2>
        <p style="font-size: 18px;" class="mx-4 my-3">Your vote has been counted. you can't vote twice.</p>
      </div>
    </v-flex>
    <v-flex>
      <v-btn @click="logout"  color="teal" dark depressed style="width: 90%">
          Go back
        </v-btn>
    </v-flex>
  </v-layout>
  </v-container>
</v-content>
</template>

<script src="./VoteSubmitted.js"></script>

<style src="./VoteSubmitted.scss" scoped lang="scss"></style>
