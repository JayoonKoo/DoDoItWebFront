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
  }
}

export class BodyIsNullException extends Error {
  code = 500;
  message = 'Server Error(NullException)';
  constructor() {
    super();
    console.error('body 가 비어있습니다.');
  }
}

export default Exception;
