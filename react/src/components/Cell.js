import React from 'react';

export default function Cell({ playedBy, onCellClick, winningCell, ...rest }) {
    const classNames = winningCell ? 'win' : '';
    return (
        <li {...rest} className={classNames} onClick={onCellClick}>{playedBy}</li>
    )
}