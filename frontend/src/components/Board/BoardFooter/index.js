import React from 'react';
import * as Styled from './style';
import Button from '../../@shared/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const BoardFooter = ({ createClick, deleteClick, updateClick, formData }) => {
    const [isAvailable, setIsAvailable] = useState(false);

    useEffect(() => {
        setIsAvailable(formData.title && formData.ask && formData.color);
    }, [formData.title, formData.ask, formData.color]);

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
                <Button small primary onClick={createClick} disabled={!isAvailable}>
                    제출하기
                </Button>
            )}
            {!isBoardURL && (
                <Button small primary onClick={deleteClick}>
                    삭제하기
                </Button>
            )}
            <Link to="/main/:userId">
                <Button type="button" small>
                    돌아가기
                </Button>
            </Link>
        </Styled.ButtonWrapper>
    );
};

export default BoardFooter;
