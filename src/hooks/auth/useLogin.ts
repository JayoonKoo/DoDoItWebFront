import { useMutation } from '@tanstack/react-query';
import { LoginReq } from '../../api/auth/authType';
import authAPI from '../../api/auth/authAPI';
import { useCallback } from 'react';

function useLogin() {
  const mutation = useMutation({
    mutationFn: async (req: LoginReq) => {
      await authAPI.login(req);
    },
  });

  const login = useCallback(
    async (req: LoginReq) => {
      try {
        await mutation.mutateAsync(req);
      } catch (e) {
        console.error(e);
      }
    },
    [mutation]
  );

  return { login, ...mutation };
}

export default useLogin;
