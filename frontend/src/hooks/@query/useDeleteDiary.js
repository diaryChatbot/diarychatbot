import { useMutation } from '@tanstack/react-query';
import { deleteMyDiary } from '../../api/auth';
import { toast } from 'react-hot-toast';

export const useDeleteDiary = (setIsLoading, navigate) => {
    return useMutation(deleteMyDiary, {
        onSuccess: (data) => {
            toast.success('일기가 삭제 되었습니다.');
            navigate(`/main/:userid`, { replace: true });
            console.log(data);
        },
        onError: (error) => {
            toast.error('일기 삭제에 실패했습니다.');
            console.log(error);
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });
};
