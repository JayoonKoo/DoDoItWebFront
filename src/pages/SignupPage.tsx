import React from 'react';

const SignupPage = () => {
  return (
    <div className="bg-gray-50 h-screen flex justify-center items-center">
      <div className="bg-white p-16 rounded-md shadow-sm relative">
        <div className="absolute left-1/2 -translate-x-1/2 -top-24">
          <h1 className="text-4xl font-semibold">
            Front<span className="text-green-500">App</span>
          </h1>
        </div>

        <form className="grid grid-cols-1 gap-4">
          <div className="flex flex-col">
            <label htmlFor="id" className="font-semibold text-sm">
              아이디
            </label>
            <input
              id="id"
              type="text"
              className="w-96 border rounded-md focus:ring-1 focus:ring-green-200 focus:outline-none px-4 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="font-semibold text-sm">
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              className="w-96 border rounded-md focus:ring-1 focus:ring-green-200 focus:outline-none px-4 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="nickname" className="font-semibold text-sm">
              닉네임
            </label>
            <input
              id="nickname"
              type="text"
              className="w-96 border rounded-md focus:ring-1 focus:ring-green-200 focus:outline-none px-4 py-2"
            />
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
