import { useMutation } from '@tanstack/react-query';
import { createtDiary } from '../../api/auth';
import { toast } from 'react-hot-toast';

export const useCreateDiary = (setIsLoading, reset) => {
    return useMutation(createtDiary, {
        onSuccess: () => {
            reset();
            toast.success('글작성에 성공했습니다.');
        },
        onError: () => {
            toast.error('글작성에 실패했습니다.');
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });
};
