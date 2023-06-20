import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateDiary } from '../../../hooks/@query/useCreateDiary';
import { useUpdateDiary } from '../../../hooks/@query/useUpdateDiary';
import { getUserToken } from '../../../util/auth';
import AiMemo from '../AiMemo';
import BoardFooter from '../BoardFooter';
import DairyMemo from '../DairyMemo';
import * as Styled from './style';

const BoardBody = ({ fetchMyDiary }) => {
    const token = getUserToken();
    const [isLoading, setIsLoading] = useState(false);
    const currentURL = window.location.href;
    const isBoardURL = currentURL.endsWith('/Board/1');
    const id = currentURL.split('/').pop();
    const [formData, setFormData] = useState({
        answer: '',
        createAt: '',
        title: '',
        color: '',
        updateMyDiary: '',
        ask: '',
        id: '',
        updatedAt: '',
    });
    const [diaries, setDiaries] = useState([]);

    useEffect(() => {
        if (!isBoardURL) {
            setDiaries(fetchMyDiary);
        }
    }, [fetchMyDiary, isBoardURL]);

    useEffect(() => {
        if (diaries.length > 0) {
            const foundDiary = diaries.find((diary) => diary.id === id);
            if (foundDiary) {
                setFormData(foundDiary);
                console.log(foundDiary, '현재 페이지의 url에 있는 정보의 다이어리를 가져오기');
            }
        }
    }, [diaries, id]);
    const { mutate: createDiary } = useCreateDiary(setIsLoading);
    const CreateDiary = (formData) => {
        setIsLoading(true);
        createDiary(formData);
    };

    const { mutate: updateMyDiary } = useUpdateDiary(setIsLoading);
    const UpdateMyDiary = (formData) => {
        setIsLoading(true);
        updateMyDiary(formData);
    };

    const deleteMyDiary = async () => {
        try {
            const response = await axios.post(
                'https://jintakim.shop/graphql',
                {
                    query: `
            mutation {
              deleteMyDiary(
                id: "${formData.id}"
              )
            }
          `,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            console.log(response);
            // navigate(`/main/:userid`);
            // toast.success('일기가 삭제 되었습니다.');
        } catch (error) {
            console.error(error);
            // toast.error('일기 삭제에 실패했습니다.');
        }
    };

    const getBackgroundColor = (score) => {
        if (score > 70) {
            return '#FFAB99';
        } else if (score <= 70 && score >= 30) {
            return '#FFE0C2';
        } else if (score < 30) {
            return '#ACACAC';
        }
    };

    return (
        <>
            <Styled.GlobalStyle backgroundColor={getBackgroundColor(formData.score)} />
            <Styled.BoardBodyBg>
                <DairyMemo
                    formData={formData}
                    setFormData={setFormData}
                    fetchMyDiary={fetchMyDiary}
                />
                <AiMemo formData={formData} setFormData={setFormData} />
            </Styled.BoardBodyBg>
            <BoardFooter
                createClick={() =>
                    CreateDiary({
                        id: formData.id,
                        title: formData.title,
                        ask: formData.ask,
                        color: formData.color,
                    })
                }
                deleteClick={deleteMyDiary}
                updateClick={() =>
                    UpdateMyDiary({
                        id: formData.id,
                        title: formData.title,
                        ask: formData.ask,
                        color: formData.color,
                    })
                }
                formData={formData}
            />
        </>
    );
};

export default BoardBody;
