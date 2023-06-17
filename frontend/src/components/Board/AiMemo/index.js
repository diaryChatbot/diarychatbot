import * as Styled from './style';
import Memo from '../../@shared/Memo';
import smile from './smile.png';
import happy from './happy.png';
import sad from './sad.png';
import { TypingEffect } from '../BoardBody/TypingEffect';

const AiMemo = ({ formData }) => {
    return (
        <Memo>
            <TypingEffect text={formData.answer} />
            <Styled.ScoreBg>
                {formData.score == null ? (
                    <span>제가 오늘의 일기를 평가해드릴게요</span>
                ) : (
                    <>
                        <Styled.Cont></Styled.Cont>
                        <Styled.Score>{formData.score}점</Styled.Score>
                        {formData.score > 70 && <Styled.Icon src={smile} alt="" />}
                        {formData.score <= 70 && formData.score >= 30 && (
                            <Styled.Icon src={happy} alt="" />
                        )}
                        {formData.score < 30 && <Styled.Icon src={sad} alt="" />}
                    </>
                )}
            </Styled.ScoreBg>
        </Memo>
    );
};

export default AiMemo;
