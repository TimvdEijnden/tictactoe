<template>
  <div id="app">
    <TicTacToe />
  </div>
</template>

<script>
import TicTacToe from './components/TicTacToe.vue'

export default {
  name: 'App',
  components: {
    TicTacToe
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

ul {
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  list-style: none;
  padding: 0;
  margin: 0;
  height: 70vh;
}


li {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px red solid;
  padding: 0;
  margin: 0;
  font-size: 80px;
}

li.win {
  background-color: limegreen;
}
</style>
