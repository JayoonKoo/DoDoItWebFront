import env from '../../env';
import Exception, { BodyIsNullException } from '../Exception';
import Http from '../Http';
import AuthException, { AuthExceptionType } from './AuthException';
import { LoginReq, LoginRes, SignUpReq, SignUpRes } from './authType';

const http = new Http(env.host);
const authAPI = {
  signUp: async (req: SignUpReq): Promise<SignUpRes> => {
    try {
      const res = await http.fetch<SignUpRes>('/auth/signup', {
        method: 'POST',
        body: JSON.stringify(req),
      });
      if (res == null) {
        throw new BodyIsNullException();
      }
      return res;
    } catch (e) {
      if (e instanceof Exception) {
        if (e.code === 409) {
          throw new AuthException({
            message: e.message,
            type: AuthExceptionType.Duplication,
          });
        }
      }
      throw e;
    }
  },

  login: async (req: LoginReq): Promise<LoginRes> => {
    try {
      const res = await http.fetch<LoginRes>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(req),
      });
      if (res == null) {
        throw new BodyIsNullException();
      }
      return res;
    } catch (e) {
      if (e instanceof Exception) {
        if (e.code === 401) {
          throw new AuthException({
            message: e.message,
            type: AuthExceptionType.PasswordOrIdNotMatch,
          });
        }
      }
      throw e;
    }
  },
};

export default authAPI;
