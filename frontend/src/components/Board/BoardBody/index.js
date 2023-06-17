import * as Styled from './style';
import BoardFooter from '../BoardFooter';
import DairyMemo from '../DairyMemo';
import AiMemo from '../AiMemo';
const BoardBody = ({ fetchMyDiary }) => {
    const currentURL = window.location.href;
    const isBoardURL = currentURL.endsWith('/Board/1');

    const Diarys = () => {
        if (isBoardURL) {
            createDiarys();
        } else {
            updateMyDiary();
        }
    };
    return (
        <>
            <Styled.BoardBodyBg>
                <DairyMemo fetchMyDiary={fetchMyDiary} />
                <AiMemo />
            </Styled.BoardBodyBg>
            <BoardFooter onClick={Diarys} />
        </>
    );
};

export default BoardBody;
