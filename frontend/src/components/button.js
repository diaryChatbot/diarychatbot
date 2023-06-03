import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${(props) => (props.primary ? '#f50057' : 'white')};
    color: ${(props) => (props.primary ? 'white' : '#f50057')};
    font-size: 16px;
    padding: 8px 16px;
    border-radius: 4px;
`;
