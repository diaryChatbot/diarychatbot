import * as Styled from './style';
import Sticker from '../../@shared/Sticker';
import Memo from '../../@shared/Memo';

const DairyMemo = () => {
    return (
        <Memo>
            <Styled.Date>5월 31일 화요일</Styled.Date>
            <Styled.TitleBg>
                <Styled.Tilte>제목</Styled.Tilte>
                <Styled.TitleCont>
                    오늘은 운동을 했어 집 바로 뒤에 등산 하기 좋은 산이 있었는데 몰랐었어{' '}
                </Styled.TitleCont>
            </Styled.TitleBg>
            <Styled.Cont>
                오늘은 운동을 했어 집 바로 뒤에 등산 하기 좋은 산이 있었는데 몰랐었어 앞으로는 자주
                등산을 해야겠어 운동도 중요하니까 공부도 많이는 못했지만 그래도 열심히 하고있다고
            </Styled.Cont>
            <Styled.Palette>
                <Sticker A5A2AA />
                <Sticker F3AC7F />
                <Sticker dfb1a3 />
            </Styled.Palette>
        </Memo>
    );
};
export default DairyMemo;
