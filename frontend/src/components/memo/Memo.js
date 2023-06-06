import styled from 'styled-components';

const MemoBg = styled.div`
    width: 500px;
    height: 500px;
    margin: 20px;
    background-color: white;
`;

const Memo = ({ children }) => {
    return <MemoBg>{children}</MemoBg>;
};

export default Memo;
