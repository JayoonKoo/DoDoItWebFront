import { atom } from 'recoil';

export class User {
  nickname: string;
  token: string;
  constructor(nickname: string, token: string) {
    this.nickname = nickname;
    this.token = token;
  }
}

export type UserInitialType = User | null;
const userInitialState: UserInitialType = null;

export const userState = atom<UserInitialType>({
  key: 'userState',
  default: userInitialState,
});
