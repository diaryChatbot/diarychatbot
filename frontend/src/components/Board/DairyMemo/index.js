import * as Styled from './style';
import Sticker from '../../@shared/Sticker';
import Memo from '../../@shared/Memo';
import { useEffect, useState } from 'react';
import { getUserToken } from '../../../util/auth';
import axios from 'axios';

const DairyMemo = (formData,) => {
    const date = new Date();
    const dayOfWeek = date.getDay();
    const dateForm = date.toISOString().split('T')[0].split('-');
    const [formData, setFormData] = useState({ title: '', ask: '', id: '', stickerColor: '' });
    const daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const dayOfWeekString = daysOfWeek[dayOfWeek];
    const [diaries, setDiaries] = useState([]);
    const currentURL = window.location.href;
    const id = currentURL.split('/').pop();
    const isBoardURL = currentURL.endsWith('/Board/1');
    const [selectedSticker, setSelectedSticker] = useState(null);
    const stickers = [
        { stickerColor: '#F3AC7F' },
        { stickerColor: '#A5A2AA' },
        { stickerColor: '#dfb1a3' },
    ];

    const handleStickerClick = (index) => {
        setSelectedSticker(index);
        setFormData((prevFormData) => ({
            ...prevFormData,
            stickerColor: stickers[index].stickerColor,
        }));
        console.log(formData);
    };

    useEffect(() => {
        //수정 시에 들어갈 수 있음
        const fetchDiaries = async () => {
            try {
                const token = getUserToken();
                const response = await axios.post(
                    'https://jintakim.shop/graphql',
                    {
                        query: `query {
                        fetchMyDiary {
                            id
                            ask
                            sticker_color
                            answer
                            title
                            score
                            user {
                                id
                                email
                                name
                            }
                            createdAt
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
                const diaries = response.data.data.fetchMyDiary;
                setDiaries(diaries);
                console.log(diaries, 'alalal');
                const specificDiary = diaries.find((diary) => diary.id === id);
                setFormData(specificDiary); // 현재 페이지의 url에 잇는 정보의 다이어리를 가져오기
                console.log(specificDiary, 'aaaaa');
            } catch (error) {
                console.error(error);
            }
        };
        if (!isBoardURL) {
            //현재 url이 달라 /Board와
            fetchDiaries();
        }
    }, []);

    const createDiarys = async () => {
        const token = getUserToken();
        const response = await axios.post(
            'https://jintakim.shop/graphql',
            {
                query: `mutation{
          createDiary(createChatInput:{
            title: "${formData.title}",
            ask: "${formData.ask}",
            stickerColor: "${formData.stickerColor}"
          }){
            id
            title
            ask
            answer
            score
            sticker_color
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
    };

    const updateMyDiary = async () => {
        const token = getUserToken();
        const response = await axios.post(
            'https://jintakim.shop/graphql',
            {
                query: `mutation{
          updateMyDiary(
            id:{"${formData.id}"}
            createChatInput:{
            title: "${formData.title}",
            ask: "${formData.ask}",
            stickerColor: "${formData.stickerColor}"
          }){
            id
            title
            ask
            answer
            score
            sticker_color
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
    };
    const Diarys = () => {
        if (isBoardURL) {
            createDiarys();
        } else {
            updateMyDiary();
        }
    };
    const handleInput = (event) => {
        //NOTE 쓴 글
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    return (
        <Memo>
            <Styled.Date>{`${dateForm[1]}월 ${dateForm[2]}일 ${dayOfWeekString}`}</Styled.Date>
            <Styled.TitleBg>
                <Styled.Tilte>제목</Styled.Tilte>
                <Styled.TitleCont>
                    <input name="title" value={formData.title} onChange={handleInput} />
                </Styled.TitleCont>
            </Styled.TitleBg>
            <Styled.Cont>
                <input name="ask" value={formData.ask} onChange={handleInput} />
            </Styled.Cont>
            <Styled.Palette>
                {stickers.map((sticker, index) => (
                    <Sticker
                        key={index}
                        stickerColor={sticker.stickerColor}
                        isSelected={selectedSticker === index}
                        onClick={() => handleStickerClick(index)}
                    />
                ))}
            </Styled.Palette>
            <button onClick={Diarys}>제출</button>
        </Memo>
    );
};
export default DairyMemo;
