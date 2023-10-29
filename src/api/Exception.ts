export type ExceptionConstructor = {
  code: number;
  message: string;
};

class Exception extends Error {
  code: number;
  message: string;
  constructor({ code, message }: ExceptionConstructor) {
    super(message);
    this.code = code;
    this.message = message;
  }
}

export class BodyIsNullException extends Exception {
  constructor() {
    super({ code: 500, message: 'Server Error(NullException)' });
    console.error('body 가 비어있습니다.');
  }
}

export default Exception;
