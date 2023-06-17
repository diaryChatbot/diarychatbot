import React from 'react';
import * as Styled from './style';
import Button from '../../@shared/Button';
import { Link } from 'react-router-dom';

const BoardFooter = ({ createClick, deleteClick, updateClick }) => {
    const currentURL = window.location.href;
    const isBoardURL = currentURL.endsWith('/Board/1');
    return (
        <Styled.ButtonWrapper>
            {!isBoardURL && (
                <Button small primary onClick={updateClick}>
                    수정하기
                </Button>
            )}
            {isBoardURL && (
                <Button small primary onClick={createClick}>
                    제출하기
                </Button>
            )}
            {!isBoardURL && (
                <Button small primary onClick={deleteClick}>
                    삭제하기
                </Button>
            )}
            <Button type="button" small>
                <Link to="/main/:userId">돌아가기</Link>
            </Button>
        </Styled.ButtonWrapper>
    );
};

export default BoardFooter;
