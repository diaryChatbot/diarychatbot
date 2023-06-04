import styled from 'styled-components';

const NameLine = styled.div``;

const NameCont = styled.p`
    text-align: center;
    padding: 10px;
    color: #460f0f;
    border-bottom: 1px double #f5ae6d;
    border-top: 1px double #f5ae6d;
    border-width: 5px;
    font-size: 40px;
`;

export const Name = ({ children }) => {
    return (
        <NameLine>
            <NameCont>{children}</NameCont>
        </NameLine>
    );
};
