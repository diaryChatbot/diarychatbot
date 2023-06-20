import { useEffect, useState } from 'react';
import AiMemo from '../AiMemo';
import BoardFooter from '../BoardFooter';
import DairyMemo from '../DairyMemo';
import * as Styled from './style';

const BoardBody = ({ fetchMyDiary }) => {
    const [diaries, setDiaries] = useState([]);
    const currentURL = window.location.href;
    const isBoardURL = currentURL.endsWith('/Board/1');
    const id = currentURL.split('/').pop();
    const [formData, setFormData] = useState({
        id: '',
        answer: '',
        title: '',
        ask: '',
        color: '',
        createAt: '',
        updatedAt: '',
    });

    useEffect(() => {
        console.log(fetchMyDiary);
        if (!isBoardURL) {
            setDiaries(fetchMyDiary);
        }
    }, [fetchMyDiary, isBoardURL]);

    useEffect(() => {
        if (diaries.length > 0) {
            const foundDiary = diaries.find((diary) => diary.id === id);
            setFormData(foundDiary);
        }
    }, [diaries, id]);

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
            <BoardFooter formData={formData} isBoardURL={isBoardURL} />
        </>
    );
};

export default BoardBody;
