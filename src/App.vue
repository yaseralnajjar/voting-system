<template>
<div id="app">
  <v-app>
    <router-view />
  </v-app>
</div>
</template>

<style lang="scss">
html{
  background: #fafafa;
}
body{
  max-width: 600px;
  margin: 0 auto;
}
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
