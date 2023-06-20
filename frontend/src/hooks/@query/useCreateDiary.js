import { useMutation } from '@tanstack/react-query';
import { createDiary } from '../../api/auth';
import { toast } from 'react-hot-toast';

export const useCreateDiary = (setIsLoading, setData) => {
    return useMutation(createDiary, {
        onSuccess: (data) => {
            toast.success('일기작성에 성공했습니다.');
            console.log(data);
            console.log(data.data.data.createDiary);
        },
        onError: (error) => {
            toast.error('일기작성에 실패했습니다.');
            console.log(error);
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });
};
