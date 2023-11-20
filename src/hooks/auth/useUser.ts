import { useRecoilState } from 'recoil';
import { User, userState } from '../../recoil/userState';
import { useCallback, useEffect } from 'react';
import authAPI from '../../api/auth/authAPI';

function useUser() {
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const setUser = useCallback((user: User | null) => {
    setUserInfo({ user, isLoading: false });
  }, []);

  useEffect(() => {
    authAPI
      .me()
      .then(setUser)
      .catch((e) => {
        console.error(e);
        setUser(null);
      });
  }, [setUser]);

  return {
    userInfo,
    setUser,
  };
}

export default useUser;
