import { useMutation } from '@tanstack/react-query';
import { SignUpReq } from '../../api/auth/authType';
import authAPI from '../../api/auth/authAPI';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

function useSignUp() {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async (req: SignUpReq) => {
      await authAPI.signUp(req);
    },
    onSuccess: () => {
      navigate('/auth/login');
    },
  });

  const signup = useCallback(async (req: SignUpReq) => {
    try {
      await mutation.mutateAsync(req);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return { signup, ...mutation };
}

export default useSignUp;
