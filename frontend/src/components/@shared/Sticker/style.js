import styled from 'styled-components';

export const StickerAlign = styled.div`
    width: ${(props) => (props.small ? '10rem' : '14rem')};
    height: ${(props) => (props.small ? '3.5rem' : '5rem')};
    background-color: ${({ color }) => color};
    cursor: ${(props) => (props.small ? 'default' : 'pointer')};
    box-shadow: ${(props) => props.isSelected && '0 0 0 4px #ff6b6b'};
    z-index: ${(props) => props.isSelected && '1'};

    &:hover {
        ${(props) => !props.small && 'box-shadow: 0 0 0 4px #ff6b6b'};
        z-index: 1;
    }
`;
