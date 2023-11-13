import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/userState';
import { useEffect } from 'react';

function useUser() {
  const [{ user }, setUser] = useRecoilState(userState);

  useEffect(() => {
    // TODO: ME 처리하기
  }, []);

  return {
    user,
    setUser,
  };
}

export default useUser;
