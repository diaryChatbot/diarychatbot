import * as Styled from './style';
import Sticker from '../../@shared/Sticker';
import Memo from '../../@shared/Memo';
import { useEffect, useState } from 'react';

const DairyMemo = ({ formData, setFormData }) => {
    const date = new Date(); // 오늘 날짜
    const dayOfWeek = date.getUTCDay();
    const dateForm = date.toISOString('ko-KR').split('T')[0].split('-');
    const daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']; //요일 넣으려면 api필요
    const dayOfWeekString = daysOfWeek[dayOfWeek];

    const updatedate = new Date(formData.updatedAt); // 오늘 날짜
    const updatedayOfWeek = updatedate.getUTCDay();
    const updatedaysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']; //요일 넣으려면 api필요
    const updatedayOfWeekString = updatedaysOfWeek[updatedayOfWeek];

    const [selectedSticker, setSelectedSticker] = useState(formData.color);
    const datetime = formData.updatedAt;
    const [yearMonthDay, time] = datetime.split('T');
    const [year, month, day] = yearMonthDay.split('-');
    const stickers = [{ color: '#dfb1a3' }, { color: '#A5A2AA' }, { color: '#F3AC7F' }];
    useEffect(() => {
        const colorIndex = stickers.findIndex((sticker) => sticker.color === formData.color);
        setSelectedSticker(colorIndex);
    }, [formData.color]);

    const handleStickerClick = (index) => {
        const color = stickers[index].color;
        setSelectedSticker(index);
        setFormData((prevFormData) => ({
            ...prevFormData,
            color: color,
        }));
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
            <Styled.Date>
                {formData.createdAt && formData.updatedAt
                    ? `${month}월 ${day}일 ${updatedayOfWeekString}`
                    : `${dateForm[1]}월 ${dateForm[2]}일 ${dayOfWeekString}`}
            </Styled.Date>
            <Styled.TitleBg>
                <Styled.Tilte>제목</Styled.Tilte>
                <Styled.TitleCont
                    name="title"
                    placeholder="오늘 하루의 일기의 제목을 입력해주세요"
                    value={formData.title}
                    onChange={handleInput}
                />
            </Styled.TitleBg>
            <Styled.Cont
                name="ask"
                placeholder="오늘 하루의 일기의 내용을 입력해주세요"
                value={formData.ask}
                onChange={handleInput}
            />

            <Styled.Palette>
                {stickers.map((sticker, index) => (
                    <Sticker
                        key={index}
                        color={sticker.color}
                        isSelected={sticker.color === formData.color}
                        onClick={() => handleStickerClick(index)}
                    />
                ))}
            </Styled.Palette>
        </Memo>
    );
};

export default DairyMemo;
