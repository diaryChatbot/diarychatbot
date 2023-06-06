import { Button } from '../../components/button/Button';
import { Header } from '../../components/header/Header';
import { Name } from '../../components/name/Name';
import { Sticker } from '../../components/sticker/Sticker';
import AiComment from './com-/AiComment';
import Daily from './com-/Daily';
import styled from 'styled-components';

const BoardBg = styled.div`
    background-color: #ffe0c2;
`;
const Board = () => {
    return (
        <>
            <BoardBg>
                <Header />
                <Button primary>Primary Button</Button>
                <Button>Secondary Button</Button>
                <Button primary small>
                    Primary Button
                </Button>
                <Button small>Secondary Button</Button>
                <Name>AI.CheerUp Daily</Name>
                <Button google>google로 로그인</Button>
                <Button naver>네이버로 로그인</Button>
                <Button kakao>카카오계정으로 로그인</Button>
                <Sticker small dfb1a3 />
                <Sticker small A5A2AA />
                <Sticker small F3AC7F />
                <Daily />
                <AiComment />
            </BoardBg>
        </>
    );
};
export default Board;
