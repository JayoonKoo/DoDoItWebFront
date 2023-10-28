import { useMutation } from '@tanstack/react-query';
import { SignUpReq } from '../../api/auth/authType';
import authAPI from '../../api/auth/authAPI';
import { useNavigate } from 'react-router-dom';

function useSignUp() {
  const navigate = useNavigate();
  const signUp = useMutation({
    mutationFn: async (req: SignUpReq) => await authAPI.signUp(req),
    onSuccess: () => {
      navigate('/auth/login');
    },
  });

  return signUp;
}

export default useSignUp;
