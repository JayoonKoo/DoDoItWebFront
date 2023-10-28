import Exception from './Exception';
import Res from './type/Res';

export default class Http {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async fetch<T extends Res<T>>(url: string, options?: RequestInit) {
    const res = await fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    let data: T | undefined;
    try {
      data = await res.json();
    } catch (error) {
      console.error(error);
      throw new Exception({ code: 412, message: '알수 없는 에러' });
    }

    if (!res.ok) {
      const message = data && data.message ? data.message : 'Server Error!';
      const status = res.status;
      throw new Exception({ code: status, message });
    }

    return data;
  }
}
