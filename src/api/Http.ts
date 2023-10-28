import Exception from './Exception';
import Res from './type/Res';

export default class Http {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async fetch<S>(url: string, options?: RequestInit) {
    const res = await fetch(`${this.baseURL}${url}`, {
      ...options,
      body: options && options.body && JSON.stringify(options.body),
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    let data: Res<S> | undefined;
    try {
      data = await res.json();
      if (data == null) {
        console.error('data is null');
        throw new Exception({ code: 500, message: 'Server Error' });
      }
    } catch (error) {
      console.error(error);
      throw new Exception({ code: 412, message: '알수 없는 에러' });
    }

    if (!res.ok) {
      const message = data && data.message ? data.message : 'Server Error!';
      const status = res.status;
      throw new Exception({ code: status, message });
    }

    return data.body;
  }
}
