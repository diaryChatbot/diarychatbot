import * as Styled from './style';
import Memo from '../../@shared/Memo';
import smile from './smile.png';
import happy from './happy.png';
import sad from './sad.png';

const AiMemo = () => {
    return (
        <Memo>
            <Styled.Cont>
                오늘 하루는 좋은 시작이었네요! 운동은 건강에 매우 중요하니까 잘했어요. 그리고 주변에
                좋은 등산로를 발견해서 좋은 경험이었겠죠. 오늘 당신에게 점수를 매긴다면 80점 정도를
                줄 수 있을 것 같아요. 내일은 생각보다 많은 시간을 활용할 수 있을 거라고 예상되니,
                오늘 못 한 공부를 조금씩이라도 더 해보는 건 어떨까요? 또 다른 운동이나 새로운 취미를
                찾아보는 것도 좋겠네요. 계속 잘하고 있어요!
            </Styled.Cont>
            <Styled.ScoreBg>
                <Styled.Score>50점</Styled.Score>
                <Styled.Icon src={smile} alt="" />
                <Styled.Icon src={happy} alt="" />
                <Styled.Icon src={sad} alt="" />
            </Styled.ScoreBg>
        </Memo>
    );
};

export default AiMemo;
