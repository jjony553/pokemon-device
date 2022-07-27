<template>
  <div class="header">
    <router-link to="/">Find The Pokemon</router-link>
  </div>
  <router-view/>
</template>

<style>
.header{
  display: flex;
  justify-content: center;
  color: gold;
  text-shadow: -1px 0 red, 0 1px red, 1px 0 red, 0 -1px red;
  font-weight: 700;
  margin-top: 50px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  color: inherit;
  text-decoration: inherit;
}

</style>
