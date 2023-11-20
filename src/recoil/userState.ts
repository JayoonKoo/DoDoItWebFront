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
  isLoading: boolean;
};
const userInitialState: UserInitialType = {
  user: null,
  isLoading: true,
};

export const userState = atom<UserInitialType>({
  key: 'userState',
  default: userInitialState,
});
