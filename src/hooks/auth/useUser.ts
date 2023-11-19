import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/userState';
import { useEffect } from 'react';
import authAPI from '../../api/auth/authAPI';

function useUser() {
  const [user, setUser] = useRecoilState(userState);

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
    user,
    setUser,
  };
}

export default useUser;
