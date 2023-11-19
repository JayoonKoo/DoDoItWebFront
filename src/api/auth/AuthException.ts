export enum AuthExceptionType {
  Duplication = 'duplication user',
  NoUser = 'no user',
  PasswordOrIdNotMatch = 'password or id not match',
  InvalidToken = 'invalid token',
}

type AuthExceptionConstructor = {
  message?: string;
  type: AuthExceptionType;
};

class AuthException extends Error {
  type: AuthExceptionType;
  constructor({ message, type }: AuthExceptionConstructor) {
    super(message ?? type);
    this.type = type;
  }
}

export default AuthException;
