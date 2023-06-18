import styled from 'styled-components';

export const StickerAlign = styled.div`
    width: ${(props) => (props.small ? '10rem' : '14rem')};
    height: ${(props) => (props.small ? '3.5rem' : '5rem')};
    background-color: ${({ color }) => color};
    cursor: ${(props) => (props.small ? 'default' : 'pointer')};
    border: ${(props) => (!props.small && props.isSelected ? '3px solid black' : 'none')};

    &:hover {
        ${(props) => !props.small && 'border: 3px solid black'};
    }
`;
