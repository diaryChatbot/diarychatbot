import { instance } from '.';

export const signUp = async (formData) => {
    const response = await instance.post('', {
        query: `mutation{
            createUser(createUserInput:{
                email: "${formData.email}"
                password: "${formData.password}"
                name: "${formData.name}"
            }){
                id
                name
            }
        }`,
    });
    return response;
};

export const signIn = async (formData) => {
    const response = await instance.post('', {
        query: `mutation{
            login(email: "${formData.email}", password: "${formData.password}")
        }`,
    });
    return response;
};

export const logout = async () => {
    const response = await instance.post('', {
        query: `mutation{logout}`,
    });
    return response;
};

export const getToken = async () => {
    const response = await instance.post('', {
        query: `mutation{restoreAccessToken}`,
    });
    return response;
};
export const createtDiary = async (formData) => {
    const response = await instance.post('', {
        query: `mutation{
          createDiary(createChatInput:{
            title: "${formData.title}",
            ask: "${formData.ask}",
            color: ${formData.color}
          }){
            id
            title
            ask
            answer
            score
            color
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
            color: ${formData.color}
          }){
            id
            title
            ask
            answer
            score
            color
            user{
                id
            }
            updatedAt
          }
        }`,
    });
    return response;
};
