<template>
    <li :class="{ win: winningCell}"
        @click="onCellClick">{{playedBy}}</li>
</template>

<script>
export default {
  name: 'Cell',
  props: {
      onCellClick: Function,
      playedBy: String,
      winningCell: Boolean
  }
}

</script>