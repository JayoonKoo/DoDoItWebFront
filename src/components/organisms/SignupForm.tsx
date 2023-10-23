import React from 'react';
import InputField from './InputField';
import Button from '../atom/Button';
import LinkButton from '../atom/LinkButton';
import Bold from '../atom/Bold';
import { useForm } from 'react-hook-form';

const SignupForm = () => {
  const { register } = useForm();

  return (
    <form className="grid grid-cols-1 gap-4">
      <InputField id="id" type="text" label="아이디" {...register('id')} />

      <InputField id="password" type="password" label="비밀번호" />

      <InputField id="nickname" type="text" label="닉네임" />

      <div className="mt-2">
        <Button text="회원가입" />
        <LinkButton to="../login">
          아이디가 있으신가요? <Bold>로그인</Bold> 으로 가기
        </LinkButton>
      </div>
    </form>
  );
};

export default SignupForm;
