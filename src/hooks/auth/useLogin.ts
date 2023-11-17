import { useMutation } from '@tanstack/react-query';
import { LoginReq } from '../../api/auth/authType';
import authAPI from '../../api/auth/authAPI';
import { useCallback } from 'react';
import { User } from '../../recoil/userState';
import useUser from './useUser';

function useLogin() {
  const mutation = useMutation({
    mutationFn: async (req: LoginReq) => {
      return await authAPI.login(req);
    },
  });

  const { setUser } = useUser();

  const login = useCallback(
    async (req: LoginReq) => {
      try {
        const { nickname, token } = await mutation.mutateAsync(req);
        const user = new User(nickname, token);
        localStorage.setItem('token', token);
        setUser(user);
      } catch (e) {
        console.error(e);
        setUser(null);
      }
    },
    [mutation, setUser]
  );

  return { login, ...mutation };
}

export default useLogin;
