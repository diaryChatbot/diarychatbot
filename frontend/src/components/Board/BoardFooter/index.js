import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateDiary } from '../../../hooks/@query/useCreateDiary';
import { useDeleteDiary } from '../../../hooks/@query/useDeleteDiary';
import { useUpdateDiary } from '../../../hooks/@query/useUpdateDiary';

import Button from '../../@shared/Button';

import * as Styled from './style';
import { useLogout } from '../../../hooks/@query/useLogout';

const BoardFooter = ({
    fetchMyDiary,
    setIsLoading,
    isLoading,
    userId,
    boardId,
    foundDiaryData,
    handleSubmit,
    watch,
}) => {
    const color = watch('color');
    const title = watch('title');
    const ask = watch('ask');

    const navigate = useNavigate();
    const location = useLocation();

    const { mutate: CreateDiary } = useCreateDiary(setIsLoading, navigate);
    const { mutate: UpdateDiary } = useUpdateDiary(setIsLoading);
    const { mutate: DeleteMyDiary } = useDeleteDiary(setIsLoading, navigate, userId);
    const { mutate: Logout } = useLogout(navigate);

    const trimAndReplaceNewLines = (text) => {
        return text?.trim()?.replace(/\n/g, '\\n');
    };

    const createDiary = (formData) => {
        setIsLoading(true);
        formData.ask = trimAndReplaceNewLines(formData.ask);
        CreateDiary(formData);
    };

    const updateMyDiary = (formData) => {
        formData.id = boardId;
        formData.ask = trimAndReplaceNewLines(formData.ask);
        setIsLoading(true);
        UpdateDiary(formData);
    };

    const deleteMyDiary = () => {
        setIsLoading(true);
        DeleteMyDiary(foundDiaryData.id);
    };

    const handleNavigate = () => {
        if (location.state) return navigate(-3);

        return navigate(-1);
    };
    return (
        <Styled.ButtonWrapper>
            {boardId && (
                <Button small primary onClick={handleSubmit(updateMyDiary)} disabled={isLoading}>
                    수정하기
                </Button>
            )}
            {!boardId && (
                <Button
                    small
                    primary
                    onClick={handleSubmit(createDiary)}
                    disabled={!(color && title && ask) || isLoading}
                >
                    제출하기
                </Button>
            )}
            {boardId && (
                <Button small primary onClick={handleSubmit(deleteMyDiary)} disabled={isLoading}>
                    삭제하기
                </Button>
            )}
            {fetchMyDiary.length !== 0 ? (
                <Button type="button" small onClick={handleNavigate}>
                    돌아가기
                </Button>
            ) : (
                <Button type="button" small onClick={Logout}>
                    로그아웃
                </Button>
            )}
        </Styled.ButtonWrapper>
    );
};

export default BoardFooter;
