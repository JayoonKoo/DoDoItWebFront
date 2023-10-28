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

export default Exception;
