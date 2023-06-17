import { instance } from '.';

export const getDiary = async () => {
    const response = await instance.post('', {
        query: `query{fetchMyDiary{
            id
            title
            ask
            sticker_color
            answer
            score
            user {
                id
                email
                name
            }
            createdAt
            updatedAt
        }}`,
    });
    return response;
};

export const createtDiary = async (formData) => {
    const response = await instance.post('', {
        query: `mutation{
          createDiary(createChatInput:{
            title: "${formData.title}",
            ask: "${formData.ask}",
            stickerColor: "${formData.stickerColor}"
          }){
            id
            title
            ask
            answer
            score
            sticker_color
            user{
                id
            }
            updatedAt
          }
        }`,
    });
    return response;
};

export const updateMyDiary = async (formData) => {
    const response = await instance.post('', {
        query: `mutation{
          updateMyDiary(
            id:{"${formData.id}"}
            createChatInput:{
            title: "${formData.title}",
            ask: "${formData.ask}",
            stickerColor: "${formData.stickerColor}"
          }){
            id
            title
            ask
            answer
            score
            sticker_color
            user{
                id
            }
            updatedAt
          }
        }`,
    });
    return response;
};
