import React from 'react';
import Logo from '../components/atom/Logo';
import InputField from '../components/organisms/InputField';

const SignupPage = () => {
  return (
    <div className="bg-gray-50 h-screen flex justify-center items-center">
      <div className="bg-white p-16 rounded-md shadow-sm relative">
        <div className="absolute left-1/2 -translate-x-1/2 -top-24">
          <Logo />
        </div>

        <form className="grid grid-cols-1 gap-4">
          <div className="flex flex-col">
            <InputField id="id" type="text" label="아이디" />
          </div>

          <div className="flex flex-col">
            <InputField id="password" type="password" label="비밀번호" />
          </div>

          <div className="flex flex-col">
            <InputField id="nickname" type="text" label="닉네임" />
          </div>

          <div className="mt-2">
            <button className="block w-full bg-green-400 rounded-md py-2 text-white font-semibold">회원 가입</button>
            <a className="block w-full text-center text-sm mt-1 cursor-pointer">
              아이디가 있으신가요? <span className="font-semibold">로그인</span> 으로 가기
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
