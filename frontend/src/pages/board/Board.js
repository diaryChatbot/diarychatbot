import { Button } from '../../components/button/Button';
import { Header } from '../../components/header/Header';
import { Name } from '../../components/name/Name';
import Daily from './com-/Daily';

const Board = () => {
    return (
        <>
            <div>
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
                <Daily />
            </div>
        </>
    );
};
export default Board;
