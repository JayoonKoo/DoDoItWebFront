import env from '../../env';
import Exception, { BodyIsNullException } from '../Exception';
import Http from '../Http';
import AuthException, { AuthExceptionType } from './AuthException';
import { SignUpReq, SignUpRes } from './authType';

const http = new Http(env.host);
const authAPI = {
  signUp: async (req: SignUpReq): Promise<SignUpRes> => {
    try {
      const res = await http.fetch<SignUpRes>('/auth/signup', { method: 'POST', body: JSON.stringify(req) });
      if (res == null) {
        throw new BodyIsNullException();
      }
      return res;
    } catch (e) {
      console.error(e);
      if (e instanceof Exception) {
        if (e.code === 409) {
          throw new AuthException({ message: e.message, type: AuthExceptionType.Duplication });
        }
      }
      throw e;
    }
  },
};

export default authAPI;
