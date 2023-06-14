import React from 'react';
import * as Styled from './style';
import Button from '../../@shared/Button';

const BoardFooter = () => {
    return (
        <Styled.ButtonWrapper>
            <Button small primary>
                제출하기
            </Button>
            <Button type="button" small>
                돌아가기
            </Button>
        </Styled.ButtonWrapper>
    );
};

export default BoardFooter;
