import styled from 'styled-components';
import Memo from '../../../components/memo/Memo';

const Date = styled.div`
    height: 40px;
    border-bottom: 1px solid #b0b0b0;
`;

const Daily = () => {
    return (
        <Memo>
            <div>월 일 요일</div>
            <div>제목</div>
            <div>내용</div>
            <ul>
                <li>색</li>
                <li>색</li>
                <li>색</li>
            </ul>
        </Memo>
    );
};

export default Daily;
