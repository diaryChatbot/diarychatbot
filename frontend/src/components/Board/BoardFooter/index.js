import React from 'react';
import * as Styled from './style';
import Button from '../../@shared/Button';
import { Link } from 'react-router-dom';

const BoardFooter = (onClick) => {
    return (
        <Styled.ButtonWrapper>
            <Button small primary onClick={onClick}>
                제출하기
            </Button>
            <Button type="button" small>
                <Link to="/main/:userId">돌아가기</Link>
            </Button>
        </Styled.ButtonWrapper>
    );
};

export default BoardFooter;
