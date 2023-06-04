import styled from 'styled-components';

const HeaderBg = styled.div`
    display: flex;
    align-items: flex-end;
    padding: 20px;
    border-bottom: 1px solid #f5ae6d;
`;

const Logo = styled.div`
    color: #460f0f;
    font-size: 30px;
`;

const LogoCont = styled.span`
    color: #460f0f;
    font-size: 15px;
    vertical-align: bottom;
    padding-left: 10px;
    letter-spacing: 15px;
`;

export const Header = () => {
    return (
        <HeaderBg>
            <Logo>AI.CheerUp Daily</Logo>
            <LogoCont>오늘 하루의 일기를 적어보세요</LogoCont>
        </HeaderBg>
    );
};
