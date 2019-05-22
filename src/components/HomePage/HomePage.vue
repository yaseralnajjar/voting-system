<template>
<v-content id="home-page">


  <v-layout wrap row justify-center fill-height>
    <v-flex  class="header">
       <img src="../../assets/homepage/splash.png" alt="voting box">
    </v-flex>
    <v-flex class="vote-box">
      <div class="vote-box__deadline">
          <h1 class="logo">E-voting</h1>
        <div>
          <h2>Time Left</h2>
          <flip-countdown deadline="2019-6-1 00:00:00"></flip-countdown>
        </div>
      </div>
      <v-btn color="teal" to="/login" style="width: 50%;" dark depressed large>Vote Now</v-btn>

    </v-flex>
  </v-layout>



  <!-- <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      absolute
      color="transparent"
    >
      <v-btn
        color="teal"
        flat
        value="recent"
        to="/"
      >
        <span>Vote</span>
        <v-icon>how_to_vote</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="favorites"
      >
        <span>Results</span>
        <v-icon>bar_chart</v-icon>
      </v-btn>

    </v-bottom-nav> -->

</v-content>
</template>

<script src="./HomePage.js"></script>

<style src="./HomePage.scss" lang="scss" ></style>
