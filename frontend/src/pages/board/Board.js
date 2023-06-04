import { Button } from '../../components/button';

const Board = () => {
    return (
        <>
            <div>
                <Button primary>Primary Button</Button>
                <Button>Secondary Button</Button>
                <Button primary small>
                    Primary Button
                </Button>
                <Button small>Secondary Button</Button>
                <Button google>google로 로그인</Button>
                <Button naver>네이버로 로그인</Button>
                <Button kakao>카카오계정으로 로그인</Button>
            </div>
        </>
    );
};
export default Board;
