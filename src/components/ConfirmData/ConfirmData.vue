<template>
<v-content id="login-page">

  <v-toolbar color="white" flat>
    <v-btn icon light>
      <v-icon @click="$router.go(-1)">arrow_back</v-icon>
    </v-btn>
  </v-toolbar>

  <v-container fill-height class="login-container">

    <v-layout row align-center wrap>
      <v-flex class="pa-3" xs12>
        <h2>Confirm Your Data</h2>
      </v-flex>
    

        <v-flex class="pa-3" xs12>
          <v-text-field label="National ID" disabled v-model="user.nationalId" required></v-text-field>
          <v-text-field label="First Name"  v-model="user.firstName" required></v-text-field>
          <v-text-field label="Last Name"  v-model="user.lastName" required></v-text-field>
          <v-text-field label="Address"  v-model="user.address" required></v-text-field>
        </v-flex>

        <v-flex xs12 class="btn-flexbox">
          <v-btn color="teal" @click="submitData" :loading="loading" dark depressed large>
           Confirm
          </v-btn>
        </v-flex>

    </v-layout>
  </v-container>

</v-content>
</template>

<script src="./ConfirmData.js"></script>

<style src="./ConfirmData.scss" scoped lang="scss"></style>
