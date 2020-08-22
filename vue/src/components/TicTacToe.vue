<template>
  <h1>Player: {{player}}{{winner !== undefined ? ' - Winner: '+winner : ''}}</h1>
  <button
    @click=handleRestartClick
    :disabled="winner === undefined">Restart</button>
  <Board
    :onChangePlayer="changePlayer"
    :player="player"
    :setWinner="setWinner"
    :plays="plays"
    :setPlays="setPlays"
    :winningCombo="winningCombo"
    :setWinningCombo="setWinningCombo"/>
</template>

<script>
import Board from './Board';
import { ref } from 'vue'

const INITIAL_PLAYS = Array(9).fill();

export default {
  name: 'TicTacToe',
  components: {
    Board
  },
  setup() {

    const player = ref('X');
    const winner = ref();
    const plays = ref(INITIAL_PLAYS);
    const winningCombo = ref([]);

    function changePlayer() {
        player.value = player.value === 'X' ? 'O' : 'X';
    }

    function handleRestartClick(){
        winner.value = undefined;
        plays.value = INITIAL_PLAYS;
        winningCombo.value = [];
        changePlayer();
    }

    function setWinner(value) {
      winner.value = value;
    }

    function setPlays(value) {
      plays.value = value;
    }

    function setWinningCombo(value) {
      winningCombo.value = value;
    }

    return {
      changePlayer,
      handleRestartClick,
      winner,
      player,
      plays,
      winningCombo,
      setWinner,
      setPlays,
      setWinningCombo
    }
  }
}
</script>

