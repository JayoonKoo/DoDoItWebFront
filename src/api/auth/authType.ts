// signUp
export type SignUpReq = {
  email: string;
  nickname?: string;
  password: string;
};

export type SignUpRes = {
  nickname: string;
  token: string;
};

// login
export type LoginReq = {
  email: string;
  password: string;
};

export type LoginRes = {
  nickname: string;
  token: string;
};

// me
export type MeRes = {
  token: string;
  nickname: string;
};
