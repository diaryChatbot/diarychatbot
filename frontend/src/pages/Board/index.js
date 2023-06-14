import React from 'react';
import BoardBody from '../../components/Board/BoardBody';
import * as Styled from './style';

const Board = () => {
    return (
        <Styled.BoardBg>
            <BoardBody />
        </Styled.BoardBg>
    );
};

export default Board;
