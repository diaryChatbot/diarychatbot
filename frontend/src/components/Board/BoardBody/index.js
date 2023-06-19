import * as Styled from './style';
import BoardFooter from '../BoardFooter';
import DairyMemo from '../DairyMemo';
import AiMemo from '../AiMemo';
import { useEffect, useState } from 'react';
import { getUserToken } from '../../../util/auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const BoardBody = ({ fetchMyDiary }) => {
    const token = getUserToken();

    const navigate = useNavigate();
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
        // 수정 시에 들어갈 수 있음
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

    const createDiarys = async () => {
        const response = await axios.post(
            'https://jintakim.shop/graphql',
            {
                query: `mutation{
          createDiary(createChatInput:{
            title: "${formData.title}",
            ask: "${formData.ask}",
            color: ${formData.color}
          }){
            id
            title
            ask
            answer
            score
            color
            user{
                id
            }
            updatedAt
          }
        }`,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        setFormData(response.data.data.createDiary);
        console.log(response.data.data.createDiary);
        toast.success('일기가 저장 되었습니다.');
    };

    const updateMyDiary = async () => {
        const response = await axios.post(
            'https://jintakim.shop/graphql',
            {
                query: `mutation{
          updateMyDiary(
            id:"${formData.id}",
            updateChatInput:{
            title: "${formData.title}",
            ask: "${formData.ask}",
            color: ${formData.color}
          }){
            id
            title
            ask
            answer
            score
            color
            user{
                id
            }
            updatedAt
          }
        }`,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        setFormData(response.data.data.updateMyDiary);
        console.log(formData, '폼수정');
        toast.success('일기가 수정 되었습니다.');
    };

    const deleteMyDiary = async () => {
        const response = await axios.post(
            'https://jintakim.shop/graphql',
            {
                query: `mutation{
          deleteMyDiary(
            id:"${formData.id}"
          )
        }`,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        console.log(response);
        navigate(`/main/:userid`);
        toast.success('일기가 삭제 되었습니다.');
    };
    const getBackgroundColor = (score) => {
        //배경색 변경
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
                createClick={createDiarys}
                deleteClick={deleteMyDiary}
                updateClick={updateMyDiary}
                formData={formData}
            />
        </>
    );
};

export default BoardBody;
