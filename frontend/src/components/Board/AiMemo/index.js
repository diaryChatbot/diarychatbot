import * as Styled from './style';
import Memo from '../../@shared/Memo';
import smile from './smile.png';
import happy from './happy.png';
import sad from './sad.png';

const AiMemo = ({ formData }) => {
    return (
        <Memo>
            <Styled.Cont>{formData.answer}</Styled.Cont>
            <Styled.ScoreBg>
                <Styled.Score>{formData.score}</Styled.Score>
                {formData.score > 70 && <Styled.Icon src={smile} alt="" />}
                {formData.score <= 70 && formData.score >= 30 && <Styled.Icon src={happy} alt="" />}
                {formData.score < 30 && <Styled.Icon src={sad} alt="" />}
            </Styled.ScoreBg>
        </Memo>
    );
};

export default AiMemo;
