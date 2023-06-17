import React from 'react';
import * as Styled from './style';
import { Link } from 'react-router-dom';
// import { getUserToken } from '../../../util/auth';
// import axios from 'axios';

const BoardList = ({ createDate, daysOfWeek, id, title, desc, stickerColor }) => {
    // const deleteMyDiary = async () => {
    //     const token = getUserToken();
    //     const response = await axios.post(
    //         'https://jintakim.shop/graphql',
    //         {
    //             query: `mutation{
    //       deleteMyDiary(
    //         id:{"${id}"}
    //       })
    //     }`,
    //         },
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         },
    //     );
    //     // setFormData(response.data.data.createDiary);
    // };
    return (
        <Link to={`/Board/${id}`}>
            <Styled.BoardCard>
                <Styled.Sticker small stickerColor={stickerColor} />
                <Styled.BoardTitleWrapper>
                    <Styled.BoardTitlePin />
                    <Styled.BoardTitle>{title}</Styled.BoardTitle>
                </Styled.BoardTitleWrapper>
                <Styled.BoardDesc>{desc}</Styled.BoardDesc>
                <Styled.BoardDate>{`${createDate[1]}월 ${createDate[2]}일 ${daysOfWeek}`}</Styled.BoardDate>
            </Styled.BoardCard>
        </Link>
    );
};

export default BoardList;
