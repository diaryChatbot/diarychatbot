import * as Styled from './style';
import BoardFooter from '../BoardFooter';
import DairyMemo from '../DairyMemo';
import AiMemo from '../AiMemo';
const BoardBody = () => {
    return (
        <>
            <Styled.BoardBodyBg>
                <DairyMemo />
                <AiMemo />
            </Styled.BoardBodyBg>
            <BoardFooter />
        </>
    );
};

export default BoardBody;
