import React, { useState } from 'react';
import Board from './Board';

const INITIAL_PLAYS = Array(9).fill();

export default function TicTacToe() {

    const [player, setPlayer] = useState('X');
    const [winner, setWinner] = useState();
    const [plays, setPlays] = useState(INITIAL_PLAYS);
    const [winningCombo, setWinningCombo] = useState([]);

    function changePlayer() {
        setPlayer(player === 'X' ? 'O' : 'X');
    }

    function handleRestartClick(){
        setWinner(undefined);
        setPlays(INITIAL_PLAYS);
        setWinningCombo([]);
        changePlayer();
    }

    return (
        <>
        <h1>Player: {player}{winner !== undefined && ' - Winner: '+winner }</h1>
        <button onClick={handleRestartClick} disabled={winner === undefined}>Restart</button>
        <Board onChangePlayer={changePlayer} player={player} setWinner={setWinner} plays={plays} setPlays={setPlays} winningCombo={winningCombo} setWinningCombo={setWinningCombo}/>
        </>
    )
}