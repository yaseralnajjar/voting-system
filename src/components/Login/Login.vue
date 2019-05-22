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
        <h2>Registry Look-Up</h2>
      </v-flex>

      <v-flex class="pa-3" xs12>
        <v-select :items="items" label="Login with" color="teal"></v-select>
      </v-flex>

      <v-flex xs12 class="btn-flexbox">
        <v-btn color="teal" @click="loginVerification" dark depressed large>Continue</v-btn>
      </v-flex>

    </v-layout>
  </v-container>

  <v-dialog v-model="loadingDialog" hide-overlay persistent width="300">
    <v-card color="teal" dark>
      <v-card-text>
        Please stand by
        <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>

  <v-dialog v-model="bankIdDialog" fullscreen hide-overlay transition="dialog-bottom-transition" scrollable>
    <v-card tile>
      <v-toolbar card style="border-bottom: 0px;" color="white">
        <v-btn icon @click="bankIdDialog = false">
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-container fill-height class="login-container">

        <v-layout row align-center wrap>
          <v-flex class="pa-3" xs12>
            <img src="../../assets/login/bankid.png" class="bankid-logo" alt="BankID">
          </v-flex>

            <v-flex class="pa-3" xs12>
              <v-text-field :counter="13" label="Enter your 13-digit ID Number" required></v-text-field>
              <v-text-field type="password" label="Password" required></v-text-field>
            </v-flex>

            <v-flex xs12 class="btn-flexbox">
              <v-btn color="teal" to="/elections" dark depressed large>
                Login
              </v-btn>
            </v-flex>

        </v-layout>
      </v-container>

    </v-card>
  </v-dialog>

</v-content>
</template>

<script src="./Login.js"></script>

<style src="./Login.scss" scoped lang="scss"></style>
