import React, { useEffect } from 'react';
import Cell from './Cell';
import { winningCombos } from '../constants';

export default function Board({ onChangePlayer, player, setWinner, winningCombo, setWinningCombo, plays, setPlays }) {

    function isTie(plays) {
        return !plays.includes(undefined);
    }

    function handleCellClick(e){
        const clickedIndex = e.target.dataset.index;
        const newPlays = plays.map((v, i) => {
            return i === parseInt(clickedIndex) ? player : v;
        });

        if(isTie(newPlays)) {
            setWinner('tie!')
        }

        if(!plays[clickedIndex] && !winningCombo.length) {
            setPlays(newPlays);
            if(isTie(newPlays)) {
                setWinner('tie!')
                return
            }else if(checkWinner(newPlays)) {
                setWinner(player);
                return
            }
            onChangePlayer();
        }
    }

    function checkWinner(newPlays) {
        return winningCombos.some((combo) => {
            const winningCombo = combo.every((index) => {
                return newPlays[index] === player;
            });
            if(winningCombo) {
                setWinningCombo(combo);
            }
            return winningCombo;
        });
    }

    useEffect(() => {
        console.dir(plays);
    }, [plays]);

    const cellList = Array(9).fill().map((_, index) => {
        return <Cell key={index} data-index={index} playedBy={plays[index]} winningCell={winningCombo.includes(index)} onCellClick={handleCellClick}>{index}</Cell>
    });

    return (
        <ul>
            {cellList}
        </ul>
    );
}