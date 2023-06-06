import styled from 'styled-components';
import Memo from '../../../components/memo/Memo';
import { Sticker } from '../../../components/sticker/Sticker';

const Date = styled.div`
    padding: 10px 30px;
    border-bottom: 1px solid #b0b0b0;
    font-size: 25px;
    font-weight: bolder;
    color: #460f0f;
`;

const TitleBg = styled.div`
    border-bottom: 1px solid #b0b0b0;
    display: flex;
    align-items: center;
`;
const Tilte = styled.div`
    padding: 10px 30px;

    width: 150px;
    font-size: 25px;
    font-weight: bolder;
    color: #460f0f;
`;
const TitleCont = styled.div`
    padding: 10px 30px;
    border-left: 1px solid #b0b0b0;
`;

const Cont = styled.div`
    padding: 10px 30px;
    height: 250px;
    border-bottom: 1px solid #b0b0b0;
`;
const Palette = styled.div`
    padding: 10px 30px;
    border-bottom: 1px solid #b0b0b0;
    justify-content: space-around;
    display: flex;
    list-style: none;
`;
const Daily = () => {
    return (
        <Memo>
            <Date>5월 31일 화요일</Date>
            <TitleBg>
                <Tilte>제목</Tilte>
                <TitleCont>오늘은 운동을 했어 집 바로 뒤에 등산 하기 좋은 산이 있었는데 몰랐었어 </TitleCont>
            </TitleBg>
            <Cont>
                오늘은 운동을 했어 집 바로 뒤에 등산 하기 좋은 산이 있었는데 몰랐었어 앞으로는 자주 등산을 해야겠어
                운동도 중요하니까 공부도 많이는 못했지만 그래도 열심히 하고있다고
            </Cont>
            <Palette>
                <Sticker A5A2AA />
                <Sticker F3AC7F />
                <Sticker dfb1a3 />
            </Palette>
        </Memo>
    );
};

export default Daily;
