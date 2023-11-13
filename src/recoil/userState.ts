import { atom } from 'recoil';

export class User {
  nickname: string;
  token: string;
  constructor(nickname: string, token: string) {
    this.nickname = nickname;
    this.token = token;
  }
}

export type UserInitialType = {
  user: User | null;
};

const userInitialState: UserInitialType = {
  user: null,
};

export const userState = atom({
  key: 'userState',
  default: userInitialState,
});
