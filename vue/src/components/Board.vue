<template>
    <ul>
        <Cell v-for="(item, index) in cellList"
            :data-index="index"
            :key="index"
            :playedBy="plays[index]"
            :winningCell="winningCombo.includes(index)"
            :onCellClick="handleCellClick" />
    </ul>
</template>

<script>
import Cell from './Cell';
import { checkWinner } from '../../../shared/gameplay.js';

export default {
  name: 'Board',
  props: {
      plays: Array,
      winningCombo: Array,
      player: String,
      onChangePlayer: Function,
      setWinner: Function,
      setPlays: Function,
      setWinningCombo: Function
  },
  components: {
      Cell
  },
  setup(props) {
    const cellList = Array(9).fill();

    function isTie(plays) {
        return !plays.includes(undefined);
    }

    function handleCellClick(e) {
        const clickedIndex = e.target.dataset.index;
        const newPlays = props.plays.map((v, i) => {
            return i === parseInt(clickedIndex) ? props.player : v;
        });

        if(isTie(newPlays)) {
            props.setWinner('tie!');
        }

        if(!props.plays[clickedIndex] && !props.winningCombo.length) {
            props.setPlays(newPlays);
            if(isTie(newPlays)) {
                props.setWinner('tie!')
                return
            }else if(checkWinner(newPlays, props.player, props.setWinningCombo)) {
                props.setWinner(props.player);
                return
            }
            props.onChangePlayer();
        }
    }

    return {
        cellList,
        handleCellClick
    }
  }
}

</script>