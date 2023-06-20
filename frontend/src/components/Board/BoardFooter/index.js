import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDeleteDiary } from '../../../hooks/@query/useDeleteDiary';
import { useUpdateDiary } from '../../../hooks/@query/useUpdateDiary';
import { Link } from 'react-router-dom';
import Button from '../../@shared/Button';
import * as Styled from './style';
import { toast } from 'react-hot-toast';
import { createDiary } from '../../../api/auth';

const BoardFooter = ({ formData, isBoardURL, setFormData }) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isAvailable, setIsAvailable] = useState(false);
    const { mutate: updateMyDiary } = useUpdateDiary(setIsLoading);
    const { mutate: deleteMyDiary } = useDeleteDiary(setIsLoading, navigate);

    const CreateDiary = async () => {
        try {
            const response = await createDiary(formData);
            setFormData(response.data.data.createDiary);
            toast.success('일기가 저장되었습니다.');
        } catch (error) {
            toast.error('일기 저장에 실패했습니다.');
        }
    };

    const UpdateMyDiary = () => {
        setIsLoading(true);
        updateMyDiary({
            id: formData.id,
            title: formData.title,
            ask: formData.ask,
            color: formData.color,
        });
    };

    const DeleteMyDiary = () => {
        setIsLoading(true);
        deleteMyDiary({ id: formData.id });
    };

    useEffect(() => {
        setIsAvailable(formData.title && formData.ask && formData.color);
    }, [formData.title, formData.ask, formData.color]);

    return (
        <Styled.ButtonWrapper>
            {!isBoardURL && (
                <Button small primary onClick={UpdateMyDiary}>
                    수정하기
                </Button>
            )}
            {isBoardURL && (
                <Button small primary onClick={CreateDiary} disabled={!isAvailable}>
                    제출하기
                </Button>
            )}
            {!isBoardURL && (
                <Button small primary onClick={DeleteMyDiary}>
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
