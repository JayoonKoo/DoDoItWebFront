import env from '../../env';
import Exception, { BodyIsNullException } from '../Exception';
import Http from '../Http';
import AuthException, { AuthExceptionType } from './AuthException';
import { LoginReq, LoginRes, MeRes, SignUpReq, SignUpRes } from './authType';

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

  me: async (): Promise<MeRes> => {
    try {
      const res = await http.fetch<MeRes>('/auth/me');
      if (res == null) {
        throw new BodyIsNullException();
      }
      return res;
    } catch (e) {
      if (e instanceof Exception) {
        switch (e.code) {
          case 401:
            throw new AuthException({
              message: e.message,
              type: AuthExceptionType.InvalidToken,
            });
          case 404:
            throw new AuthException({
              message: e.message,
              type: AuthExceptionType.NoUser,
            });
        }
      }
      throw e;
    }
  },
};

export default authAPI;
